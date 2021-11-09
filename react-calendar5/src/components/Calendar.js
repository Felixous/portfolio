import React from 'react';

import CalendarHead from '../containers/CalendarHead';
import CalendarMain from '../containers/CalendarMain';

const Calendar = () => {
	return (
		<div className="calendar">
			<div className="inner-frame">
				<CalendarHead />
				<CalendarMain />
			</div>
		</div>
	);
}

export default Calendar;