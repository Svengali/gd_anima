extends Node

enum PIVOT {
	TOP_LEFT,
	TOP_CENTER,
	TOP_RIGHT,
	CENTER_LEFT,
	CENTER,
	CENTER_RIGHT,
	BOTTOM_LEFT,
	BOTTOM_CENTER,
	BOTTOM_RIGHT
}

enum VISIBILITY {
	IGNORE,
	HIDDEN_ONLY,
	TRANSPARENT_ONLY,
	HIDDEN_AND_TRANSPARENT
}

enum GRID {
	TOGETHER,
	SEQUENCE_TOP_LEFT,
	SEQUENCE_BOTTOM_RIGHT,
	COLUMNS_ODD,
	COLUMNS_EVEN,
	ROWS_ODD,
	ROWS_EVEN,
	ODD,
	EVEN,
	FROM_CENTER,
	FROM_POINT,
	RANDOM
}

const GROUP := {
	TOGETHER = GRID.TOGETHER,
	FROM_TOP = GRID.SEQUENCE_TOP_LEFT,
	FROM_BOTTOM = GRID.SEQUENCE_BOTTOM_RIGHT,
	FROM_CENTER = GRID.FROM_CENTER,
	ODDS_ONLY = GRID.COLUMNS_ODD,
	EVEN_ONLY = GRID.COLUMNS_EVEN,
	RANDOME = GRID.RANDOM,
	FROM_INDEX = GRID.FROM_POINT
}

enum LOOP_STRATEGY {
	USE_EXISTING_RELATIVE_DATA,
	RECALCULATE_RELATIVE_DATA,
}

enum TYPE {
	NODE,
	GROUP,
	GRID
}

enum VALUES_IN {
	PIXELS,
	PERCENTAGE
}

const Align = {
	LEFT = HALIGN_LEFT,
	CENTER = HALIGN_CENTER,
	RIGHT = HALIGN_RIGHT,
}

const VAlign = {
	TOP = VALIGN_TOP,
	CENTER = VALIGN_CENTER,
	BOTTOM = VALIGN_BOTTOM,
}

enum RELATIVE_TO {
	INITIAL_VALUE,
	PREVIOUS_FRAME,
}

const EASING = AnimaEasing.EASING

const DEFAULT_DURATION := 0.7
const DEFAULT_ITEMS_DELAY := 0.05
const MINIMUM_DURATION := 0.000001
