import {GetDelta,GetCanvasContext} from './canvas.js';
import {Constants} from './constants.js';

export function PrintPixel(x,y) {
    let cxt = GetCanvasContext();
    cxt.fillRect(
        (x* GetDelta())+Constants._SETTINGS.margin, 
        (y* GetDelta())+Constants._SETTINGS.margin, 
        Constants._SETTINGS.cellSizePixel - Constants._SETTINGS.margin, 
        Constants._SETTINGS.cellSizePixel - Constants._SETTINGS.margin);
}

export function ClearPixel(x,y) {
    let cxt = GetCanvasContext();
    cxt.clearRect(
        (x* GetDelta())+Constants._SETTINGS.margin, 
        (y* GetDelta())+Constants._SETTINGS.margin, 
        Constants._SETTINGS.cellSizePixel - Constants._SETTINGS.margin , 
        Constants._SETTINGS.cellSizePixel - Constants._SETTINGS.margin);
}

export function UpdatePixelByClick(x,y,board) {
    board[x][y].isAlive = !board[x][y].isAlive;
    if(board[x][y].isAlive){
        PrintPixel(x,y);
    } else {
        ClearPixel(x,y)
    }
}