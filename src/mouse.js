import * as pixel from './pixel';
import * as constants from './constants';
import * as game from './game';
import * as canvas from './canvas';

export function createMouseDownListener() {
	
	canvas.getCanvas().addEventListener('mousedown', function(evt) {
        
        var mousePos = getMousePos(canvas.getCanvas(), evt);
        var x = parseInt((mousePos.x)/16);
        var y = parseInt((mousePos.y)/16);

				pixel.updatePixelByClick(x,y, constants._GLOBAL_VALUES.lastBoardPrinted);
        game.startStop(false);

      }, false);
};

export function getMousePos(canvas, evt) {
	
	var rect = canvas.getBoundingClientRect();
	return {
	  x: evt.clientX - rect.left,
	  y: evt.clientY - rect.top
	};
};