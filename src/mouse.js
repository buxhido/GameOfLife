import {Game} from './game.js';
import {Pixel} from './pixel.js';
import {Canvas} from './canvas.js';
import {Constants} from './constants.js';

class Mouse {

	static createMouseDownListener() {
		Canvas.getCanvas().addEventListener('mousedown', function(evt) {
					var mousePos = Mouse.getMousePos(Canvas.getCanvas(), evt);
					var x = parseInt((mousePos.x)/Canvas.getDelta());
					var y = parseInt((mousePos.y)/Canvas.getDelta());
					Pixel.updatePixelByClick(x,y, Constants._GLOBAL_VALUES.lastBoardPrinted);
					Game.startStop(false);
	
				}, false);
	};
	
	static getMousePos(canvas, evt) {
		var rect = canvas.getBoundingClientRect();
		return {
			x: evt.clientX - rect.left,
			y: evt.clientY - rect.top
		};
	};
}

export {Mouse};