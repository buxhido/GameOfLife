
import {Cell} from './cell.js';
import {Rule} from './rule.js';
import {Pixel} from './pixel.js';
import {Mouse} from './mouse.js';
import {Canvas} from './canvas.js';
import {ArrayUtil} from './arrayUtil.js';
import {Constants} from './constants.js';

class Board{

	static GameBoard() {
		return {
			columns: Constants._SETTINGS.numberOfCells,
			rows : Constants._SETTINGS.numberOfCells,
			board : null,
			createBoard : function(){ 
				this.board = Board.populateBoard(ArrayUtil.create2DArray(this.columns,this.rows),this.columns,this.rows);
			}
		};

	};

	static createGameBoard() {
		var gameBoard = Board.GameBoard(); 
		gameBoard.createBoard();
		return gameBoard;
	};

	static populateBoard(board,columns,rows) {
		for (var i = 0; i < columns; i++) {
			for (var j = 0; j < rows; j++) {
				board[i][j] = Cell.BuildCell(i,j);
			}	
		}
		return board;
	};

	static showBoardGame(gameBoard) {
		if(null != gameBoard) {
			for (var i = 0; i < gameBoard.columns; i++) {
				for (var j = 0; j < gameBoard.rows; j++) {
					gameBoard.board[i][j].isAlive ? Pixel.printPixel(i,j) :  Pixel.clearPixel(i,j);
				}
			}
		}
	};

	static applyBoardRules(gameBoard) {
		if(Constants._GLOBAL_VALUES.run) {
			var lastBoardPrinted = Board.populateBoard(ArrayUtil.create2DArray(gameBoard.columns,gameBoard.rows),gameBoard.columns,gameBoard.rows);		
			var nextTimeBoard = Board.populateBoard(ArrayUtil.create2DArray(gameBoard.columns,gameBoard.rows),gameBoard.columns,gameBoard.rows);

			for (var i = 0; i < gameBoard.columns; i++) {
				for (var j = 0; j < gameBoard.rows; j++) {
					var currentCell = gameBoard.board[i][j];
					nextTimeBoard[i][j].isAlive = Rule.applyCellRules(gameBoard,currentCell);
					lastBoardPrinted[i][j].isAlive = nextTimeBoard[i][j].isAlive;			
				}
			}

			Constants._GLOBAL_VALUES.lastBoardPrinted = lastBoardPrinted;
			gameBoard.board = nextTimeBoard;	
			Board.showBoardGame(gameBoard);
			setTimeout( function() { Board.applyBoardRules(gameBoard)  }  , Constants._SETTINGS.delayTime);
		}
		
	};

	static printBaseBoard(board){
		Canvas.showGrid();
		Mouse.createMouseDownListener();
	};

	static updateBoardFromLastBoardPrinted() {
		if(null == Constants._GLOBAL_VALUES.lastBoardPrinted) {
			var gameBoard = Constants._GLOBAL_VALUES.gameOfLifeBoard;
			var rows = Constants._GLOBAL_VALUES.gameOfLifeBoard.rows;
			var columns = Constants._GLOBAL_VALUES.gameOfLifeBoard.columns;
			Constants._GLOBAL_VALUES.lastBoardPrinted = Board.populateBoard(ArrayUtil.create2DArray(columns,rows),columns,rows);
		}
		Constants._GLOBAL_VALUES.gameOfLifeBoard.board = Constants._GLOBAL_VALUES.lastBoardPrinted;
		Board.showBoardGame(Constants._GLOBAL_VALUES.gameOfLifeBoard);
	};

}

export {Board};