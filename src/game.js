import * as constants from './constants';
import * as board from './board';

export function launchGameOfLife() {
	constants._GLOBAL_VALUES.gameOfLifeBoard = board.createGameBoard(15,15);
	board.showBoardGame(constants._GLOBAL_VALUES.gameOfLifeBoard);
	startStop(false);
	board.printBaseBoard(constants._GLOBAL_VALUES.gameOfLifeBoard.board);
};

export function startStop(run) {
	constants._GLOBAL_VALUES.run = run;	

	document.getElementById('playId').disabled = run;
	document.getElementById('pauseId').disabled = !document.getElementById('playId').disabled;

	if(run) {
		board.applyBoardRules(constants._GLOBAL_VALUES.gameOfLifeBoard);
	} else {
		board.updateBoardFromLastBoardPrinted();	
	}
};

export function resetBoard() {
	constants._GLOBAL_VALUES.lastBoardPrinted = null;
	startStop(false);	
};