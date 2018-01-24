export function applyCellRules(gameBoard,cell) {

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
};

export function isNeighborAlive(gameBoard,cell,neighborType) {
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
};