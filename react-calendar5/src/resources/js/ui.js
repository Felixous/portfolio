console.log('===== ui.js');

// document.addEventListener("DOMContentLoaded", function(){
// 	console.log('=== 다큐먼트 레디!');
// });

// window.addEventListener('load', function() {
// 	console.log('=== 윈도우 로드!');
// })

export function getDateMatrix(year, month, date) { // 2021, 11, 20 

	let firstObj = new Date(year, month - 1, 1);
	let firstDate = firstObj.getDate();
	let firstDay = firstObj.getDay();

	let lastObj = new Date(year, month, 0);
	let lastDate = lastObj.getDate();
	let lastDay = lastObj.getDay();

	let array = [];
	let result = [];

	for (let i=firstDay; i>0; i--) {
		let temp = new Date(firstObj.getTime());
		temp.setDate(firstDate - i);
		array.push({
			year: temp.getFullYear(),
			month: temp.getMonth() + 1,
			date: temp.getDate()
		});
	}

	for (var i=0; i<lastDate; i++) {
		var temp = new Date(firstObj.getTime());
		temp.setDate(firstDate + i);
		array.push({
			year: temp.getFullYear(),
			month: temp.getMonth() + 1,
			date: temp.getDate()
		});
	}

	for (var i=1; i<=6-lastDay; i++) {
		var temp = new Date(lastObj.getTime());
		temp.setDate(lastDate + i);
		array.push({
			year: temp.getFullYear(),
			month: temp.getMonth() + 1,
			date: temp.getDate()
		});
	}

	for (var i=0; i<array.length / 7; i++) {
		result.push(array.slice(i*7, i*7+7));
	}

	return result;

}

export function getFullMonthName(number) { // 1 ~ 12
	switch (number) {
		case 1:
			return 'January';
		case 2:
			return 'February';
		case 3:
			return 'March';
		case 4:
			return 'April';
		case 5:
			return 'May';
		case 6:
			return 'June';
		case 7:
			return 'July';
		case 8:
			return 'August';
		case 9:
			return 'September';
		case 10:
			return 'October';
		case 11:
			return 'November';
		case 12:
			return 'December';
	}
}

export function getTodayWeekNum() {
	let today = new Date();
	let firstDay = (new Date(today.getFullYear(), today.getMonth())).getDay();

	return Math.ceil((firstDay + today.getDate()) / 7) - 1;
}