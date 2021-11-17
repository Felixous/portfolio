import { connect } from 'react-redux';

import Header from '../components/Header';

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

export default connect(null, mapReduxDispatchToReactProps)(Header);