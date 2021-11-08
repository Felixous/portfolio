import React from 'react';

const CalendarSelect = () => {
	return (
		<div className="calendar-select">
			<ul className="month-list">
				<li><a href="#">August</a></li>
				<li><a href="#">September</a></li>
				<li><a href="#">Octover</a></li>
				<li className="is-active"><a href="#">November</a></li>
				<li><a href="#">December</a></li>
				<li><a href="#">January</a></li>
				<li><a href="#">Febrary</a></li>
			</ul>
		</div>
	);
};

export default CalendarSelect;