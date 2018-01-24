export function createMouseDownListener() {
	
	getCanvas().addEventListener('mousedown', function(evt) {
        
        var mousePos = getMousePos(getCanvas(), evt);
        var x = parseInt((mousePos.x)/16);
        var y = parseInt((mousePos.y)/16);

		updatePixelByClick(x,y, _GLOBAL_VALUES.lastBoardPrinted);
        startStop(false);

      }, false);
};

export function getMousePos(canvas, evt) {
	
	var rect = canvas.getBoundingClientRect();
	return {
	  x: evt.clientX - rect.left,
	  y: evt.clientY - rect.top
	};
};