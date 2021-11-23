export const resetPopup = () => {
	if (document.querySelector('.write-popup').classList.contains('is-active')) {
		showWritePopup();
	} else {
		hideWritePopup();
	}
	if (document.querySelector('.read-popup').classList.contains('is-active')) {
		showReadPopup();
	} else {
		hideReadPopup();
	}
	if (document.querySelector('.delete-popup').classList.contains('is-active')) {
		showDeletePopup();
	} else {
		hideDeletePopup();
	}
}

export const checkDevice = () => {
	let w = document.querySelector('body').clientWidth;
	let el = document.querySelector('html');

	if (w <= 480) {
		if (el.classList.contains('is-mobile')) return;
		el.classList.remove('is-pc');
		el.classList.remove('is-tablet');
		el.classList.add('is-mobile');
		resetPopup();
	} else if (w > 480 && w <= 768) {
		if (el.classList.contains('is-tablet')) return;
		el.classList.remove('is-mobile');
		el.classList.remove('is-pc');
		el.classList.add('is-tablet');
		resetPopup();
	} else if (w > 768) {
		if (el.classList.contains('is-pc')) return;
		el.classList.remove('is-mobile');
		el.classList.remove('is-tablet');
		el.classList.add('is-pc');
		resetPopup();
	}
}

export const createDate = (year, month, date) => {
	let dateStr = (date < 10) ? '0' + date : date;
	let monthStr = (month < 10) ? '0' + month : month;

	return new Date(year + '-' + monthStr + '-' + dateStr);
}

export const getMonthlyMatrix = (year, month, date, events) => { // 2021, 11, 20 

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

	return result;

}

export const getWeeklyMatrix = (year, month, date, events) => {

	let todayObj = new Date();
	let todayYear = todayObj.getFullYear();
	let todayMonth = todayObj.getMonth() + 1;
	let todayDate = todayObj.getDate();

	let dateObj = createDate(year, month, date)
	let day = dateObj.getDay();

	let result = [];

	for (let i=-(day); i<7-day; i++) {
		let tempObj = new Date(dateObj);
		tempObj.setDate(date + i);
		let obj = {
			year: tempObj.getFullYear(),
			month: tempObj.getMonth() + 1,
			date: tempObj.getDate(),
			day: tempObj.getDay(),
			classNameList: [],
			events: [],
		}
		events.forEach((o, i) => {
			if ((obj.year === o.year && obj.month === o.month && obj.date === o.date)
				|| (o.repeat === 'yearly' && obj.month === o.month && obj.date === o.date)
				|| (o.repeat === 'monthly' && obj.date === o.date)) {
				obj.events.push({...o});
			}
		})

		// 주말이면
		if (i === -(day) || i === 6-day) {
			obj.classNameList.push('weekend')
		}
		// 일요일이면
		if (i === -(day)) {
			obj.classNameList.push('holiday')
		}
		// 오늘이면
		if (todayYear === obj.year && todayMonth === obj.month && todayDate === obj.date) {
			obj.classNameList.push('today');
		}
		result.push(obj);
	}

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
		default:
			return '';
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
		default:
			return '';
	}
}

export const getMonthFromShortName = (str) => {
	switch (str) {
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
		default:
			return '';
	}
}

export const getShortDayName = (number) => { // 0 ~ 6
	switch (number) {
		case 0:
			return 'Sun';
		case 1:
			return 'Mon';
		case 2:
			return 'Tue';
		case 3:
			return 'Wed';
		case 4:
			return 'Thu';
		case 5:
			return 'Fri';
		case 6:
			return 'Sat';
		default:
			return '';
	}
}

export const getFullDayName = (number) => { // 0 ~ 6
	switch (number) {
		case 0:
			return 'Sunday';
		case 1:
			return 'Monday';
		case 2:
			return 'Tuesday';
		case 3:
			return 'Wednesday';
		case 4:
			return 'Thursday';
		case 5:
			return 'Friday';
		case 6:
			return 'Saturday';
		default:
			return '';
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


export const textCapitalize = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
}


export const showWritePopup = () => {
	showPopup('.write-popup');
}
export const hideWritePopup = () => {
	hidePopup('.write-popup');
}

export const showReadPopup = () => {
	showPopup('.read-popup');
}
export const hideReadPopup = () => {
	hidePopup('.read-popup');
}

export const showDeletePopup = () => {
	showPopup('.delete-popup');
}
export const hideDeletePopup = () => {
	hidePopup('.delete-popup');
}

export const showPopup = (selector) => {
	let isMobile = document.querySelector('html').classList.contains('is-mobile');
	let el = document.querySelector(selector);
	let popupLayout = el.querySelector('.popup-layout');
	let delay = 50;

	if (!isMobile) {
		popupLayout.style = '';
		el.classList.add('is-active');
		setTimeout(() => {
			el.classList.add('is-animate');
		}, delay);
	} else {
		el.classList.add('is-active');
		if (el.classList.contains('write-popup')) {
			popupLayout.style.height = (window.innerHeight - 160) + 'px';
		}
		setTimeout(() => {
			el.classList.add('is-animate');
			popupLayout.style.marginTop = -popupLayout.offsetHeight + 'px'; 
		}, delay);
	}
}

export const hidePopup = (selector) => {
	let isMobile = document.querySelector('html').classList.contains('is-mobile');
	let el = document.querySelector(selector);
	let popupLayout = el.querySelector('.popup-layout');
	let delay = 300;

	if (!isMobile) {
		popupLayout.style = '';
		el.classList.remove('is-animate');
		setTimeout(() => {
			el.classList.remove('is-active');
		}, delay);
	} else {
		popupLayout.style = '';
		el.classList.remove('is-animate');
		setTimeout(() => {
			el.classList.remove('is-active');
		}, delay);
	}

}

export const menuActivate = (index = 0) => { // 0 ~ 1
	var ul = document.querySelector('header ul.menu-list');
	var lis = Array.from(ul.childNodes);
	lis.forEach((o, i) => {
		if (i === index) {
			o.classList.add('is-active');
		} else {
			o.classList.remove('is-active');
		}
	})
}


