import React, { useEffect, useState } from 'react';
import { getFullMonthName, menuActivate } from '../resources/js/utils';

import CalendarHead from './CalendarHead';
import MonthlyCalendarMain from '../containers/MonthlyCalendarMain';

const MonthlyCalendar = ({ view, viewToday, viewPrevMonth, viewNextMonth }) => {

	const [ title, setTitle ] = useState('');

	useEffect(() => {
		menuActivate(0);
		viewToday();
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