import { createStore } from 'redux';

const initialState = {
	year: new Date().getFullYear(),
	month: new Date().getMonth() + 1,
	date: new Date().getDate(),
	selectedYear: new Date().getFullYear(),
	selectedMonth: new Date().getMonth() + 1,
	selectedDate: new Date().getDate(),
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
			month: 11,
			date: 13,
			text: '관리비',
			category: 'home',
			repeat: 'monthly'
		},
		{
			id: 2,
			year: 2021,
			month: 12,
			date: 25,
			text: '크리스마스',
			category: 'etc',
			repeat: 'yearly'
		},
		{
			id: 3,
			year: 2021,
			month: 11,
			date: 7,
			text: '벨규형 생일',
			category: 'friends'
		},
		{
			id: 4,
			year: 2021,
			month: 11,
			date: 23,
			text: '아빠 생일',
			category: 'home'
		},
		{
			id: 5,
			year: 2021,
			month: 12,
			date: 1,
			text: '아무이벤트',
			category: 'etc'
		},
	],
	view: {
		year: 2021,
		month: 11,
		date: 12
	},
	selected: {
		year: 0,
		month: 0,
		date: 0,
		event: null
	}
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
		case 'UPDATE_EVENT':
			return {
				...state
			}
		case 'SELECT_DATE':
			return {
				...state,
				selectedYear: action.data.selectedYear,
				selectedMonth: action.data.selectedMonth,
				selectedDate: action.data.selectedDate,
			}
		case 'CHANGE_SELECTED_YEAR':
			return {
				...state,
				selectedYear: action.data
			}
		case 'CHANGE_SELECTED_MONTH':
			return {
				...state,
				selectedMonth: action.data
			}
		case 'CHANGE_SELECTED_DATE':
			return {
				...state,
				selectedDate: action.data
			}
		case 'CHANGE_SELECTED':
			// console.log('액션의 이벤트는');
			// console.log(action.data.event);
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