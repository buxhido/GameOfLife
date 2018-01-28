import {Constants} from './constants.js';
import {Cell} from './cell.js';

class Rule {

	static applyCellRules(gameBoard,point) {
		var isAlive = false;
		var neighborsAlive = 0;
	
		for (var neighbor in Constants._NEIGHBORS) {
			if(Rule.isNeighborAlive(gameBoard,point, Constants._NEIGHBORS[neighbor])) {
				neighborsAlive++;
			}
		}
	
		if( point.isAlive && (neighborsAlive == 2 || neighborsAlive == 3)  ) {
			isAlive = true;
		} else if( !point.isAlive && neighborsAlive == 3 ) {
			isAlive = true;
		}
		return isAlive;
	};
	
	static isNeighborAlive(gameBoard,point,neighborType) {
		var isAlive = false;
		switch (neighborType) {
			case Constants._NEIGHBORS.NORTH_WEST:
				if(point.x > 0 && point.y > 0) {
					isAlive = Cell.getCellByPossition(gameBoard, point.x -1 , point.y - 1 ).isAlive;
				}
				break;
			case Constants._NEIGHBORS.NORTH:
				if(point.y > 0 ) {
					isAlive = Cell.getCellByPossition(gameBoard, point.x , point.y - 1 ).isAlive;
				}
				break;
			case Constants._NEIGHBORS.NORTH_EAST:
				if(point.x < gameBoard.columns - 1 && point.y > 0 ) {
					isAlive = Cell.getCellByPossition(gameBoard, point.x + 1 , point.y - 1 ).isAlive;
				}
				break;
			case Constants._NEIGHBORS.EAST:
				if(point.x < gameBoard.columns - 1 ) {
					isAlive = Cell.getCellByPossition(gameBoard, point.x + 1 , point.y ).isAlive;
				}
				break;
			case Constants._NEIGHBORS.SOUTH_EAST:
				if(point.x < gameBoard.columns - 1 && point.y < gameBoard.rows - 1 ) {
					isAlive = Cell.getCellByPossition(gameBoard, point.x + 1 , point.y + 1 ).isAlive;
				}
				break;
			case Constants._NEIGHBORS.SOUTH:
				if(point.y < gameBoard.rows - 1 ) {
					isAlive = Cell.getCellByPossition(gameBoard, point.x , point.y + 1 ).isAlive;
				}
				break;
			case Constants._NEIGHBORS.SOUTH_WEST:
				if(point.x > 0 && point.y < gameBoard.rows - 1 ) {
					isAlive = Cell.getCellByPossition(gameBoard, point.x - 1 , point.y + 1 ).isAlive;
				}
				break;
			case Constants._NEIGHBORS.WEST:
				if(point.x > 0 ) {
					isAlive = Cell.getCellByPossition(gameBoard, point.x - 1 , point.y ).isAlive;
				}
				break;
			default:
				isAlive = false;
		}
		return isAlive;
	};
}

export {Rule};