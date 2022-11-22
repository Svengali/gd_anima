tool
extends VBoxContainer

signal select_animation
signal select_easing
signal content_size_changed(new_size)
signal select_relative_property(source)
signal animate_as_changed(as_node)
signal updated
signal removed
signal highlight_node(node)
signal select_property_to_animate

onready var _property_data = find_node("PropertyData")
onready var _select_animation = find_node("SelectAnimation")
onready var _animate_property = find_node("AnimateProperty")
onready var _title = find_node("Title")

var _property_name = ""
var _property_type = TYPE_NIL
var _animation_name: String
var _animate_with: int = AnimaVisualNode.USE.ANIMATE_PROPERTY
var _is_restoring := false

func _ready():
	_select_animation.hide()
	
	find_node("PropertyOrAnimation").set_items([
		{ icon = "res://addons/anima/visual-editor/icons/Property.svg", label = "Animate proeprty" },
		{ icon = "res://addons/anima/visual-editor/icons/Animation.svg", label = "Use existing animation" },
	])
	_update_title()

func get_data() -> Dictionary:
	if _property_data == null:
		_property_data = find_node("PropertyData")

	var easing_value = ANIMA.EASING.LINEAR
	var easing_button: Button = _property_data.find_node("EasingButton")

	if easing_button.has_meta("easing_value"):
		easing_value = int(easing_button.get_meta("easing_value"))

	var data =  {
		animation_name = _animation_name,
		property_type = _property_type,
		property_name = _property_name,
		property = {
			from = _property_data.find_node("FromValue").get_value(),
			to = _property_data.find_node("ToValue").get_value(),
			initialValue = _property_data.find_node("InitialValue").get_value(),
			relative = _property_data.find_node("RelativeCheck").pressed,
			pivot = _property_data.find_node("PivotButton").get_value(),
			easing = [easing_button.text, easing_value]
		}
	}

	return data

func restore_data(data: Dictionary) -> void:
	_is_restoring = true

	if data.has("animation_name"):
		selected_animation(data.animation_name)

	if _property_data == null:
		_property_data = find_node("PropertyData")

	set_property_to_animate(data.property_name, data.property_type)

	_property_data.find_node("FromValue").set_value(data.property.from)
	_property_data.find_node("ToValue").set_value(data.property.to)
	_property_data.find_node("InitialValue").set_value(data.property.initialValue)
	_property_data.find_node("RelativeCheck").pressed = data.property.relative
	_property_data.find_node("PivotButton").set_value(data.property.pivot)

	set_easing(data.property.easing[0], data.property.easing[1])

	if _animation_name == "" and _property_name == "":
		_title.pressed = true

	_is_restoring= false

func selected_animation(name) -> void:
	if name:
		_animation_name = name
		find_node("SelectAnimation").set_text(name)

	_emit_node_update()

func set_easing(name: String, value: int) -> void:
	var button: Button = find_node("EasingButton")

	button.text = name
	button.set_meta("easing_value", value)

	_emit_node_update()

func set_property_to_animate(name: String, type) -> void:
	_property_name = name
	_property_type = type

	_property_data.visible = true
	find_node("SelectProperty").hide()

	_set_property_type(type)

	_update_title()

	_emit_node_update()

func _update_title() -> void:
	var title = "(no animation)"
	var id = find_node("PropertyOrAnimation").get_selected_id()
	
	if id == 0 and _property_name:
		title = "Property: " + _property_name
	elif id == 1 and _animation_name:
		title = "Animation: " + _animation_name

	_title.set_text(title)

func _set_property_type(property_type) -> void:
	for child in _property_data.get_children():
		if child.has_method('set_type') and property_type != TYPE_NIL:
			child.set_type(property_type)

func _on_SelectProperty_pressed():
	emit_signal("select_property_to_animate")

func _on_PropertyOrAnimation_item_selected(id):
	_update_title()

func _emit_node_update() -> void:
	if not _is_restoring:
		emit_signal("updated")

func _on_EasingButton_pressed():
	emit_signal("select_easing")

func _on_ConfirmationDialog_confirmed():
	queue_free()
	_emit_node_update()

func _on_Remove_pressed():
	$ConfirmationDialog.popup_centered()

#
# Force the "MarginContainer" to recalculate the correct height when 
# a button is hidden
#
func _adjust_property_data_height():
	_property_data.get_parent().get_parent().rect_size.y = 0

func _on_FromValue_select_relative_property():
	emit_signal("select_relative_property", find_node("FromValue"))

func _on_ToValue_select_relative_property():
	emit_signal("select_relative_property", find_node("ToValue"))

func _on_InitialValue_select_relative_property():
	emit_signal("select_relative_property", find_node("InitialValue"))
