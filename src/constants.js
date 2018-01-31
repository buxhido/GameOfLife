class Constants{
	
	static _GLOBAL_VALUES = {
		run: true,
		gameOfLifeBoard : null,
		lastBoardPrinted: null
	};

	static _SETTINGS = {
		canvas_id: null,
		playButton_id: null,
		pauseButton_id: null,
		numberOfCells: 20,
		cellSizePixel: 15,
		margin: 3,
		delayTime:200
	};

	static _NEIGHBORS = {  
		NORTH_WEST:"NORTH_WEST", 
		NORTH:"NORTH", 
		NORTH_EAST:"NORTH_EAST", 
		EAST:"EAST", 
		SOUTH_EAST:"SOUTH_EAST", 
		SOUTH: "SOUTH", 
		SOUTH_WEST: "SOUTH_WEST",
		WEST:"WEST"
	};
}

export {Constants}