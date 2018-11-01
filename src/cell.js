export function BuildCell(x,y) {
	return {
		isAlive : false,
		x : x,
		y : y
	}
}

export function GetCellByPossition(gameBoard,x_poss,y_poss) {
	return gameBoard.board[x_poss][y_poss];
}