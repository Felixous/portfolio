import { connect } from "react-redux";
import WritePopup from "../components/WritePopup";

const mapReduxStateToReactProps = (state) => {
	return {
		selected: state.selected,
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