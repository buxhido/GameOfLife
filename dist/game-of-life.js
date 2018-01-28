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
	delayTime: 200,
	run: true,
	gameOfLifeBoard: null,
	lastBoardPrinted: null
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = function () {
	function Canvas() {
		_classCallCheck(this, Canvas);
	}

	_createClass(Canvas, null, [{
		key: "showGrid",
		value: function showGrid() {
			var context = Canvas.getCanvasContext();
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
		}
	}, {
		key: "getCanvas",
		value: function getCanvas() {
			return document.getElementById("gameOfLifeCanvas");
		}
	}, {
		key: "getCanvasContext",
		value: function getCanvasContext() {
			return Canvas.getCanvas().getContext("2d");
		}
	}]);

	return Canvas;
}();

exports.Canvas = Canvas;

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
	function Game() {
		_classCallCheck(this, Game);
	}

	_createClass(Game, null, [{
		key: 'launchGameOfLife',
		value: function launchGameOfLife() {
			_constants.Constants._GLOBAL_VALUES.gameOfLifeBoard = _board.Board.createGameBoard(15, 15);
			_board.Board.showBoardGame(_constants.Constants._GLOBAL_VALUES.gameOfLifeBoard);
			Game.startStop(false);
			_board.Board.printBaseBoard(_constants.Constants._GLOBAL_VALUES.gameOfLifeBoard.board);
		}
	}, {
		key: 'startStop',
		value: function startStop(run) {
			_constants.Constants._GLOBAL_VALUES.run = run;
			document.getElementById('playId').disabled = run;
			document.getElementById('pauseId').disabled = !document.getElementById('playId').disabled;

			if (run) {
				_board.Board.applyBoardRules(_constants.Constants._GLOBAL_VALUES.gameOfLifeBoard);
			} else {
				_board.Board.updateBoardFromLastBoardPrinted();
			}
		}
	}, {
		key: 'resetBoard',
		value: function resetBoard() {
			_constants.Constants._GLOBAL_VALUES.lastBoardPrinted = null;
			Game.startStop(false);
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cell = function () {
	function Cell() {
		_classCallCheck(this, Cell);
	}

	_createClass(Cell, null, [{
		key: "BuildCell",
		value: function BuildCell(x, y) {
			return {
				isAlive: false,
				x: x,
				y: y,
				getInfoCell: function getInfoCell() {
					return "x: " + this.x + " - y: " + this.y + " - isAlive: " + this.isAlive;
				}
			};
		}
	}, {
		key: "getCellByPossition",
		value: function getCellByPossition(gameBoard, x_poss, y_poss) {
			return gameBoard.board[x_poss][y_poss];
		}
	}]);

	return Cell;
}();

exports.Cell = Cell;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pixel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _canvas = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pixel = function () {
    function Pixel() {
        _classCallCheck(this, Pixel);
    }

    _createClass(Pixel, null, [{
        key: 'printPixel',
        value: function printPixel(x, y) {
            var cxt = _canvas.Canvas.getCanvasContext();
            cxt.fillRect(x * 16 + 3, y * 16 + 3, 10, 10);
        }
    }, {
        key: 'clearPixel',
        value: function clearPixel(x, y) {
            var cxt = _canvas.Canvas.getCanvasContext();
            cxt.clearRect(x * 16 + 3, y * 16 + 3, 10, 10);
        }
    }, {
        key: 'updatePixelByClick',
        value: function updatePixelByClick(x, y, board) {
            board[x][y].isAlive = !board[x][y].isAlive;
            if (board[x][y].isAlive) {
                Pixel.printPixel(x, y);
            } else {
                Pixel.clearPixel(x, y);
            }
        }
    }]);

    return Pixel;
}();

exports.Pixel = Pixel;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Board = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cell = __webpack_require__(3);

var _rule = __webpack_require__(6);

var _pixel = __webpack_require__(4);

var _mouse = __webpack_require__(7);

var _canvas = __webpack_require__(1);

var _arrayUtil = __webpack_require__(8);

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = function () {
	function Board() {
		_classCallCheck(this, Board);
	}

	_createClass(Board, null, [{
		key: 'GameBoard',
		value: function GameBoard(x, y) {
			return {
				columns: x,
				rows: y,
				board: null,
				createBoard: function createBoard() {
					this.board = Board.populateBoard(_arrayUtil.ArrayUtil.create2DArray(this.columns, this.rows), this.columns, this.rows);
				},
				getInfoBoardGame: function getInfoBoardGame() {
					return "Rows: " + this.rows + "; Columns: " + this.columns;
				}
			};
		}
	}, {
		key: 'createGameBoard',
		value: function createGameBoard(columns, rows) {
			var gameBoard = Board.GameBoard(columns, rows);
			gameBoard.createBoard();
			return gameBoard;
		}
	}, {
		key: 'populateBoard',
		value: function populateBoard(board, columns, rows) {
			for (var i = 0; i < columns; i++) {
				for (var j = 0; j < rows; j++) {
					board[i][j] = _cell.Cell.BuildCell(i, j);
				}
			}
			return board;
		}
	}, {
		key: 'showBoardGame',
		value: function showBoardGame(gameBoard) {
			if (null != gameBoard) {
				for (var i = 0; i < gameBoard.columns; i++) {
					for (var j = 0; j < gameBoard.rows; j++) {
						gameBoard.board[i][j].isAlive ? _pixel.Pixel.printPixel(i, j) : _pixel.Pixel.clearPixel(i, j);
					}
				}
			}
		}
	}, {
		key: 'applyBoardRules',
		value: function applyBoardRules(gameBoard) {
			if (_constants.Constants._GLOBAL_VALUES.run) {
				var lastBoardPrinted = Board.populateBoard(_arrayUtil.ArrayUtil.create2DArray(gameBoard.columns, gameBoard.rows), gameBoard.columns, gameBoard.rows);
				var nextTimeBoard = Board.populateBoard(_arrayUtil.ArrayUtil.create2DArray(gameBoard.columns, gameBoard.rows), gameBoard.columns, gameBoard.rows);

				for (var i = 0; i < gameBoard.columns; i++) {
					for (var j = 0; j < gameBoard.rows; j++) {
						var currentCell = gameBoard.board[i][j];
						nextTimeBoard[i][j].isAlive = _rule.Rule.applyCellRules(gameBoard, currentCell);
						lastBoardPrinted[i][j].isAlive = nextTimeBoard[i][j].isAlive;
					}
				}

				_constants.Constants._GLOBAL_VALUES.lastBoardPrinted = lastBoardPrinted;
				gameBoard.board = nextTimeBoard;
				Board.showBoardGame(gameBoard);
				setTimeout(function () {
					Board.applyBoardRules(gameBoard);
				}, _constants.Constants._GLOBAL_VALUES.delayTime);
			}
		}
	}, {
		key: 'printBaseBoard',
		value: function printBaseBoard(board) {
			_canvas.Canvas.showGrid();
			_mouse.Mouse.createMouseDownListener();
		}
	}, {
		key: 'updateBoardFromLastBoardPrinted',
		value: function updateBoardFromLastBoardPrinted() {
			if (null == _constants.Constants._GLOBAL_VALUES.lastBoardPrinted) {
				var gameBoard = _constants.Constants._GLOBAL_VALUES.gameOfLifeBoard;
				var rows = _constants.Constants._GLOBAL_VALUES.gameOfLifeBoard.rows;
				var columns = _constants.Constants._GLOBAL_VALUES.gameOfLifeBoard.columns;
				_constants.Constants._GLOBAL_VALUES.lastBoardPrinted = Board.populateBoard(_arrayUtil.ArrayUtil.create2DArray(columns, rows), columns, rows);
			}
			_constants.Constants._GLOBAL_VALUES.gameOfLifeBoard.board = _constants.Constants._GLOBAL_VALUES.lastBoardPrinted;
			Board.showBoardGame(_constants.Constants._GLOBAL_VALUES.gameOfLifeBoard);
		}
	}]);

	return Board;
}();

exports.Board = Board;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Rule = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

var _cell = __webpack_require__(3);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Rule = function () {
	function Rule() {
		_classCallCheck(this, Rule);
	}

	_createClass(Rule, null, [{
		key: 'applyCellRules',
		value: function applyCellRules(gameBoard, point) {
			var isAlive = false;
			var neighborsAlive = 0;

			for (var neighbor in _constants.Constants._NEIGHBORS) {
				if (Rule.isNeighborAlive(gameBoard, point, _constants.Constants._NEIGHBORS[neighbor])) {
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
	}, {
		key: 'isNeighborAlive',
		value: function isNeighborAlive(gameBoard, point, neighborType) {
			var isAlive = false;
			switch (neighborType) {
				case _constants.Constants._NEIGHBORS.NORTH_WEST:
					if (point.x > 0 && point.y > 0) {
						isAlive = _cell.Cell.getCellByPossition(gameBoard, point.x - 1, point.y - 1).isAlive;
					}
					break;
				case _constants.Constants._NEIGHBORS.NORTH:
					if (point.y > 0) {
						isAlive = _cell.Cell.getCellByPossition(gameBoard, point.x, point.y - 1).isAlive;
					}
					break;
				case _constants.Constants._NEIGHBORS.NORTH_EAST:
					if (point.x < gameBoard.columns - 1 && point.y > 0) {
						isAlive = _cell.Cell.getCellByPossition(gameBoard, point.x + 1, point.y - 1).isAlive;
					}
					break;
				case _constants.Constants._NEIGHBORS.EAST:
					if (point.x < gameBoard.columns - 1) {
						isAlive = _cell.Cell.getCellByPossition(gameBoard, point.x + 1, point.y).isAlive;
					}
					break;
				case _constants.Constants._NEIGHBORS.SOUTH_EAST:
					if (point.x < gameBoard.columns - 1 && point.y < gameBoard.rows - 1) {
						isAlive = _cell.Cell.getCellByPossition(gameBoard, point.x + 1, point.y + 1).isAlive;
					}
					break;
				case _constants.Constants._NEIGHBORS.SOUTH:
					if (point.y < gameBoard.rows - 1) {
						isAlive = _cell.Cell.getCellByPossition(gameBoard, point.x, point.y + 1).isAlive;
					}
					break;
				case _constants.Constants._NEIGHBORS.SOUTH_WEST:
					if (point.x > 0 && point.y < gameBoard.rows - 1) {
						isAlive = _cell.Cell.getCellByPossition(gameBoard, point.x - 1, point.y + 1).isAlive;
					}
					break;
				case _constants.Constants._NEIGHBORS.WEST:
					if (point.x > 0) {
						isAlive = _cell.Cell.getCellByPossition(gameBoard, point.x - 1, point.y).isAlive;
					}
					break;
				default:
					isAlive = false;
			}
			return isAlive;
		}
	}]);

	return Rule;
}();

exports.Rule = Rule;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Mouse = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _game = __webpack_require__(2);

var _pixel = __webpack_require__(4);

var _canvas = __webpack_require__(1);

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Mouse = function () {
	function Mouse() {
		_classCallCheck(this, Mouse);
	}

	_createClass(Mouse, null, [{
		key: 'createMouseDownListener',
		value: function createMouseDownListener() {
			_canvas.Canvas.getCanvas().addEventListener('mousedown', function (evt) {
				var mousePos = Mouse.getMousePos(_canvas.Canvas.getCanvas(), evt);
				var x = parseInt(mousePos.x / 16);
				var y = parseInt(mousePos.y / 16);
				_pixel.Pixel.updatePixelByClick(x, y, _constants.Constants._GLOBAL_VALUES.lastBoardPrinted);
				_game.Game.startStop(false);
			}, false);
		}
	}, {
		key: 'getMousePos',
		value: function getMousePos(canvas, evt) {
			var rect = canvas.getBoundingClientRect();
			return {
				x: evt.clientX - rect.left,
				y: evt.clientY - rect.top
			};
		}
	}]);

	return Mouse;
}();

exports.Mouse = Mouse;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ArrayUtil = function () {
	function ArrayUtil() {
		_classCallCheck(this, ArrayUtil);
	}

	_createClass(ArrayUtil, null, [{
		key: "create2DArray",
		value: function create2DArray(columns, rows) {
			var x = new Array(columns);
			for (var i = 0; i < columns; i++) {
				x[i] = new Array(rows);
			}
			return x;
		}
	}]);

	return ArrayUtil;
}();

;

exports.ArrayUtil = ArrayUtil;

/***/ })
/******/ ]);
});
//# sourceMappingURL=game-of-life.js.map