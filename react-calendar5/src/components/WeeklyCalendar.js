import React, { useEffect, useState } from 'react';
import { getFullMonthName, getShortMonthName, menuActivate } from '../resources/js/ui';

import CalendarHead from './CalendarHead';
import WeeklyCalendarMain from '../containers/WeeklyCalendarMain';

const WeeklyCalendar = ({ view, viewToday, viewPrevWeek, viewNextWeek }) => {

	const [ title, setTitle ] = useState('');
	const [ subtitle ] = useState('');

	useEffect(() => {
		menuActivate(1);
	}, []);

	useEffect(() => {
		let { year, month, date, day } = view;
		let sun = new Date(new Date(year + '-' + month + '-' + date).setDate(date - day));
		let sat = new Date(new Date(year + '-' + month + '-' + date).setDate(date + 6 - day));
		let sunMonth = sun.getMonth() + 1;
		let satMonth = sat.getMonth() + 1;
		let value = '';

		if (sunMonth === satMonth) {
			value += getFullMonthName(month) + ' ' + sun.getDate() + ' - ' + sat.getDate();
		} else {
			value += getShortMonthName(sunMonth) + ' ' + sun.getDate();
			value += ' - ';
			value += getShortMonthName(satMonth) + ' ' + sat.getDate();
		}

		setTitle(value);
	}, [view])

	return (

		<div className="weekly-calendar">
			<div className="inner-frame">

				<CalendarHead title={title} clickToday={viewToday} clickPrev={viewPrevWeek} clickNext={viewNextWeek} />

				<WeeklyCalendarMain />

			</div>
		</div>

	);
}

export default WeeklyCalendar;