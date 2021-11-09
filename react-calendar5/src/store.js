import { createStore } from 'redux';

const initialState = {
	year: 2021,
	month: 11,
	date: 9
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
		default:
			return state;
	}
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())