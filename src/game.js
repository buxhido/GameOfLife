import {Constants} from './constants.js';
import * as Board from './board.js';

class Game {

	static launchGameOfLife(settings) {
		Game.SetSettings(settings);
		Constants._GLOBAL_VALUES.gameOfLifeBoard = Board.CreateGameBoard();
		Board.ShowBoardGame(Constants._GLOBAL_VALUES.gameOfLifeBoard);
		Game.startStop(false);
		Board.PrintBaseBoard(Constants._GLOBAL_VALUES.gameOfLifeBoard.board);
	};
	
	static startStop(run) {
		Constants._GLOBAL_VALUES.run = run;	
		document.getElementById(Constants._SETTINGS.playButton_id).disabled = run;
		document.getElementById(Constants._SETTINGS.pauseButton_id).disabled = !document.getElementById(Constants._SETTINGS.playButton_id).disabled;
	
		if(run) {
			Board.ApplyBoardRules(Constants._GLOBAL_VALUES.gameOfLifeBoard);
		} else {
			Board.UpdateBoardFromLastBoardPrinted();	
		}
	};
	
	static resetBoard() {
		Constants._GLOBAL_VALUES.lastBoardPrinted = null;
		Game.startStop(false);	
	};

	static SetSettings(settings) {
		Object.keys(settings).forEach(key => Constants._SETTINGS[key] = settings[key]);
	}

}

export {Game};