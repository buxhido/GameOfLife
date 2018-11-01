import {Constants} from './constants.js';
import {GetCellByPossition} from './cell.js'

export function ApplyCellRules(gameBoard,point) {
	let isAlive = false;
	let neighborsAlive = 0;

	for (var neighbor in Constants._NEIGHBORS) {
		if(IsNeighborAlive(gameBoard,point, Constants._NEIGHBORS[neighbor])) {
			neighborsAlive++;
		}
	}

	if( point.isAlive && (neighborsAlive == 2 || neighborsAlive == 3)  ) {
		isAlive = true;
	} else if( !point.isAlive && neighborsAlive == 3 ) {
		isAlive = true;
	}
	return isAlive;
}

export function IsNeighborAlive(gameBoard,point,neighborType) {
	let isAlive = false;
	switch (neighborType) {
		case Constants._NEIGHBORS.NORTH_WEST:
			if(point.x > 0 && point.y > 0) {
				isAlive = GetCellByPossition(gameBoard, point.x -1 , point.y - 1 ).isAlive;
			}
			break;
		case Constants._NEIGHBORS.NORTH:
			if(point.y > 0 ) {
				isAlive = GetCellByPossition(gameBoard, point.x , point.y - 1 ).isAlive;
			}
			break;
		case Constants._NEIGHBORS.NORTH_EAST:
			if(point.x < gameBoard.columns - 1 && point.y > 0 ) {
				isAlive = GetCellByPossition(gameBoard, point.x + 1 , point.y - 1 ).isAlive;
			}
			break;
		case Constants._NEIGHBORS.EAST:
			if(point.x < gameBoard.columns - 1 ) {
				isAlive = GetCellByPossition(gameBoard, point.x + 1 , point.y ).isAlive;
			}
			break;
		case Constants._NEIGHBORS.SOUTH_EAST:
			if(point.x < gameBoard.columns - 1 && point.y < gameBoard.rows - 1 ) {
				isAlive = GetCellByPossition(gameBoard, point.x + 1 , point.y + 1 ).isAlive;
			}
			break;
		case Constants._NEIGHBORS.SOUTH:
			if(point.y < gameBoard.rows - 1 ) {
				isAlive = GetCellByPossition(gameBoard, point.x , point.y + 1 ).isAlive;
			}
			break;
		case Constants._NEIGHBORS.SOUTH_WEST:
			if(point.x > 0 && point.y < gameBoard.rows - 1 ) {
				isAlive = GetCellByPossition(gameBoard, point.x - 1 , point.y + 1 ).isAlive;
			}
			break;
		case Constants._NEIGHBORS.WEST:
			if(point.x > 0 ) {
				isAlive = GetCellByPossition(gameBoard, point.x - 1 , point.y ).isAlive;
			}
			break;
		default:
			isAlive = false;
	}
	return isAlive;
}