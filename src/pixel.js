import {Canvas} from './canvas.js';
import {Constants} from './constants.js';

class Pixel{

    static printPixel(x,y) {
        let cxt = Canvas.getCanvasContext();
        cxt.fillRect(
            (x* Canvas.getDelta())+Constants._SETTINGS.margin, 
            (y* Canvas.getDelta())+Constants._SETTINGS.margin, 
            Constants._SETTINGS.cellSizePixel - Constants._SETTINGS.margin, 
            Constants._SETTINGS.cellSizePixel - Constants._SETTINGS.margin);
    };
    
    static clearPixel(x,y) {
        let cxt = Canvas.getCanvasContext();
        cxt.clearRect(
            (x* Canvas.getDelta())+Constants._SETTINGS.margin, 
            (y* Canvas.getDelta())+Constants._SETTINGS.margin, 
            Constants._SETTINGS.cellSizePixel - Constants._SETTINGS.margin , 
            Constants._SETTINGS.cellSizePixel - Constants._SETTINGS.margin);
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