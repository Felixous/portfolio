import { connect } from "react-redux";

import AddEvent from "../components/AddEvent";

const mapReduxStateToReactProps = (state) => {

}

const mapReduxDispatchToReactProps = (dispatch) => {
	return {
		onSubmitAddEvent: (text, year, month, date) => {
			dispatch({
				type: 'ADD_EVENT',
				data: {
					year: year,
					month: month,
					date: date,
					text: text,
				}
			})
		}
	}
}

export default connect(null, mapReduxDispatchToReactProps)(AddEvent);