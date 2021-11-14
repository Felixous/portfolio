import { connect } from 'react-redux';

import Header from '../components/Header';

const mapReduxStateToReactProps = (state) => {
	return {

	}
}

const mapReduxDispatchToReactProps = (dispatch) => {
	return {
		onClickAddEvent: (selectedYear, selectedMonth, selectedDate) => {
			dispatch({
				type: 'SELECT_DATE',
				data: {
					selectedYear: selectedYear,
					selectedMonth: selectedMonth,
					selectedDate: selectedDate
				}
			})
		}
	}
}

export default connect(null, mapReduxDispatchToReactProps)(Header);