import React, { useCallback } from 'react';
import { getMonthlyMatrix } from '../resources/js/utils';

import MonthlyCalendarTd from './MonthlyCalendarTd';

const MonthlyCalendarMain = ({ view, categories, events, changeSelected }) => {
	
	const makeTable = useCallback(() => {
		let { year, month, date } = view;
		let dateMatrix = getMonthlyMatrix(year, month, date, events);
		let weeks = [];
		let days = [];

		dateMatrix.forEach((weekItem, weekIndex) => {
			weekItem.forEach((dayItem, dayIndex) => {
				days.push(
					<MonthlyCalendarTd 
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
	}, [view, categories, events, changeSelected]);

	return (
		<div className="calendar-main">
			<table className="tbl-monthly">
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