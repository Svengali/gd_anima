func generate_animation(node: Node) -> Dictionary:
	return {
		0: {
			x = 0
		},
		[10, 30, 50, 70, 90]: {
			x = -10,
		},
		[20, 40, 60, 80]: {
			x = 10
		},
		100: {
			x = 0
		},
		relative = ['x']
	}
