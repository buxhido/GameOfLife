import {Constants} from './constants.js';

export function ShowGrid() {

	UpdateCanvasDimensions();

	let context = GetCanvasContext();
	for (var x = 0.0; x <= GetWidth(); x += GetDelta()) {
		context.moveTo(x, 0);
		context.lineTo(x, GetWidth());
	}

	for (var y = 0.0; y <= GetWidth(); y += GetDelta()) {
		context.moveTo(0, y);
		context.lineTo(GetWidth(), y);
	}

	context.strokeStyle = "#000";
	context.stroke();
}

export function UpdateCanvasDimensions() {
	document.getElementById(Constants._SETTINGS.canvas_id).width = GetWidth()+1;
	document.getElementById(Constants._SETTINGS.canvas_id).height = GetWidth()+1;
}

export function GetCanvas() {
	return document.getElementById(Constants._SETTINGS.canvas_id);
}

export function GetCanvasContext() {
	return  GetCanvas().getContext("2d");
}

export function GetWidth() {
	return (GetDelta() * Constants._SETTINGS.numberOfCells);
}

export function GetDelta() {
	return Constants._SETTINGS.cellSizePixel + Constants._SETTINGS.margin  ;
}

