import React, { useEffect } from 'react';

import CalendarHead from './CalendarHead';
import MonthlyCalendarMain from '../containers/MonthlyCalendarMain';
import { menuActivate } from '../resources/js/ui';

const MonthlyCalendar = ({ view, viewPrevMonth, viewNextMonth }) => {

	useEffect(() => {
		menuActivate(0);
	}, []);

	return (
		<div className="monthly-calendar">
			<div className="inner-frame">

				<CalendarHead view={view} clickPrev={viewPrevMonth} clickNext={viewNextMonth} />

				<MonthlyCalendarMain />

			</div>
		</div>
	);
}

export default MonthlyCalendar;