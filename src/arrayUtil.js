export function Create2DArray(columns,rows) {
	let x = new Array(columns);
	for (var i = 0; i < columns; i++) {
	   x[i] = new Array(rows);
	}
   return x;
}