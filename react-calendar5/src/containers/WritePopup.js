import { connect } from "react-redux";
import WritePopup from "../components/WritePopup";

const mapReduxStateToReactProps = (state) => {
	return {
		categories: state.categories,
		events: state.events
	}
}

const mapReduxDispatchToReactProps = (dispatch) => {
	return {
		addEvent: (newEvent) => {
			dispatch({
				type: 'ADD_EVENT',
				data: newEvent
			})
		}
	}
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(WritePopup);