(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["EntryPoint"] = factory();
	else
		root["EntryPoint"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.launchGameOfLife = launchGameOfLife;
exports.startStop = startStop;
exports.resetBoard = resetBoard;

var _constants = __webpack_require__(1);

var constants = _interopRequireWildcard(_constants);

var _board = __webpack_require__(4);

var board = _interopRequireWildcard(_board);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function launchGameOfLife() {
	constants._GLOBAL_VALUES.gameOfLifeBoard = board.createGameBoard(15, 15);
	board.showBoardGame(constants._GLOBAL_VALUES.gameOfLifeBoard);
	startStop(false);
	board.printBaseBoard(constants._GLOBAL_VALUES.gameOfLifeBoard.board);
};

function startStop(run) {
	constants._GLOBAL_VALUES.run = run;

	document.getElementById('playId').disabled = run;
	document.getElementById('pauseId').disabled = !document.getElementById('playId').disabled;

	if (run) {
		board.applyBoardRules(constants._GLOBAL_VALUES.gameOfLifeBoard);
	} else {
		board.updateBoardFromLastBoardPrinted();
	}
};

function resetBoard() {
	constants._GLOBAL_VALUES.lastBoardPrinted = null;
	startStop(false);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var _GLOBAL_VALUES = exports._GLOBAL_VALUES = {
	delayTime: 200,
	run: true,
	gameOfLifeBoard: null,
	lastBoardPrinted: null
};

var _NEIGHBORS = exports._NEIGHBORS = { NORTH_WEST: "NORTH_WEST", NORTH: "NORTH", NORTH_EAST: "NORTH_EAST", EAST: "EAST",
	SOUTH_EAST: "SOUTH_EAST", SOUTH: "SOUTH", SOUTH_WEST: "SOUTH_WEST", WEST: "WEST" };

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.showGrid = showGrid;
exports.getCanvas = getCanvas;
exports.getCanvasContext = getCanvasContext;
function showGrid() {

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
};

function getCanvas() {
	return document.getElementById("gameOfLifeCanvas");
};

function getCanvasContext() {
	return getCanvas().getContext("2d");
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.printPixel = printPixel;
exports.clearPixel = clearPixel;
exports.updatePixelByClick = updatePixelByClick;

var _canvas = __webpack_require__(2);

var canvas = _interopRequireWildcard(_canvas);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function printPixel(x, y) {
    cxt = canvas.getCanvasContext();
    cxt.fillRect(x * 16 + 3, y * 16 + 3, 10, 10);
};

function clearPixel(x, y) {
    cxt = canvas.getCanvasContext();
    cxt.clearRect(x * 16 + 3, y * 16 + 3, 10, 10);
};

function updatePixelByClick(x, y, board) {
    board[x][y].isAlive = !board[x][y].isAlive;
    if (board[x][y].isAlive) {
        printPixel(x, y);
    } else {
        clearPixel(x, y);
    }
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.GameBoard = GameBoard;
exports.createGameBoard = createGameBoard;
exports.populateBoard = populateBoard;
exports.showBoardGame = showBoardGame;
exports.applyBoardRules = applyBoardRules;
exports.printBaseBoard = printBaseBoard;
exports.updateBoardFromLastBoardPrinted = updateBoardFromLastBoardPrinted;

var _arrayUtil = __webpack_require__(5);

var arrayUtil = _interopRequireWildcard(_arrayUtil);

var _constants = __webpack_require__(1);

var constants = _interopRequireWildcard(_constants);

var _pixel = __webpack_require__(3);

var pixel = _interopRequireWildcard(_pixel);

var _mouse = __webpack_require__(6);

var mouse = _interopRequireWildcard(_mouse);

var _canvas = __webpack_require__(2);

var canvas = _interopRequireWildcard(_canvas);

var _cell = __webpack_require__(7);

var cell = _interopRequireWildcard(_cell);

var _game = __webpack_require__(0);

var game = _interopRequireWildcard(_game);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function GameBoard(columns, rows) {
	this.columns = columns;
	this.rows = rows;
	this.board = null;
	this.createBoard = function () {
		this.board = populateBoard(arrayUtil.create2DArray(this.columns, this.rows), this.columns, this.rows);
	};
	this.getInfoBoardGame = function () {
		return "Rows: " + this.rows + "; Columns: " + this.columns;
	};
};

function createGameBoard(columns, rows) {
	var gameBoard = new GameBoard(columns, rows);
	gameBoard.createBoard();
	return gameBoard;
};

function populateBoard(board, columns, rows) {
	for (var i = 0; i < columns; i++) {
		for (var j = 0; j < rows; j++) {
			board[i][j] = cell.BuildCell(i, j);
		}
	}
	return board;
};

function showBoardGame(gameBoard) {
	if (null != gameBoard) {
		for (var i = 0; i < gameBoard.columns; i++) {
			for (var j = 0; j < gameBoard.rows; j++) {
				gameBoard.board[i][j].isAlive ? pixel.printPixel(i, j) : pixel.clearPixel(i, j);
			}
		}
	}
};

function applyBoardRules(gameBoard) {
	if (constants._GLOBAL_VALUES.run) {

		var lastBoardPrinted = populateBoard(arrayUtil.create2DArray(gameBoard.columns, gameBoard.rows), gameBoard.columns, gameBoard.rows);
		var nextTimeBoard = populateBoard(arrayUtil.create2DArray(gameBoard.columns, gameBoard.rows), gameBoard.columns, gameBoard.rows);

		for (var i = 0; i < gameBoard.columns; i++) {
			for (var j = 0; j < gameBoard.rows; j++) {
				var currentCell = gameBoard.board[i][j];
				nextTimeBoard[i][j].isAlive = rule.applyCellRules(gameBoard, currentCell);
				lastBoardPrinted[i][j].isAlive = nextTimeBoard[i][j].isAlive;
			}
		}

		constants._GLOBAL_VALUES.lastBoardPrinted = lastBoardPrinted;
		gameBoard.board = nextTimeBoard;
		showBoardGame(gameBoard);
		setTimeout(function () {
			applyBoardRules(gameBoard);
		}, constants._GLOBAL_VALUES.delayTime);
	}
};

function printBaseBoard(board) {
	canvas.showGrid();
	mouse.createMouseDownListener();
};

function updateBoardFromLastBoardPrinted() {
	if (null == constants._GLOBAL_VALUES.lastBoardPrinted) {
		var gameBoard = constants._GLOBAL_VALUES.gameOfLifeBoard;
		var rows = constants._GLOBAL_VALUES.gameOfLifeBoard.rows;
		var columns = constants._GLOBAL_VALUES.gameOfLifeBoard.columns;
		constants._GLOBAL_VALUES.lastBoardPrinted = populateBoard(arrayUtil.create2DArray(columns, rows), columns, rows);
	}
	constants._GLOBAL_VALUES.gameOfLifeBoard.board = constants._GLOBAL_VALUES.lastBoardPrinted;
	showBoardGame(constants._GLOBAL_VALUES.gameOfLifeBoard);
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.create2DArray = create2DArray;
function create2DArray(columns, rows) {
	var x = new Array(columns);
	for (var i = 0; i < columns; i++) {
		x[i] = new Array(rows);
	}
	return x;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createMouseDownListener = createMouseDownListener;
exports.getMousePos = getMousePos;

var _pixel = __webpack_require__(3);

var pixel = _interopRequireWildcard(_pixel);

var _constants = __webpack_require__(1);

var constants = _interopRequireWildcard(_constants);

var _game = __webpack_require__(0);

var game = _interopRequireWildcard(_game);

var _canvas = __webpack_require__(2);

var canvas = _interopRequireWildcard(_canvas);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function createMouseDownListener() {
	canvas.getCanvas().addEventListener('mousedown', function (evt) {
		var mousePos = getMousePos(canvas.getCanvas(), evt);
		var x = parseInt(mousePos.x / 16);
		var y = parseInt(mousePos.y / 16);
		pixel.updatePixelByClick(x, y, constants._GLOBAL_VALUES.lastBoardPrinted);
		game.startStop(false);
	}, false);
};

function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.BuildCell = BuildCell;
exports.getCellByPossition = getCellByPossition;
function BuildCell(x, y) {
	return new function () {

		this.isAlive = false;
		this.x = x;
		this.y = y;
		this.getInfoCell = function () {
			return "x: " + this.x + " - y: " + this.y + " - isAlive: " + this.isAlive;
		};
	}();
};

function getCellByPossition(gameBoard, x_poss, y_poss) {
	return gameBoard.board[x_poss][y_poss];
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=game-of-life.js.map