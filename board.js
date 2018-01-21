function GameBoard(columns,rows) {
	
	this.columns= columns;
	this.rows = rows;
	this.board = null;
	this.createBoard = function(){ 
		this.board = populateBoard(create2DArray(this.columns,this.rows),this.columns,this.rows);
	};
	this.getInfoBoardGame = function() {return "Rows: "+this.rows + "; Columns: "+this.columns;};
};

var createGameBoard = function(columns,rows) {
	
	var gameBoard = new GameBoard(columns,rows);
	gameBoard.createBoard();
	return gameBoard;
};

var populateBoard = function (board,columns,rows) {
	
	for (var i = 0; i < columns; i++) {
		for (var j = 0; j < rows; j++) {
			board[i][j] = new Cell(i,j);
   		}	
	}
	return board;
};

var showBoardGame = function (gameBoard) {

	if(null != gameBoard) {
		for (var i = 0; i < gameBoard.columns; i++) {
			for (var j = 0; j < gameBoard.rows; j++) {
				gameBoard.board[i][j].isAlive ? printPixel(i,j) :  clearPixel(i,j);
	   		}
		}
	}
};

var applyBoardRules = function (gameBoard) {

	if(_GLOBAL_VALUES.run) {

		var lastBoardPrinted = populateBoard(create2DArray(gameBoard.columns,gameBoard.rows),gameBoard.columns,gameBoard.rows);		
		var nextTimeBoard = populateBoard(create2DArray(gameBoard.columns,gameBoard.rows),gameBoard.columns,gameBoard.rows);

		for (var i = 0; i < gameBoard.columns; i++) {
			for (var j = 0; j < gameBoard.rows; j++) {
				var currentCell = gameBoard.board[i][j];
				nextTimeBoard[i][j].isAlive = applyCellRules(gameBoard,currentCell);
				lastBoardPrinted[i][j].isAlive = nextTimeBoard[i][j].isAlive;			
	   		}
		}

		_GLOBAL_VALUES.lastBoardPrinted = lastBoardPrinted;

		gameBoard.board = nextTimeBoard;	
		showBoardGame(gameBoard);
		setTimeout( function() { applyBoardRules(gameBoard)  }  , _GLOBAL_VALUES.delayTime);
	}
	
};

var printBaseBoard = function(board){

	showGrid();
	createMouseDownListener();
};

var resetBoard = function() {

	_GLOBAL_VALUES.lastBoardPrinted = null;
	startStop(false);	
};

var updateBoardFromLastBoardPrinted = function() {

	if(null == _GLOBAL_VALUES.lastBoardPrinted) {
		var gameBoard = _GLOBAL_VALUES.gameOfLifeBoard;
		var rows = _GLOBAL_VALUES.gameOfLifeBoard.rows;
		var columns = _GLOBAL_VALUES.gameOfLifeBoard.columns;
		_GLOBAL_VALUES.lastBoardPrinted = populateBoard(create2DArray(columns,rows),columns,rows);
	}

	_GLOBAL_VALUES.gameOfLifeBoard.board = _GLOBAL_VALUES.lastBoardPrinted;
	showBoardGame(_GLOBAL_VALUES.gameOfLifeBoard);
};
