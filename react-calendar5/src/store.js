import { createStore } from 'redux';
import { createDate } from './resources/js/utils';

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
		{
			id: 108,
			year: 2021,
			month: 11,
			date: 24,
			text: '친구랑 약속',
			category: 'friends',
			repeat: 'none'
		},
		{
			id: 109,
			year: 2021,
			month: 11,
			date: 13,
			text: '영화 관람',
			category: 'etc',
			repeat: 'none'
		},
		{
			id: 110,
			year: 2021,
			month: 10,
			date: 26,
			text: '여행 가기',
			category: 'home',
			repeat: 'none'
		},
		{
			id: 111,
			year: 2021,
			month: 11,
			date: 26,
			text: '병원 가기',
			category: 'etc',
			repeat: 'none'
		},
		{
			id: 112,
			year: 2021,
			month: 10,
			date: 17,
			text: '선물 사기',
			category: 'home',
			repeat: 'none'
		},
		{
			id: 113,
			year: 2021,
			month: 11,
			date: 26,
			text: '김장 도와주기',
			category: 'home',
			repeat: 'none'
		},
		{
			id: 114,
			year: 2021,
			month: 12,
			date: 2,
			text: '동료들 만나기',
			category: 'works',
			repeat: 'none'
		},
		{
			id: 115,
			year: 2021,
			month: 12,
			date: 9,
			text: '친구 생일',
			category: 'friends',
			repeat: 'none'
		},
		{
			id: 116,
			year: 2021,
			month: 11,
			date: 15,
			text: '반찬 만들기',
			category: 'home',
			repeat: 'none'
		},
		{
			id: 117,
			year: 2021,
			month: 12,
			date: 15,
			text: '스파이더맨 개봉',
			category: 'etc',
			repeat: 'none'
		},
		{
			id: 118,
			year: 2021,
			month: 12,
			date: 9,
			text: '친구들이랑 저녁 먹기',
			category: 'friends',
			repeat: 'none'
		},
		{
			id: 119,
			year: 2021,
			month: 12,
			date: 22,
			text: '팥죽 먹기',
			category: 'home',
			repeat: 'none'
		},
		{
			id: 120,
			year: 2021,
			month: 12,
			date: 24,
			text: '노량진에서 회 먹기',
			category: 'home',
			repeat: 'none'
		},
		{
			id: 121,
			year: 2021,
			month: 12,
			date: 7,
			text: '스터디 모임',
			category: 'works',
			repeat: 'none'
		},
		{
			id: 122,
			year: 2021,
			month: 12,
			date: 20,
			text: '치과 예약',
			category: 'etc',
			repeat: 'none'
		},
		{
			id: 123,
			year: 2021,
			month: 12,
			date: 28,
			text: '친구들과 송년회',
			category: 'friends',
			repeat: 'none'
		},
		{
			id: 124,
			year: 2021,
			month: 12,
			date: 12,
			text: '부모님 만나기',
			category: 'home',
			repeat: 'none'
		},
		{
			id: 125,
			year: 2021,
			month: 12,
			date: 11,
			text: '공원 산책',
			category: 'etc',
			repeat: 'none'
		},
		{
			id: 126,
			year: 2021,
			month: 12,
			date: 3,
			text: '장보기',
			category: 'home',
			repeat: 'none'
		},
	],
}

export default createStore((state = initialState, action) => {
	switch (action.type) {
		case 'CHANGE_VIEW': {
			return {
				...state,
				view: {
					year: action.data.year,
					month: action.data.month,
					date: action.data.date,
					day: action.data.day,
					event: action.data.event
				}
			}
		}
		case 'VIEW_TODAY': {
			let today = new Date();
			return {
				...state,
				view: {
					year: today.getFullYear(),
					month: today.getMonth() + 1,
					date: today.getDate(),
					day: today.getDay()
				}
			}
		}
		case 'VIEW_PREV_MONTH': {
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
		}
		case 'VIEW_NEXT_MONTH': {
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
		}
		case 'VIEW_PREV_WEEK': {
			let { year, month, date, day } = state.view;
			let obj = createDate(year, month, date);
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
			let obj = createDate(year, month, date);
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
		case 'ADD_EVENT': {
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
		}
		case 'UPDATE_EVENT': {
			let eventObj = state.events.find((o) => o.id === action.data.id);
			let eventIndex = state.events.indexOf(eventObj);
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
		case 'CHANGE_SELECTED': {
			return {
				...state,
				selected: {
					year: action.data.year,
					month: action.data.month,
					date: action.data.date,
					event: action.data.event
				}
			}
		}
		default: {
			return state;
		}
	}
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())