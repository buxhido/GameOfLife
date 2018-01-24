export function launchGameOfLife() {
	
	_GLOBAL_VALUES.gameOfLifeBoard = createGameBoard(15,15);
	showBoardGame(_GLOBAL_VALUES.gameOfLifeBoard);
	startStop(false);
	printBaseBoard(_GLOBAL_VALUES.gameOfLifeBoard.board);
};

export function startStop(run) {

	_GLOBAL_VALUES.run = run;	

	document.getElementById('playId').disabled = run;
	document.getElementById('pauseId').disabled = !document.getElementById('playId').disabled;

	if(run) {
		applyBoardRules(_GLOBAL_VALUES.gameOfLifeBoard);
	} else {
		updateBoardFromLastBoardPrinted();	
	}
};

export function updateBoardFromLastBoardPrinted() {

	if(null == _GLOBAL_VALUES.lastBoardPrinted) {
		var gameBoard = _GLOBAL_VALUES.gameOfLifeBoard;
		var rows = _GLOBAL_VALUES.gameOfLifeBoard.rows;
		var columns = _GLOBAL_VALUES.gameOfLifeBoard.columns;
		_GLOBAL_VALUES.lastBoardPrinted = populateBoard(create2DArray(columns,rows),columns,rows);
	}

	_GLOBAL_VALUES.gameOfLifeBoard.board = _GLOBAL_VALUES.lastBoardPrinted;
	showBoardGame(_GLOBAL_VALUES.gameOfLifeBoard);
};