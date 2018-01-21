/* 
var _GLOBAL_VALUES = {
	delayTime:200,
	run: true,
	gameOfLifeBoard : null,
	lastBoardPrinted: null
};
 */
/* var _NEIGHBORS = {  NORTH_WEST:"NORTH_WEST", NORTH:"NORTH", NORTH_EAST:"NORTH_EAST", EAST:"EAST", 
					SOUTH_EAST:"SOUTH_EAST", SOUTH: "SOUTH", SOUTH_WEST: "SOUTH_WEST",WEST:"WEST"} */

/* function GameBoard(columns,rows) {
	
	this.columns= columns;
	this.rows = rows;
	this.board = null;
	this.createBoard = function(){ 
		this.board = populateBoard(create2DArray(this.columns,this.rows),this.columns,this.rows);
	};
	this.getInfoBoardGame = function() {return "Rows: "+this.rows + "; Columns: "+this.columns;};
}; */

/* function Cell(x,y) {
	
	this.isAlive=false;
	this.x = x;
	this.y = y;
	this.getInfoCell = function() {return "x: "+this.x+" - y: "+this.y+ " - isAlive: "+this.isAlive};
}; */

/* var createGameBoard = function(columns,rows) {
	
	var gameBoard = new GameBoard(columns,rows);
	gameBoard.createBoard();
	return gameBoard;
}; */

/* var launchGameOfLife = function() {
	
	_GLOBAL_VALUES.gameOfLifeBoard = createGameBoard(15,15);
	showBoardGame(_GLOBAL_VALUES.gameOfLifeBoard);
	startStop(false);
	printBaseBoard(_GLOBAL_VALUES.gameOfLifeBoard.board);
}; */

/* var getCellByPossition = function(gameBoard,x_poss,y_poss) {
	
	return gameBoard.board[x_poss][y_poss];
}; */

/* var create2DArray = function (columns,rows) {
	
	var x = new Array(columns);
	for (var i = 0; i < columns; i++) {
	   x[i] = new Array(rows);
	}
   return x;
}; */

/* var populateBoard = function (board,columns,rows) {
	
	for (var i = 0; i < columns; i++) {
		for (var j = 0; j < rows; j++) {
			board[i][j] = new Cell(i,j);
   		}	
	}
	return board;
}; */

/* var showBoardGame = function (gameBoard) {

	if(null != gameBoard) {
		for (var i = 0; i < gameBoard.columns; i++) {
			for (var j = 0; j < gameBoard.rows; j++) {
				gameBoard.board[i][j].isAlive ? printPixel(i,j) :  clearPixel(i,j);
	   		}
		}
	}
}; */

/* var applyBoardRules = function (gameBoard) {

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
	
}; */


/* var applyCellRules = function(gameBoard,cell) {

	var isAlive = false;
	var neighborsAlive = 0;

	for (var neighbor in _NEIGHBORS) {
		if(isNeighborAlive(gameBoard,cell, _NEIGHBORS[neighbor])) {
			neighborsAlive++;
		}
	}

	if( cell.isAlive && (neighborsAlive == 2 || neighborsAlive == 3)  ) {
		isAlive = true;
	} else if( !cell.isAlive && neighborsAlive == 3 ) {
		isAlive = true;
	}

	return isAlive;
}; */

/* var isNeighborAlive = function(gameBoard,cell,neighborType) {
	var isAlive = false;
	switch (neighborType) {
		case _NEIGHBORS.NORTH_WEST:
			if(cell.x > 0 && cell.y > 0) {
				isAlive = getCellByPossition(gameBoard, cell.x -1 , cell.y - 1 ).isAlive;
			}
			break;
		case _NEIGHBORS.NORTH:
			if(cell.y > 0 ) {
				isAlive = getCellByPossition(gameBoard, cell.x , cell.y - 1 ).isAlive;
			}
			break;
		case _NEIGHBORS.NORTH_EAST:
			if(cell.x < gameBoard.columns - 1 && cell.y > 0 ) {
				isAlive = getCellByPossition(gameBoard, cell.x + 1 , cell.y - 1 ).isAlive;
			}
			break;
		case _NEIGHBORS.EAST:
			if(cell.x < gameBoard.columns - 1 ) {
				isAlive = getCellByPossition(gameBoard, cell.x + 1 , cell.y ).isAlive;
			}
			break;
		case _NEIGHBORS.SOUTH_EAST:
			if(cell.x < gameBoard.columns - 1 && cell.y < gameBoard.rows - 1 ) {
				isAlive = getCellByPossition(gameBoard, cell.x + 1 , cell.y + 1 ).isAlive;
			}
			break;
		case _NEIGHBORS.SOUTH:
			if(cell.y < gameBoard.rows - 1 ) {
				isAlive = getCellByPossition(gameBoard, cell.x , cell.y + 1 ).isAlive;
			}
			break;
		case _NEIGHBORS.SOUTH_WEST:
			if(cell.x > 0 && cell.y < gameBoard.rows - 1 ) {
				isAlive = getCellByPossition(gameBoard, cell.x - 1 , cell.y + 1 ).isAlive;
			}
			break;
		case _NEIGHBORS.WEST:
			if(cell.x > 0 ) {
				isAlive = getCellByPossition(gameBoard, cell.x - 1 , cell.y ).isAlive;
			}
			break;
		default:
			isAlive = false;
	}
	return isAlive;
}; */

/* var printPixel = function(x,y) {
	
    cxt = getCanvasContext();
    cxt.fillRect((x*16)+3, (y*16)+3, 10, 10);
}

var clearPixel = function(x,y) {
	
    cxt = getCanvasContext();
    cxt.clearRect((x*16)+3, (y*16)+3, 10, 10);
}

var updatePixelByClick = function(x,y,board) {

    board[x][y].isAlive = !board[x][y].isAlive;

	if(board[x][y].isAlive){
		printPixel(x,y);
	} else {
		clearPixel(x,y)
	}
} */

/* var printBaseBoard = function(board){

	showGrid();
	createMouseDownListener();
} */

/* var createMouseDownListener = function() {
	
	getCanvas().addEventListener('mousedown', function(evt) {
        
        var mousePos = getMousePos(getCanvas(), evt);
        var x = parseInt((mousePos.x)/16);
        var y = parseInt((mousePos.y)/16);

		updatePixelByClick(x,y, _GLOBAL_VALUES.lastBoardPrinted);
        startStop(false);

      }, false);
}; */

/* var showGrid = function() {
	
	var context = getCanvasContext();

	for (var x = 0.0; x <= 160; x += 16) {
	  context.moveTo(x, 0);
	  context.lineTo(x, 160);
	}

	for (var y = 0.0; y <= 160; y += 16) {
	  context.moveTo(0, y);
	  context.lineTo(160, y);
	}

	context.strokeStyle = "#000";
	context.stroke();
} */

/* var getCanvas = function() {
	return document.getElementById("gameOfLifeCanvas");
}

var getCanvasContext = function() {
	return  getCanvas().getContext("2d");
} */

/* var getMousePos = function(canvas, evt) {
	
	var rect = canvas.getBoundingClientRect();
	return {
	  x: evt.clientX - rect.left,
	  y: evt.clientY - rect.top
	};
} */

/* var resetBoard = function() {

	_GLOBAL_VALUES.lastBoardPrinted = null;
	startStop(false);	
} */

/* var startStop = function(run) {

	_GLOBAL_VALUES.run = run;	

	document.getElementById('playId').disabled = run;
	document.getElementById('pauseId').disabled = !document.getElementById('playId').disabled;

	if(run) {
		applyBoardRules(_GLOBAL_VALUES.gameOfLifeBoard);
	} else {
		updateBoardFromLastBoardPrinted();	
	}
}; */
/* 
var updateBoardFromLastBoardPrinted = function() {

	if(null == _GLOBAL_VALUES.lastBoardPrinted) {
		var gameBoard = _GLOBAL_VALUES.gameOfLifeBoard;
		var rows = _GLOBAL_VALUES.gameOfLifeBoard.rows;
		var columns = _GLOBAL_VALUES.gameOfLifeBoard.columns;
		_GLOBAL_VALUES.lastBoardPrinted = populateBoard(create2DArray(columns,rows),columns,rows);
	}

	_GLOBAL_VALUES.gameOfLifeBoard.board = _GLOBAL_VALUES.lastBoardPrinted;
	showBoardGame(_GLOBAL_VALUES.gameOfLifeBoard);
}; */