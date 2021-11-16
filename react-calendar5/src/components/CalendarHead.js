import React, { useState } from 'react';
import store from '../store';
import { getFullMonthName } from '../resources/js/ui';

const CalendarHead = ({ view, clickPrev, clickNext }) => {
	return (
		<div className="calendar-head">
			<h2>
				<span className="month">{getFullMonthName(view.month)}</span>
				<span className="year">{view.year}</span>
				<span className="start">14</span>
				<span className="dash">-</span>
				<span className="end">20</span>
			</h2>
			<div className="btns-box">
				<button type="button" className="btn btn-prev" onClick={clickPrev}>Prev</button>
				<button type="button" className="btn btn-next" onClick={clickNext}>Next</button>
			</div>
		</div>
	);
};

export default CalendarHead;