import React, { useState } from 'react';
import store from '../store';
import { getFullMonthName } from '../resources/js/ui';

const CalendarHead = ({ view, viewPrevMonth, viewNextMonth }) => {
	return (
		<div className="calendar-head">
			<h2>
				<span className="month">{getFullMonthName(view.month)}</span>
				<span className="year">{view.year}</span>
			</h2>
			<div className="change-month">
				<button type="button" className="btn btn-prev-month" onClick={viewPrevMonth}>Prev</button>
				<button type="button" className="btn btn-next-month" onClick={viewNextMonth}>Next</button>
			</div>
		</div>
	);
};

export default CalendarHead;