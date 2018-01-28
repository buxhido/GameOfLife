import {Constants} from './constants.js';
import {Board} from './board.js';

class Game {

	static launchGameOfLife() {
		Constants._GLOBAL_VALUES.gameOfLifeBoard = Board.createGameBoard(15,15);
		Board.showBoardGame(Constants._GLOBAL_VALUES.gameOfLifeBoard);
		Game.startStop(false);
		Board.printBaseBoard(Constants._GLOBAL_VALUES.gameOfLifeBoard.board);
	};
	
	static startStop(run) {
		Constants._GLOBAL_VALUES.run = run;	
		document.getElementById('playId').disabled = run;
		document.getElementById('pauseId').disabled = !document.getElementById('playId').disabled;
	
		if(run) {
			Board.applyBoardRules(Constants._GLOBAL_VALUES.gameOfLifeBoard);
		} else {
			Board.updateBoardFromLastBoardPrinted();	
		}
	};
	
	static resetBoard() {
		Constants._GLOBAL_VALUES.lastBoardPrinted = null;
		Game.startStop(false);	
	};
}

export {Game};