import { connect } from 'react-redux';

import MonthlyCalendarMain from '../components/MonthlyCalendarMain';

const mapReduxStateToReactProps = (state) => {
	return {
		view: state.view,
		categories: state.categories,
		events: state.events
	}
}
const mapReduxDispatchToReactProps = (dispatch) => {
	return {
		changeSelected: (year, month, date, event) => {
			dispatch({
				type: 'CHANGE_SELECTED',
				data: {
					year,
					month,
					date,
					event
				}
			})
		}
	}
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(MonthlyCalendarMain);