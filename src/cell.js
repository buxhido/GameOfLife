
class Cell{

	static BuildCell(x,y) {
		return {
			isAlive : false,
			x : x,
			y : y
		}
	};
	
	static getCellByPossition(gameBoard,x_poss,y_poss) {
		return gameBoard.board[x_poss][y_poss];
	};
}

export {Cell};