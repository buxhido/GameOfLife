import {Canvas} from './canvas.js';

class Pixel{

    static printPixel(x,y) {
        let cxt = Canvas.getCanvasContext();
        cxt.fillRect((x*16)+3, (y*16)+3, 10, 10);
    };
    
    static clearPixel(x,y) {
        let cxt = Canvas.getCanvasContext();
        cxt.clearRect((x*16)+3, (y*16)+3, 10, 10);
    };
    
    static updatePixelByClick(x,y,board) {
        board[x][y].isAlive = !board[x][y].isAlive;
        if(board[x][y].isAlive){
            Pixel.printPixel(x,y);
        } else {
            Pixel.clearPixel(x,y)
        }
    };
}

export {Pixel};