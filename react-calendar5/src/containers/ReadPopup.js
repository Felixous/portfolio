import { connect } from "react-redux";

import ReadPopup from "../components/ReadPopup";

const mapReduxStateToReactProps = (state) => {
	return {
		view: state.view,
		categories: state.categories,
		event: state.selected.event
	}
}

const mapReduxDispatchToReactProps = (dispatch) => {
	return {

	}
}

export default connect(mapReduxStateToReactProps)(ReadPopup);