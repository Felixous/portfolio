import React, { useCallback } from 'react';
import { getMonthlyMatrix } from '../resources/js/ui';

import CalendarCell from './CalendarCell';

const MonthlyCalendarMain = ({ view, categories, events, changeSelected }) => {
	const { year, month, date } = view;

	const makeTable = useCallback(() => {
		let dateMatrix = getMonthlyMatrix(year, month, date, events);
		let weeks = [];
		let days = [];

		dateMatrix.map((weekItem, weekIndex) => {
			weekItem.map((dayItem, dayIndex) => {
				days.push(
					<CalendarCell 
						key={dayItem.year + '-' + dayItem.month + '-' + dayItem.date} 
						cellInfo={dayItem} 
						categories={categories} 
						changeSelected={changeSelected}
					/>
				)
			})
			weeks.push(<tr key={weekIndex + '번째주'}>{days}</tr>);
			days = [];
		})

		return weeks;
	}, [year, month, date, events]);

	return (
		<div className="calendar-main">
			<table className="tbl-monthly-calendar">
				<caption>테이블</caption>
				<colgroup>
					<col />
					<col />
					<col />
					<col />
					<col />
					<col />
					<col />
				</colgroup>
				<thead>
					<tr>
						<th className="holiday weekend">Sun</th>
						<th>Mon</th>
						<th>Tue</th>
						<th>Wed</th>
						<th>Thu</th>
						<th>Fri</th>
						<th className="weekend">Sat</th>
					</tr>
				</thead>
				<tbody>
					{makeTable()}
				</tbody>
			</table>
		</div>
	);
};

export default MonthlyCalendarMain;