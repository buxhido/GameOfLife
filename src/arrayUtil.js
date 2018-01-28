
class ArrayUtil{
	static create2DArray(columns,rows) {
		var x = new Array(columns);
		for (var i = 0; i < columns; i++) {
		   x[i] = new Array(rows);
		}
	   return x;
	};
};

export {ArrayUtil};