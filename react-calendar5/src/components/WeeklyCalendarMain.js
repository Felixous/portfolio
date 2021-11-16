import React, { useCallback } from 'react';
import { getShortDayName, getWeeklyMatrix } from '../resources/js/ui';

import WeeklyCalendarTd from './WeeklyCalendarTd';

const WeeklyCalendarMain = ({ view, categories, events, changeSelected }) => {
	const { year, month, date } = view;

	const makeTable = useCallback(() => {
		let dateMatrix = getWeeklyMatrix(year, month, date, events);
		let trs = [];

		dateMatrix.map((o, i) => {
			let className = o.classNameList.join(' ');
			trs.push(
				<tr key={o.year + '-' + o.month + '-' + o.date} className={className}>
					<th>
						<div className="day">{getShortDayName(o.day)}</div>
						<div className="date">{o.date}</div>
					</th>
					<WeeklyCalendarTd categories={categories} cellInfo={o} changeSelected={changeSelected} />
				</tr>
			)
		})
		
		return trs;

	}, [year, month, date, events])

	return (
		<div className="calendar-main">
			<table className="tbl-weekly-calendar">
				<caption>테이블</caption>
				<colgroup>
					<col style={{ width: 100 + 'px' }} />
					<col />
				</colgroup>
				<tbody>
					{makeTable()}
				</tbody>
			</table>
		</div>
	);
};

export default WeeklyCalendarMain;