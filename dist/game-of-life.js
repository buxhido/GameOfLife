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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Constants = function Constants() {
	_classCallCheck(this, Constants);
};

Constants._GLOBAL_VALUES = {
	run: true,
	gameOfLifeBoard: null,
	lastBoardPrinted: null
};
Constants._SETTINGS = {
	canvas_id: null,
	playButton_id: null,
	pauseButton_id: null,
	numberOfCells: 20,
	cellSizePixel: 15,
	margin: 3,
	delayTime: 200
};
Constants._NEIGHBORS = {
	NORTH_WEST: "NORTH_WEST",
	NORTH: "NORTH",
	NORTH_EAST: "NORTH_EAST",
	EAST: "EAST",
	SOUTH_EAST: "SOUTH_EAST",
	SOUTH: "SOUTH",
	SOUTH_WEST: "SOUTH_WEST",
	WEST: "WEST"
};
exports.Constants = Constants;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ShowGrid = ShowGrid;
exports.UpdateCanvasDimensions = UpdateCanvasDimensions;
exports.GetCanvas = GetCanvas;
exports.GetCanvasContext = GetCanvasContext;
exports.GetWidth = GetWidth;
exports.GetDelta = GetDelta;

var _constants = __webpack_require__(0);

function ShowGrid() {

	UpdateCanvasDimensions();

	var context = GetCanvasContext();
	for (var x = 0.0; x <= GetWidth(); x += GetDelta()) {
		context.moveTo(x, 0);
		context.lineTo(x, GetWidth());
	}

	for (var y = 0.0; y <= GetWidth(); y += GetDelta()) {
		context.moveTo(0, y);
		context.lineTo(GetWidth(), y);
	}

	context.strokeStyle = "#000";
	context.stroke();
}

function UpdateCanvasDimensions() {
	document.getElementById(_constants.Constants._SETTINGS.canvas_id).width = GetWidth() + 1;
	document.getElementById(_constants.Constants._SETTINGS.canvas_id).height = GetWidth() + 1;
}

function GetCanvas() {
	return document.getElementById(_constants.Constants._SETTINGS.canvas_id);
}

function GetCanvasContext() {
	return GetCanvas().getContext("2d");
}

function GetWidth() {
	return GetDelta() * _constants.Constants._SETTINGS.numberOfCells;
}

function GetDelta() {
	return _constants.Constants._SETTINGS.cellSizePixel + _constants.Constants._SETTINGS.margin;
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Game = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

var _board = __webpack_require__(5);

var Board = _interopRequireWildcard(_board);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
	function Game() {
		_classCallCheck(this, Game);
	}

	_createClass(Game, null, [{
		key: 'launchGameOfLife',
		value: function launchGameOfLife(settings) {
			Game.SetSettings(settings);
			_constants.Constants._GLOBAL_VALUES.gameOfLifeBoard = Board.CreateGameBoard();
			Board.ShowBoardGame(_constants.Constants._GLOBAL_VALUES.gameOfLifeBoard);
			Game.startStop(false);
			Board.PrintBaseBoard(_constants.Constants._GLOBAL_VALUES.gameOfLifeBoard.board);
		}
	}, {
		key: 'startStop',
		value: function startStop(run) {
			_constants.Constants._GLOBAL_VALUES.run = run;
			document.getElementById(_constants.Constants._SETTINGS.playButton_id).disabled = run;
			document.getElementById(_constants.Constants._SETTINGS.pauseButton_id).disabled = !document.getElementById(_constants.Constants._SETTINGS.playButton_id).disabled;

			if (run) {
				Board.ApplyBoardRules(_constants.Constants._GLOBAL_VALUES.gameOfLifeBoard);
			} else {
				Board.UpdateBoardFromLastBoardPrinted();
			}
		}
	}, {
		key: 'resetBoard',
		value: function resetBoard() {
			_constants.Constants._GLOBAL_VALUES.lastBoardPrinted = null;
			Game.startStop(false);
		}
	}, {
		key: 'SetSettings',
		value: function SetSettings(settings) {
			Object.keys(settings).forEach(function (key) {
				return _constants.Constants._SETTINGS[key] = settings[key];
			});
		}
	}]);

	return Game;
}();

exports.Game = Game;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.BuildCell = BuildCell;
exports.GetCellByPossition = GetCellByPossition;
function BuildCell(x, y) {
	return {
		isAlive: false,
		x: x,
		y: y
	};
}

function GetCellByPossition(gameBoard, x_poss, y_poss) {
	return gameBoard.board[x_poss][y_poss];
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PrintPixel = PrintPixel;
exports.ClearPixel = ClearPixel;
exports.UpdatePixelByClick = UpdatePixelByClick;

var _canvas = __webpack_require__(1);

var _constants = __webpack_require__(0);

function PrintPixel(x, y) {
    var cxt = (0, _canvas.GetCanvasContext)();
    cxt.fillRect(x * (0, _canvas.GetDelta)() + _constants.Constants._SETTINGS.margin, y * (0, _canvas.GetDelta)() + _constants.Constants._SETTINGS.margin, _constants.Constants._SETTINGS.cellSizePixel - _constants.Constants._SETTINGS.margin, _constants.Constants._SETTINGS.cellSizePixel - _constants.Constants._SETTINGS.margin);
}

function ClearPixel(x, y) {
    var cxt = (0, _canvas.GetCanvasContext)();
    cxt.clearRect(x * (0, _canvas.GetDelta)() + _constants.Constants._SETTINGS.margin, y * (0, _canvas.GetDelta)() + _constants.Constants._SETTINGS.margin, _constants.Constants._SETTINGS.cellSizePixel - _constants.Constants._SETTINGS.margin, _constants.Constants._SETTINGS.cellSizePixel - _constants.Constants._SETTINGS.margin);
}

function UpdatePixelByClick(x, y, board) {
    board[x][y].isAlive = !board[x][y].isAlive;
    if (board[x][y].isAlive) {
        PrintPixel(x, y);
    } else {
        ClearPixel(x, y);
    }
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.GameBoard = GameBoard;
exports.CreateGameBoard = CreateGameBoard;
exports.PopulateBoard = PopulateBoard;
exports.ShowBoardGame = ShowBoardGame;
exports.ApplyBoardRules = ApplyBoardRules;
exports.PrintBaseBoard = PrintBaseBoard;
exports.UpdateBoardFromLastBoardPrinted = UpdateBoardFromLastBoardPrinted;

var _cell = __webpack_require__(3);

var _rule = __webpack_require__(6);

var _pixel = __webpack_require__(4);

var _mouse = __webpack_require__(7);

var _canvas = __webpack_require__(1);

var _arrayUtil = __webpack_require__(8);

var _constants = __webpack_require__(0);

function GameBoard() {
	return {
		columns: _constants.Constants._SETTINGS.numberOfCells,
		rows: _constants.Constants._SETTINGS.numberOfCells,
		board: null,
		createBoard: function createBoard() {
			this.board = PopulateBoard((0, _arrayUtil.Create2DArray)(this.columns, this.rows), this.columns, this.rows);
		}
	};
}

function CreateGameBoard() {
	var gameBoard = GameBoard();
	gameBoard.createBoard();
	return gameBoard;
}

function PopulateBoard(board, columns, rows) {
	for (var i = 0; i < columns; i++) {
		for (var j = 0; j < rows; j++) {
			board[i][j] = (0, _cell.BuildCell)(i, j);
		}
	}
	return board;
}

function ShowBoardGame(gameBoard) {
	if (null != gameBoard) {
		for (var i = 0; i < gameBoard.columns; i++) {
			for (var j = 0; j < gameBoard.rows; j++) {
				gameBoard.board[i][j].isAlive ? (0, _pixel.PrintPixel)(i, j) : (0, _pixel.ClearPixel)(i, j);
			}
		}
	}
}

function ApplyBoardRules(gameBoard) {
	if (_constants.Constants._GLOBAL_VALUES.run) {
		var lastBoardPrinted = PopulateBoard((0, _arrayUtil.Create2DArray)(gameBoard.columns, gameBoard.rows), gameBoard.columns, gameBoard.rows);
		var nextTimeBoard = PopulateBoard((0, _arrayUtil.Create2DArray)(gameBoard.columns, gameBoard.rows), gameBoard.columns, gameBoard.rows);

		for (var i = 0; i < gameBoard.columns; i++) {
			for (var j = 0; j < gameBoard.rows; j++) {
				var currentCell = gameBoard.board[i][j];
				nextTimeBoard[i][j].isAlive = (0, _rule.ApplyCellRules)(gameBoard, currentCell);
				lastBoardPrinted[i][j].isAlive = nextTimeBoard[i][j].isAlive;
			}
		}

		_constants.Constants._GLOBAL_VALUES.lastBoardPrinted = lastBoardPrinted;
		gameBoard.board = nextTimeBoard;
		ShowBoardGame(gameBoard);
		setTimeout(function () {
			ApplyBoardRules(gameBoard);
		}, _constants.Constants._SETTINGS.delayTime);
	}
}

function PrintBaseBoard(board) {
	(0, _canvas.ShowGrid)();
	(0, _mouse.CreateMouseDownListener)();
}

function UpdateBoardFromLastBoardPrinted() {
	if (null == _constants.Constants._GLOBAL_VALUES.lastBoardPrinted) {
		var rows = _constants.Constants._GLOBAL_VALUES.gameOfLifeBoard.rows;
		var columns = _constants.Constants._GLOBAL_VALUES.gameOfLifeBoard.columns;
		_constants.Constants._GLOBAL_VALUES.lastBoardPrinted = PopulateBoard((0, _arrayUtil.Create2DArray)(columns, rows), columns, rows);
	}
	_constants.Constants._GLOBAL_VALUES.gameOfLifeBoard.board = _constants.Constants._GLOBAL_VALUES.lastBoardPrinted;
	ShowBoardGame(_constants.Constants._GLOBAL_VALUES.gameOfLifeBoard);
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ApplyCellRules = ApplyCellRules;
exports.IsNeighborAlive = IsNeighborAlive;

var _constants = __webpack_require__(0);

var _cell = __webpack_require__(3);

function ApplyCellRules(gameBoard, point) {
	var isAlive = false;
	var neighborsAlive = 0;

	for (var neighbor in _constants.Constants._NEIGHBORS) {
		if (IsNeighborAlive(gameBoard, point, _constants.Constants._NEIGHBORS[neighbor])) {
			neighborsAlive++;
		}
	}

	if (point.isAlive && (neighborsAlive == 2 || neighborsAlive == 3)) {
		isAlive = true;
	} else if (!point.isAlive && neighborsAlive == 3) {
		isAlive = true;
	}
	return isAlive;
}

function IsNeighborAlive(gameBoard, point, neighborType) {
	var isAlive = false;
	switch (neighborType) {
		case _constants.Constants._NEIGHBORS.NORTH_WEST:
			if (point.x > 0 && point.y > 0) {
				isAlive = (0, _cell.GetCellByPossition)(gameBoard, point.x - 1, point.y - 1).isAlive;
			}
			break;
		case _constants.Constants._NEIGHBORS.NORTH:
			if (point.y > 0) {
				isAlive = (0, _cell.GetCellByPossition)(gameBoard, point.x, point.y - 1).isAlive;
			}
			break;
		case _constants.Constants._NEIGHBORS.NORTH_EAST:
			if (point.x < gameBoard.columns - 1 && point.y > 0) {
				isAlive = (0, _cell.GetCellByPossition)(gameBoard, point.x + 1, point.y - 1).isAlive;
			}
			break;
		case _constants.Constants._NEIGHBORS.EAST:
			if (point.x < gameBoard.columns - 1) {
				isAlive = (0, _cell.GetCellByPossition)(gameBoard, point.x + 1, point.y).isAlive;
			}
			break;
		case _constants.Constants._NEIGHBORS.SOUTH_EAST:
			if (point.x < gameBoard.columns - 1 && point.y < gameBoard.rows - 1) {
				isAlive = (0, _cell.GetCellByPossition)(gameBoard, point.x + 1, point.y + 1).isAlive;
			}
			break;
		case _constants.Constants._NEIGHBORS.SOUTH:
			if (point.y < gameBoard.rows - 1) {
				isAlive = (0, _cell.GetCellByPossition)(gameBoard, point.x, point.y + 1).isAlive;
			}
			break;
		case _constants.Constants._NEIGHBORS.SOUTH_WEST:
			if (point.x > 0 && point.y < gameBoard.rows - 1) {
				isAlive = (0, _cell.GetCellByPossition)(gameBoard, point.x - 1, point.y + 1).isAlive;
			}
			break;
		case _constants.Constants._NEIGHBORS.WEST:
			if (point.x > 0) {
				isAlive = (0, _cell.GetCellByPossition)(gameBoard, point.x - 1, point.y).isAlive;
			}
			break;
		default:
			isAlive = false;
	}
	return isAlive;
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.CreateMouseDownListener = CreateMouseDownListener;
exports.GetMousePos = GetMousePos;

var _game = __webpack_require__(2);

var _pixel = __webpack_require__(4);

var _canvas = __webpack_require__(1);

var _constants = __webpack_require__(0);

function CreateMouseDownListener() {
	(0, _canvas.GetCanvas)().addEventListener('mousedown', function (evt) {
		var mousePos = GetMousePos((0, _canvas.GetCanvas)(), evt);
		var x = parseInt(mousePos.x / (0, _canvas.GetDelta)());
		var y = parseInt(mousePos.y / (0, _canvas.GetDelta)());
		(0, _pixel.UpdatePixelByClick)(x, y, _constants.Constants._GLOBAL_VALUES.lastBoardPrinted);
		_game.Game.startStop(false);
	}, false);
}

function GetMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Create2DArray = Create2DArray;
function Create2DArray(columns, rows) {
	var x = new Array(columns);
	for (var i = 0; i < columns; i++) {
		x[i] = new Array(rows);
	}
	return x;
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=game-of-life.js.map