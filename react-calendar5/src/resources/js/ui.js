console.log('===== ui.js');

// document.addEventListener("DOMContentLoaded", function(){
// 	console.log('=== 다큐먼트 레디!');
// });

// window.addEventListener('load', function() {
// 	console.log('=== 윈도우 로드!');
// })

export const getDateMatrix = (year, month, date, events) => { // 2021, 11, 20 

	let todayObj = new Date();
	let todayYear = todayObj.getFullYear();
	let todayMonth = todayObj.getMonth() + 1;
	let todayDate = todayObj.getDate();

	let firstObj = new Date(year, month - 1, 1);
	let firstDate = firstObj.getDate();
	let firstDay = firstObj.getDay();

	let lastObj = new Date(year, month, 0);
	let lastDate = lastObj.getDate();
	let lastDay = lastObj.getDay();

	let array = [];
	let result = [];

	// 이전달 요소 생성
	for (let i=firstDay; i>0; i--) {
		let temp = new Date(firstObj.getTime());
		temp.setDate(firstDate - i);
		let obj = {
			year: temp.getFullYear(),
			month: temp.getMonth() + 1,
			date: temp.getDate(),
			classNameList: ['other-month'],
			events: [],
		}
		array.push({...obj});
	}

	// 이번달 요소 생성
	for (let i=0; i<lastDate; i++) {
		let temp = new Date(firstObj.getTime());
		temp.setDate(firstDate + i);
		let obj = {
			year: temp.getFullYear(),
			month: temp.getMonth() + 1,
			date: temp.getDate(),
			classNameList: ['this-month'],
			events: [],
		}
		// if (todayYear === year && todayMonth === month && todayDate === i+1) {
		// 	obj.classNameList.push('today')
		// }
		array.push({...obj});
	}

	// 다음달 요소 생성
	for (let i=1; i<=6-lastDay; i++) {
		let temp = new Date(lastObj.getTime());
		temp.setDate(lastDate + i);
		let obj = {
			year: temp.getFullYear(),
			month: temp.getMonth() + 1,
			date: temp.getDate(),
			classNameList: ['other-month'],
			events: [],
		}
		array.push({...obj});
	}

	// 이번주 클래스 추가
	if (todayYear === year && todayMonth === month) {
		for (let i=0; i<7; i++) {
			array[getTodayWeekNum() * 7 + i].classNameList.push('this-week');
		}
	}

	// 오늘 클래스 추가
	for (let i=0; i<array.length; i++) {
		if (todayYear === array[i].year && todayMonth === array[i].month && todayDate === array[i].date) {
			array[i].classNameList.push('today');
		}
	}

	// 이벤트 추가
	for (let i=0; i<array.length; i++) {
		for (let j=0; j<events.length; j++) {
			if (array[i].year === events[j].year 
				&& array[i].month === events[j].month
				&& array[i].date === events[j].date) {
				array[i].events.push({...events[j]})
			} else if (events[j].repeat === 'yearly'
				&& array[i].month === events[j].month
				&& array[i].date === events[j].date) {
				array[i].events.push({...events[j]})
			} else if (events[j].repeat === 'monthly'
				&& array[i].date === events[j].date) {
				array[i].events.push({...events[j]})
			}
		}
	}

	// 2차원으로 재배열
	for (let i=0; i<array.length / 7; i++) {
		result.push(array.slice(i*7, i*7+7));
	}

	// console.log(result);

	return result;

}

export const getFullMonthName = (number) => { // 1 ~ 12
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

export const getShortMonthName = (number) => { // 1 ~ 12
	switch (number) {
		case 1:
			return 'Jan';
		case 2:
			return 'Feb';
		case 3:
			return 'Mar';
		case 4:
			return 'Apr';
		case 5:
			return 'May';
		case 6:
			return 'Jun';
		case 7:
			return 'Jul';
		case 8:
			return 'Aug';
		case 9:
			return 'Sep';
		case 10:
			return 'Oct';
		case 11:
			return 'Nov';
		case 12:
			return 'Dec';
	}
}

export const getMonthFromShortName = (number) => { // 1 ~ 12
	switch (number) {
		case 'Jan':
			return 1;
		case 'Feb':
			return 2;
		case 'Mar':
			return 3;
		case 'Apr':
			return 4;
		case 'May':
			return 5;
		case 'Jun':
			return 6;
		case 'Jul':
			return 7;
		case 'Aug':
			return 8;
		case 'Sep':
			return 9;
		case 'Oct':
			return 10;
		case 'Nov':
			return 11;
		case 'Dec':
			return 12;
	}
}

export const getTodayWeekNum = () => {
	let today = new Date();
	let firstDay = (new Date(today.getFullYear(), today.getMonth())).getDay();

	return Math.ceil((firstDay + today.getDate()) / 7) - 1;
}

export const getLastDateOfMonth = (year, month) => { // month: 1 ~ 12
	let lastObj = new Date(year, month, 0);
	let lastDate = lastObj.getDate();

	return lastDate;
}




const arr = [
  {name: 'apple', price : 1000}, 
  {name: 'banana', price : 2000},
  {name: 'apple', price: 3000}
];

function isApple(element)  {
  if(element.name === 'apple')  {
    return true;
  }
}

const apple = arr.find(isApple);
// document.writeln(apple.name); // apple
// document.writeln(apple.price); // 1000



export const showWritePopup = () => {
	document.querySelector('.write-popup').classList.add('is-active');
}
export const hideWritePopup = () => {
	document.querySelector('.write-popup').classList.remove('is-active');
}