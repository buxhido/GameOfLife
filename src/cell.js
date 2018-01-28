
class Cell{

	static BuildCell(x,y) {
		return {
			isAlive : false,
			x : x,
			y : y,
			getInfoCell : function() {return "x: "+this.x+" - y: "+this.y+ " - isAlive: "+this.isAlive}
		}
	};
	
	static getCellByPossition(gameBoard,x_poss,y_poss) {
		return gameBoard.board[x_poss][y_poss];
	};
}

export {Cell};