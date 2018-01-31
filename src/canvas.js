import {Constants} from './constants.js';

class Canvas {

	static showGrid() {

		Canvas.updateCanvasDimensions();

		var context = Canvas.getCanvasContext();
		for (var x = 0.0; x <= Canvas.getWidth(); x += Canvas.getDelta()) {
			context.moveTo(x, 0);
			context.lineTo(x, Canvas.getWidth());
		}
	
		for (var y = 0.0; y <= Canvas.getWidth(); y += Canvas.getDelta()) {
			context.moveTo(0, y);
			context.lineTo(Canvas.getWidth(), y);
		}
	
		context.strokeStyle = "#000";
		context.stroke();
	};

	static updateCanvasDimensions() {
		document.getElementById(Constants._SETTINGS.canvas_id).width = Canvas.getWidth()+1;
		document.getElementById(Constants._SETTINGS.canvas_id).height = Canvas.getWidth()+1;
	}
	
	static getCanvas() {
		return document.getElementById(Constants._SETTINGS.canvas_id);
	};
	
	static getCanvasContext() {
		return  Canvas.getCanvas().getContext("2d");
	};

	static getWidth() {
		return (Canvas.getDelta() * Constants._SETTINGS.numberOfCells);
	}

	static getDelta() {
		return Constants._SETTINGS.cellSizePixel + Constants._SETTINGS.margin  ;
	}
 
}

export {Canvas};