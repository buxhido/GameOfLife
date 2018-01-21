class Constants {

	static get _GLOBAL_VALUES() {
		return {
			delayTime:200,
			run: true,
			gameOfLifeBoard : null,
			lastBoardPrinted: null
		};
	}

	static get _NEIGHBORS() {
		return {  NORTH_WEST:"NORTH_WEST", NORTH:"NORTH", NORTH_EAST:"NORTH_EAST", EAST:"EAST", SOUTH_EAST:"SOUTH_EAST", SOUTH: "SOUTH", SOUTH_WEST: "SOUTH_WEST", WEST:"WEST"};
	}
}

export { Constants };