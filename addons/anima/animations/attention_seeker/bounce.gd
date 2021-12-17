func generate_animation(node: Node) -> Dictionary:
	return {
		[0, 20, 53, 100]: {
			y = 0,
			easing = [0.215, 0.61, 0.355, 1],
			"scale:y": 1.0,
		},
		[40, 43]: {
			y = -30,
			"scale:y": 1.1,
			easing = [0.755, 0.05, 0.855, 0.06]
		},
		70: {
			y = -15,
			"scale:y": 1.05,
			easing = [0.755, 0.05, 0.855, 0.06]
		},
		80: {
			y = 0,
			"scale:y": 0.95,
			easing = [0.215, 0.61, 0.355, 1],
		},
		90: {
			y = -4,
			"scale:y": 1.02,
		},
		relative = ['y'],
	}

