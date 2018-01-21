
var printPixel = function(x,y) {
	
    cxt = getCanvasContext();
    cxt.fillRect((x*16)+3, (y*16)+3, 10, 10);
}

var clearPixel = function(x,y) {
	
    cxt = getCanvasContext();
    cxt.clearRect((x*16)+3, (y*16)+3, 10, 10);
}

var updatePixelByClick = function(x,y,board) {

    board[x][y].isAlive = !board[x][y].isAlive;

	if(board[x][y].isAlive){
		printPixel(x,y);
	} else {
		clearPixel(x,y)
	}
}

