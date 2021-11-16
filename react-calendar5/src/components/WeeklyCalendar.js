import React, { useEffect } from 'react';

import { getFullMonthName, menuActivate } from '../resources/js/ui';

import CalendarHead from './CalendarHead';
import WeeklyCalendarMain from '../containers/WeeklyCalendarMain';

const WeeklyCalendar = ({ view, viewPrevWeek, viewNextWeek }) => {

	useEffect(() => {
		menuActivate(1);
	}, []);

	return (

		<div className="weekly-calendar">
			<div className="inner-frame">

				<CalendarHead view={view} clickPrev={viewPrevWeek} clickNext={viewNextWeek} />

				<WeeklyCalendarMain />

			</div>
		</div>

	);
}

export default WeeklyCalendar;