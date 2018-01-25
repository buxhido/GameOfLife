import * as canvas from './canvas';

export function printPixel(x,y) {
    cxt = canvas.getCanvasContext();
    cxt.fillRect((x*16)+3, (y*16)+3, 10, 10);
};

export function clearPixel(x,y) {
    cxt = canvas.getCanvasContext();
    cxt.clearRect((x*16)+3, (y*16)+3, 10, 10);
};

export function updatePixelByClick(x,y,board) {
    board[x][y].isAlive = !board[x][y].isAlive;
	if(board[x][y].isAlive){
		printPixel(x,y);
	} else {
		clearPixel(x,y)
	}
};