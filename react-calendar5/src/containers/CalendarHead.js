// import React, { useState } from 'react';
// import store from '../store';
import { connect } from 'react-redux';

import CalendarHead from '../components/CalendarHead';

const mapReduxStateToReactProps = (state) => {
	return {
		view: state.view
	}
}
const mapReduxDispatchToReactProps = (dispatch) => {
	return {
		viewPrevMonth: () => {
			dispatch({ type: 'VIEW_PREV_MONTH' });
		},
		viewNextMonth: () => {
			dispatch({ type: 'VIEW_NEXT_MONTH' });
		}
	}
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(CalendarHead);

/*
export default () => {
	const [ year , setYear] = useState(store.getState().year);
	const [ month , setMonth] = useState(store.getState().month);

	store.subscribe(() => {
		setYear(store.getState().year);
		setMonth(store.getState().month);
	})

	const onClickPrevMonth = () => {
		store.dispatch({ type: 'PREV_MONTH' });
	}
	const onClickNextMonth = () => {
		store.dispatch({ type: 'NEXT_MONTH' });
	}
	return (
		<CalendarHead 
			year={year}
			month={month}
			onClickPrevMonth={onClickPrevMonth} 
			onClickNextMonth={onClickNextMonth}
		/>
	);
}
*/