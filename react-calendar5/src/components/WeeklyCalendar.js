import React, { useEffect, useState } from 'react';
import { getFullMonthName, getShortMonthName, menuActivate, createDate } from '../resources/js/utils';

import CalendarHead from './CalendarHead';
import WeeklyCalendarMain from '../containers/WeeklyCalendarMain';

const WeeklyCalendar = ({ view, viewToday, viewPrevWeek, viewNextWeek }) => {

	const [ title, setTitle ] = useState('');

	useEffect(() => {
		menuActivate(1);
		viewToday();
	}, []);

	useEffect(() => {
		let { year, month, date, day } = view;
		let sun = new Date(createDate(year, month, date).setDate(date - day));
		let sat = new Date(createDate(year, month, date).setDate(date + 6 - day));
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