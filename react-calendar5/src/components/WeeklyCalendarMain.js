import React, { useCallback } from 'react';
import { getShortDayName, getWeeklyMatrix, showWritePopup } from '../resources/js/utils';

import WeeklyCalendarTd from './WeeklyCalendarTd';

const WeeklyCalendarMain = ({ view, categories, events, changeSelected }) => {

	const makeTable = useCallback(() => {
		let { year, month, date } = view;
		let dateMatrix = getWeeklyMatrix(year, month, date, events);
		let trs = [];

		dateMatrix.forEach((o, i) => {
			let className = o.classNameList.join(' ');
			trs.push(
				<tr key={o.year + '-' + o.month + '-' + o.date} className={className} onClick={onClickTr(o)}>
					<th>
						<div className="day">{getShortDayName(o.day)}</div>
						<div className="date">{o.date}</div>
					</th>
					<WeeklyCalendarTd categories={categories} cellInfo={o} changeSelected={changeSelected} />
				</tr>
			)
		})
		
		return trs;
	}, [view, categories, events, changeSelected])

	const onClickTr = (o) => {
		let { year, month, date } = o;
		return () => {
			changeSelected(year, month, date);
			showWritePopup();
		}
	}

	return (
		<div className="calendar-main">
			<table className="tbl-weekly">
				<caption>테이블</caption>
				<colgroup>
					<col />
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