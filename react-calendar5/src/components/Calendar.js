import React from 'react';

import CalendarHead from './CalendarHead';
import CalendarMain from './CalendarMain';
import CalendarSelect from './CalendarSelect';

const Calendar = () => {
	return (
		<div className="calendar">
			<div className="inner-frame">
				<CalendarHead />
				<CalendarMain />
				<CalendarSelect />
			</div>
		</div>
	);
}

export default Calendar;