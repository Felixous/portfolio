import React from 'react';

const CalendarHead = ({ title, clickToday, clickPrev, clickNext }) => {
	return (
		<div className="calendar-head">
			<h2>{title}</h2>
			<div className="btns-box">
				<button type="button" className="btn btn-prev" onClick={clickPrev}>Prev</button>
				<button type="button" className="btn btn-today" onClick={clickToday}>Today</button>
				<button type="button" className="btn btn-next" onClick={clickNext}>Next</button>
			</div>
		</div>
	);
};

export default CalendarHead;