import {BuildCell} from './cell.js'
import {ApplyCellRules} from './rule.js'
import {ClearPixel, PrintPixel} from './pixel.js';
import {CreateMouseDownListener} from './mouse.js';
import {ShowGrid} from './canvas.js';
import {Create2DArray} from './arrayUtil.js';
import {Constants} from './constants.js';

export function GameBoard() {
	return {
		columns: Constants._SETTINGS.numberOfCells,
		rows : Constants._SETTINGS.numberOfCells,
		board : null,
		createBoard : function(){ 
			this.board = PopulateBoard(Create2DArray(this.columns,this.rows),this.columns,this.rows);
		}
	};

}

export function CreateGameBoard() {
	let gameBoard = GameBoard(); 
	gameBoard.createBoard();
	return gameBoard;
}

export function PopulateBoard(board,columns,rows) {
	for (var i = 0; i < columns; i++) {
		for (var j = 0; j < rows; j++) {
			board[i][j] = BuildCell(i,j);
		}	
	}
	return board;
}

export function ShowBoardGame(gameBoard) {
	if(null != gameBoard) {
		for (var i = 0; i < gameBoard.columns; i++) {
			for (var j = 0; j < gameBoard.rows; j++) {
				gameBoard.board[i][j].isAlive ? PrintPixel(i,j) :  ClearPixel(i,j);
			}
		}
	}
}

export function ApplyBoardRules(gameBoard) {
	if(Constants._GLOBAL_VALUES.run) {
		let lastBoardPrinted = PopulateBoard(Create2DArray(gameBoard.columns,gameBoard.rows),gameBoard.columns,gameBoard.rows);		
		let nextTimeBoard = PopulateBoard(Create2DArray(gameBoard.columns,gameBoard.rows),gameBoard.columns,gameBoard.rows);

		for (var i = 0; i < gameBoard.columns; i++) {
			for (var j = 0; j < gameBoard.rows; j++) {
				var currentCell = gameBoard.board[i][j];
				nextTimeBoard[i][j].isAlive = ApplyCellRules(gameBoard,currentCell);
				lastBoardPrinted[i][j].isAlive = nextTimeBoard[i][j].isAlive;			
			}
		}

		Constants._GLOBAL_VALUES.lastBoardPrinted = lastBoardPrinted;
		gameBoard.board = nextTimeBoard;	
		ShowBoardGame(gameBoard);
		setTimeout( function() { ApplyBoardRules(gameBoard)  }  , Constants._SETTINGS.delayTime);
	}
	
}

export function PrintBaseBoard(board){
	ShowGrid();
	CreateMouseDownListener();
}

export function UpdateBoardFromLastBoardPrinted() {
	if(null == Constants._GLOBAL_VALUES.lastBoardPrinted) {
		let rows = Constants._GLOBAL_VALUES.gameOfLifeBoard.rows;
		let columns = Constants._GLOBAL_VALUES.gameOfLifeBoard.columns;
		Constants._GLOBAL_VALUES.lastBoardPrinted = PopulateBoard(Create2DArray(columns,rows),columns,rows);
	}
	Constants._GLOBAL_VALUES.gameOfLifeBoard.board = Constants._GLOBAL_VALUES.lastBoardPrinted;
	ShowBoardGame(Constants._GLOBAL_VALUES.gameOfLifeBoard);
}