import { connect } from "react-redux";

import WeeklyCalendar from "../components/WeeklyCalendar";

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
		viewPrevWeek: () => {
			dispatch({ type: 'VIEW_PREV_WEEK' });
		},
		viewNextWeek: () => {
			dispatch({ type: 'VIEW_NEXT_WEEK' });
		}
	}
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(WeeklyCalendar);