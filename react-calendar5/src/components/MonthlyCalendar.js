import React, { useEffect, useState } from 'react';
import { getFullMonthName, menuActivate } from '../resources/js/ui';

import CalendarHead from './CalendarHead';
import MonthlyCalendarMain from '../containers/MonthlyCalendarMain';

const MonthlyCalendar = ({ view, viewToday, viewPrevMonth, viewNextMonth }) => {

	const [ title, setTitle ] = useState('');
	const [ subtitle, setSubtitle ] = useState('');

	useEffect(() => {
		menuActivate(0);
	}, []);

	useEffect(() => {
		setTitle(getFullMonthName(view.month) + ' ' + view.year);
	}, [view])

	return (
		<div className="monthly-calendar">
			<div className="inner-frame">

				<CalendarHead title={title} clickToday={viewToday} clickPrev={viewPrevMonth} clickNext={viewNextMonth} />

				<MonthlyCalendarMain />

			</div>
		</div>
	);
}

export default MonthlyCalendar;