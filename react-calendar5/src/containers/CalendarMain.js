import { connect } from 'react-redux';

import CalendarMain from '../components/CalendarMain';

const mapReduxStateToReactProps = (state) => {
	return {
		year: state.year,
		month: state.month,
		date: state.date,
		events: state.events
	}
}
const mapReduxDispatchToReactProps = (dispatch) => {
	return {
		onClickPrevMonth: () => {
			dispatch({ type: 'PREV_MONTH' });
		},
		onClickNextMonth: () => {
			dispatch({ type: 'NEXT_MONTH' });
		}
	}
}

export default connect(mapReduxStateToReactProps, null)(CalendarMain);