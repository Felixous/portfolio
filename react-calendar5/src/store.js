import { createStore } from 'redux';

const initialState = {
	year: new Date().getFullYear(),
	month: new Date().getMonth() + 1,
	date: new Date().getDate(),
	categories: [
		{
			name: 'Home',
			color: 'blue'
		}, {
			name: 'Friends',
			color: 'green'
		}, {
			name: 'Works',
			color: 'red'
		}, {
			name: 'Etc',
			color: 'yellow'
		}
	],
	events: [
		{
			id: 1,
			year: 2021,
			month: 11,
			date: 13,
			text: '관리비'
		},
		{
			id: 2,
			year: 2021,
			month: 12,
			date: 25,
			text: '크리스마스'
		},
		{
			id: 3,
			year: 2021,
			month: 11,
			date: 7,
			text: '벨규형 생일'
		},
		{
			id: 4,
			year: 2021,
			month: 11,
			date: 23,
			text: '아빠 생일'
		},
		{
			id: 5,
			year: 2021,
			month: 12,
			date: 1,
			text: '아무이벤트'
		},
	]
}

export const nextMonthAction = () => {
	return {
		type: 'NEXT_MONTH',
	}
}

export const prevMonthAction = () => {
	return {
		type: 'PREV_MONTH',
	}
}

export default createStore((state = initialState, action) => {
	switch (action.type) {
		case 'NEXT_MONTH': 
			if (state.month === 12) {
				return {
					...state,
					year: state.year + 1,
					month: 1
				}
			} else {
				return {
					...state,
					month: state.month + 1
				}
			}
		case 'PREV_MONTH':
			if (state.month === 1) {
				return {
					...state,
					year: state.year - 1,
					month: 12
				}
			} else {
				return {
					...state,
					month: state.month - 1
				}
			}
		case 'ADD_EVENT':
			return {
				...state,
				events: [
					...state.events,
					action.data
				]
			}
		default:
			return state;
	}
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())