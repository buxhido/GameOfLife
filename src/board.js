import * as arrayUtil from './arrayUtil';
import * as constants from './constants';
import * as pixel from './pixel';
import * as mouse from './mouse';
import * as canvas from './canvas';
import * as cell from './cell';
import * as game from './game';

export function GameBoard(columns,rows) {
	this.columns= columns;
	this.rows = rows;
	this.board = null;
	this.createBoard = function(){ 
		this.board = populateBoard(arrayUtil.create2DArray(this.columns,this.rows),this.columns,this.rows);
	};
	this.getInfoBoardGame = function() {return "Rows: "+this.rows + "; Columns: "+this.columns;};
};

export function createGameBoard(columns,rows) {
	var gameBoard = new GameBoard(columns,rows);
	gameBoard.createBoard();
	return gameBoard;
};

export function populateBoard(board,columns,rows) {
	for (var i = 0; i < columns; i++) {
		for (var j = 0; j < rows; j++) {
			board[i][j] = cell.BuildCell(i,j);
   		}	
	}
	return board;
};

export function showBoardGame(gameBoard) {
	if(null != gameBoard) {
		for (var i = 0; i < gameBoard.columns; i++) {
			for (var j = 0; j < gameBoard.rows; j++) {
				gameBoard.board[i][j].isAlive ? pixel.printPixel(i,j) :  pixel.clearPixel(i,j);
	   		}
		}
	}
};

export function applyBoardRules(gameBoard) {
	if(constants._GLOBAL_VALUES.run) {

		var lastBoardPrinted = populateBoard(arrayUtil.create2DArray(gameBoard.columns,gameBoard.rows),gameBoard.columns,gameBoard.rows);		
		var nextTimeBoard = populateBoard(arrayUtil.create2DArray(gameBoard.columns,gameBoard.rows),gameBoard.columns,gameBoard.rows);

		for (var i = 0; i < gameBoard.columns; i++) {
			for (var j = 0; j < gameBoard.rows; j++) {
				var currentCell = gameBoard.board[i][j];
				nextTimeBoard[i][j].isAlive = rule.applyCellRules(gameBoard,currentCell);
				lastBoardPrinted[i][j].isAlive = nextTimeBoard[i][j].isAlive;			
	   		}
		}

		constants._GLOBAL_VALUES.lastBoardPrinted = lastBoardPrinted;
		gameBoard.board = nextTimeBoard;	
		showBoardGame(gameBoard);
		setTimeout( function() { applyBoardRules(gameBoard)  }  , constants._GLOBAL_VALUES.delayTime);
	}
	
};

export function printBaseBoard(board){
	canvas.showGrid();
	mouse.createMouseDownListener();
};

export function updateBoardFromLastBoardPrinted() {
	if(null == constants._GLOBAL_VALUES.lastBoardPrinted) {
		var gameBoard = constants._GLOBAL_VALUES.gameOfLifeBoard;
		var rows = constants._GLOBAL_VALUES.gameOfLifeBoard.rows;
		var columns = constants._GLOBAL_VALUES.gameOfLifeBoard.columns;
		constants._GLOBAL_VALUES.lastBoardPrinted = populateBoard(arrayUtil.create2DArray(columns,rows),columns,rows);
	}
	constants._GLOBAL_VALUES.gameOfLifeBoard.board = constants._GLOBAL_VALUES.lastBoardPrinted;
	showBoardGame(constants._GLOBAL_VALUES.gameOfLifeBoard);
};