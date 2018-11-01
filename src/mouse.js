import {Game} from './game.js';
import {UpdatePixelByClick} from './pixel.js';
import {GetCanvas, GetDelta} from './canvas.js';
import {Constants} from './constants.js';

export function CreateMouseDownListener() {
	GetCanvas().addEventListener('mousedown', function(evt) {
				let mousePos = GetMousePos(GetCanvas(), evt);
				let x = parseInt((mousePos.x)/GetDelta());
				let y = parseInt((mousePos.y)/GetDelta());
				UpdatePixelByClick(x,y, Constants._GLOBAL_VALUES.lastBoardPrinted);
				Game.startStop(false);

			}, false);
}

export function GetMousePos(canvas, evt) {
	let rect = canvas.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}