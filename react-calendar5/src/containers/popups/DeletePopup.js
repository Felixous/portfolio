import { connect } from 'react-redux';

import DeletePopup from '../../components/popups/DeletePopup';

const mapReduxStateToReactProps = (state) => {
	return {
		event: state.selected.event
	}
}

const mapReduxDispatchToReactProps = (dispatch) => {
	return {
		deleteEvent: (event) => {
			dispatch({
				type: 'DELETE_EVENT',
				data: event
			})
		}
	}
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(DeletePopup);