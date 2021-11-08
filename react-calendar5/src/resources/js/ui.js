console.log('===== ui.js');

// document.addEventListener("DOMContentLoaded", function(){
// 	console.log('=== 다큐먼트 레디!');
// });

// window.addEventListener('load', function() {
// 	console.log('=== 윈도우 로드!');
// })

export function makeMonthMatrix(y, m, d) { // 2021, 11, 20 

	var firstObj = new Date(y, m - 1, 1);
	var firstDate = firstObj.getDate();
	var firstDay = firstObj.getDay();

	var lastObj = new Date(y, m, 0);
	var lastDate = lastObj.getDate();
	var lastDay = lastObj.getDay();

	var arr = [];
	var matrix = [];

	for (var i=firstDay; i>0; i--) {
		var temp = new Date(firstObj.getTime());
		temp.setDate(firstDate - i);
		arr.push(temp);
	}

	for (var i=0; i<lastDate; i++) {
		var temp = new Date(firstObj.getTime());
		temp.setDate(firstDate + i);
		arr.push(temp);
	}

	for (var i=1; i<=6-lastDay; i++) {
		var temp = new Date(lastObj.getTime());
		temp.setDate(lastDate + i);
		arr.push(temp);
	}

	for (var i=0; i<arr.length / 7; i++) {
		matrix.push(arr.slice(i*7, i*7+7));
	}

	return matrix;

}