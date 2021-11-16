import { createStore } from 'redux';

const initialState = {
	view: {
		year: new Date().getFullYear(),
		month: new Date().getMonth() + 1,
		date: new Date().getDate(),
		day: new Date().getDay()
	},
	selected: {
		year: 0,
		month: 0,
		date: 0,
		event: null
	},
	categories: [
		{
			name: 'home',
			color: 'blue'
		}, {
			name: 'friends',
			color: 'green'
		}, {
			name: 'works',
			color: 'red'
		}, {
			name: 'etc',
			color: 'yellow'
		}
	],
	events: [
		{
			id: 1,
			year: 2021,
			month: 12,
			date: 25,
			text: '크리스마스',
			category: 'etc',
			repeat: 'yearly'
		},
		{
			id: 2,
			year: 2022,
			month: 1,
			date: 1,
			text: '신정',
			category: 'etc',
			repeat: 'yearly'
		},
		{
			id: 3,
			year: 2022,
			month: 1,
			date: 31,
			text: '설날 연휴',
			category: 'etc',
			repeat: 'none'
		},
		{
			id: 4,
			year: 2022,
			month: 2,
			date: 1,
			text: '설날',
			category: 'etc',
			repeat: 'none'
		},
		{
			id: 5,
			year: 2022,
			month: 2,
			date: 2,
			text: '설날 연휴',
			category: 'etc',
			repeat: 'none'
		},
		{
			id: 6,
			year: 2022,
			month: 3,
			date: 1,
			text: '삼일절',
			category: 'etc',
			repeat: 'yearly'
		},
		{
			id: 7,
			year: 2022,
			month: 5,
			date: 5,
			text: '어린이날',
			category: 'etc',
			repeat: 'yearly'
		},
		{
			id: 8,
			year: 2022,
			month: 5,
			date: 8,
			text: '석가탄신일',
			category: 'etc',
			repeat: 'none'
		},
		{
			id: 9,
			year: 2021,
			month: 10,
			date: 3,
			text: '개천절',
			category: 'etc',
			repeat: 'yearly'
		},
		{
			id: 10,
			year: 2021,
			month: 10,
			date: 9,
			text: '한글날',
			category: 'etc',
			repeat: 'yearly'
		},
		{
			id: 11,
			year: 2021,
			month: 9,
			date: 20,
			text: '추석 연휴',
			category: 'etc',
			repeat: 'none'
		},
		{
			id: 12,
			year: 2021,
			month: 9,
			date: 21,
			text: '추석',
			category: 'etc',
			repeat: 'none'
		},
		{
			id: 13,
			year: 2021,
			month: 9,
			date: 22,
			text: '추석 연휴',
			category: 'etc',
			repeat: 'none'
		},
		{
			id: 14,
			year: 2021,
			month: 8,
			date: 15,
			text: '광복절',
			category: 'etc',
			repeat: 'yearly'
		},
		{
			id: 15,
			year: 2021,
			month: 6,
			date: 6,
			text: '현충일',
			category: 'etc',
			repeat: 'yearly'
		},
		{
			id: 16,
			year: 2021,
			month: 5,
			date: 19,
			text: '석가탄신일',
			category: 'etc',
			repeat: 'none'
		},
		{
			id: 17,
			year: 2021,
			month: 2,
			date: 11,
			text: '설날 연휴',
			category: 'etc',
			repeat: 'none'
		},
		{
			id: 18,
			year: 2021,
			month: 2,
			date: 12,
			text: '설날',
			category: 'etc',
			repeat: 'none'
		},
		{
			id: 19,
			year: 2021,
			month: 2,
			date: 13,
			text: '설날 연휴',
			category: 'etc',
			repeat: 'none'
		},
		{
			id: 100,
			year: 2021,
			month: 11,
			date: 7,
			text: '벨규형 생일',
			category: 'friends',
			repeat: 'yearly'
		},
		{
			id: 101,
			year: 2021,
			month: 11,
			date: 13,
			text: '관리비',
			category: 'home',
			repeat: 'monthly'
		},
		{
			id: 102,
			year: 2021,
			month: 11,
			date: 23,
			text: '아빠 생일',
			category: 'home',
			repeat: 'yearly'
		},
		{
			id: 103,
			year: 2021,
			month: 11,
			date: 25,
			text: '진호 생일',
			category: 'friends',
			repeat: 'yearly'
		},
		{
			id: 104,
			year: 2021,
			month: 11,
			date: 16,
			text: '스터디',
			category: 'works',
			repeat: 'none'
		},
		{
			id: 105,
			year: 2021,
			month: 10,
			date: 12,
			text: '부모님 결혼기념일',
			category: 'home',
			repeat: 'yearly'
		},
		{
			id: 106,
			year: 2021,
			month: 9,
			date: 26,
			text: '주완이 생일',
			category: 'home',
			repeat: 'yearly'
		},
		{
			id: 107,
			year: 2021,
			month: 12,
			date: 17,
			text: '서이 생일',
			category: 'home',
			repeat: 'yearly'
		},
	],
}

export default createStore((state = initialState, action) => {
	switch (action.type) {
		case 'VIEW_PREV_MONTH':
			if (state.view.month === 1) {
				return {
					...state,
					view: {
						...state.view,
						year: state.view.year - 1,
						month: 12
					}
				}
			} else {
				return {
					...state,
					view: {
						...state.view,
						month: state.view.month - 1
					}
				}
			}
		case 'VIEW_NEXT_MONTH':
			if (state.view.month === 12) {
				return {
					...state,
					view: {
						...state.view,
						year: state.view.year + 1,
						month: 1
					}
				}
			} else {
				return {
					...state,
					view: {
						...state.view,
						month: state.view.month + 1
					}
				}
			}
		case 'VIEW_PREV_WEEK': {
			let { year, month, date, day } = state.view;
			let obj = new Date(year + '-' + month + '-' + date);
			obj.setDate(date - day - 7);
			return {
				...state,
				view: {
					year: obj.getFullYear(),
					month: obj.getMonth() + 1,
					date: obj.getDate(),
					day: obj.getDay()
				}
			}
		}
		case 'VIEW_NEXT_WEEK': {
			let { year, month, date, day } = state.view;
			let obj = new Date(year + '-' + month + '-' + date);
			obj.setDate(date - day + 7);
			return {
				...state,
				view: {
					year: obj.getFullYear(),
					month: obj.getMonth() + 1,
					date: obj.getDate(),
					day: obj.getDay()
				}
			}
		}
		case 'ADD_EVENT':
			return {
				...state,
				events: [
					...state.events,
					{
						...action.data,
						id: Math.max.apply(Math, state.events.map(function(o) { return o.id; })) + 1,
					}
				]
			}
		case 'UPDATE_EVENT': {
			let eventObj = state.events.find((o) => o.id === action.data.id);
			let eventIndex = state.events.indexOf(eventObj);
			// console.log('기존 이벤트 객체는 >>', eventObj, eventIndex);
			// console.log('새로운 이벤트 객체는 >>', action.data);
			return {
				...state,
				events: [
					...state.events.slice(0, eventIndex),
					action.data,
					...state.events.slice(eventIndex + 1, state.events.length)
				]
			}
		}
		case 'DELETE_EVENT': {
			let eventObj = state.events.find((o) => o.id === action.data.id);
			let eventIndex = state.events.indexOf(eventObj);
			return {
				...state,
				events: [
					...state.events.slice(0, eventIndex),
					...state.events.slice(eventIndex + 1, state.events.length)
				]
			}
		}
		case 'CHANGE_SELECTED':
			return {
				...state,
				selected: {
					year: action.data.year,
					month: action.data.month,
					date: action.data.date,
					event: action.data.event
				}
			}
		
		default:
			return state;
	}
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())