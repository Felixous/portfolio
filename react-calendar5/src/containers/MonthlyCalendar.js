import { connect } from "react-redux";

import MonthlyCalendar from "../components/MonthlyCalendar";

const mapReduxStateToReactProps = (state) => {
	return {
		view: state.view
	}
}
const mapReduxDispatchToReactProps = (dispatch) => {
	return {
		viewToday: () => {
			dispatch({ type: 'VIEW_TODAY' });
		},
		viewPrevMonth: () => {
			dispatch({ type: 'VIEW_PREV_MONTH' });
		},
		viewNextMonth: () => {
			dispatch({ type: 'VIEW_NEXT_MONTH' });
		}
	}
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(MonthlyCalendar);