import { connect } from "react-redux";

import WritePopup from "../../components/popups/WritePopup";

const mapReduxStateToReactProps = (state) => {
	return {
		selected: state.selected,
		categories: state.categories,
		events: state.events
	}
}

const mapReduxDispatchToReactProps = (dispatch) => {
	return {
		changeView: (year, month, date, day) => {
			dispatch({
				type: 'CHANGE_VIEW',
				data: {
					year,
					month,
					date,
					day
				}
			})
		},
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
		},
		addEvent: (newEvent) => {
			dispatch({
				type: 'ADD_EVENT',
				data: newEvent
			})
		},
		updateEvent: (newEvent) => {
			dispatch({
				type: 'UPDATE_EVENT',
				data: newEvent
			})
		}
	}
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(WritePopup);