(function (global) {
	var mapArray;

	if (!global.UAM) {
		global.UAM = {};
	}

	mapArray = function (array, callback, ctx) {
        var tab = [];
        array.forEach(function(arrayElem, index, arr) {
            tab.push(callback.call(ctx, arrayElem, index, arr));
        });
        return tab;
	};

	global.UAM.mapArray = mapArray;

}(window));

/*

Przykład użycia:

var arr = [1, 2, 3, 4, 5, 6];

var newArray = mapArray(arr, function (arrElement, index, array) {
	return arrElement + 2;
});

newArray; // [3, 4, 5, 6, 7, 8]

var values = {
	multiplyBy: 10;
};

var newArray2 = mapArray(arr, function (arrElement, index, array) {
	return arrElement * this.mutiplyBy;
}, values);

newArray2; [10, 20, 30, 40, 50, 60]
*/
