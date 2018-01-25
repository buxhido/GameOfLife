
export function showGrid() {

	var context = getCanvasContext();
	for (var x = 0.0; x <= 160; x += 16) {
	  context.moveTo(x, 0);
	  context.lineTo(x, 160);
	}

	for (var y = 0.0; y <= 160; y += 16) {
	  context.moveTo(0, y);
	  context.lineTo(160, y);
	}

	context.strokeStyle = "#000";
	context.stroke();
};

export function getCanvas() {
	return document.getElementById("gameOfLifeCanvas");
};

export function getCanvasContext() {
	return  getCanvas().getContext("2d");
};