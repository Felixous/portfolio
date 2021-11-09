import React, { useState } from 'react';
import store from '../store';
import { getFullMonthName } from '../resources/js/ui';

const CalendarHead = ({ year, month, onClickPrevMonth, onClickNextMonth }) => {
	return (
		<div className="calendar-head">
			<h2>
				<span className="month">{getFullMonthName(month)}</span>
				<span className="year">{year}</span>
			</h2>
			<div className="change-month">
				<button type="button" className="btn btn-prev-month" onClick={onClickPrevMonth}>Prev</button>
				<button type="button" className="btn btn-next-month" onClick={onClickNextMonth}>Next</button>
			</div>
		</div>
	);
};

export default CalendarHead;