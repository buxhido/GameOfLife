export function BuildCell(x,y) {
	return new function(){

		this.isAlive=false;
		this.x = x;
		this.y = y;
		this.getInfoCell = function() {return "x: "+this.x+" - y: "+this.y+ " - isAlive: "+this.isAlive};
	}
};

export function getCellByPossition(gameBoard,x_poss,y_poss) {
	
	return gameBoard.board[x_poss][y_poss];
};