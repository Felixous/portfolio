import React, { useState, useMemo, useCallback } from 'react';
import { getDateMatrix, getTodayWeekNum } from '../resources/js/ui';
import { useSelector, useDispatch } from 'react-redux';

import CalendarCell from './CalendarCell';

const CalendarMain = ({ year, month, date, events }) => {

	const makeTable = useCallback(() => {
		let dateMatrix = getDateMatrix(year, month, date, events);
		let weeks = [];
		let days = [];

		dateMatrix.map((weekItem, weekIndex) => {
			weekItem.map((dayItem, dayIndex) => {
				days.push(<CalendarCell key={dayItem.year + '-' + dayItem.month + '-' + dayItem.date} cellInfo={dayItem} />)
			})
			weeks.push(<tr key={weekIndex + '번째주'}>{days}</tr>);
			days = [];
		})

		return weeks;

	}, [year, month, date, events])

	// const makeTable = useCallback(() => {
	// 	let today = new Date();
	// 	let data = getDateMatrix(year, month, date);
	// 	let result = [];
	// 	data.map((v, weekindex) => {
	// 		let innerArray = [];
	// 		v.map((v, dateindex) => {
	// 			let name = null;
	// 			let isOtherMonth = v.month !== month;
	// 			if (isOtherMonth) name = 'other-month';
	// 			if (today.getFullYear() === v.year && today.getMonth() + 1 === v.month) {
	// 				let todayWeekNum = getTodayWeekNum();
	// 				let isThisWeek = weekindex === todayWeekNum;
	// 				let isToday = v.date === (new Date()).getDate();
	// 				if (isThisWeek) name = 'this-week';
	// 				if (isToday) name += ' today';
	// 			}
	// 			let td = <td className={name}>{v.date}</td>;
	// 			innerArray.push(td);

	// 		})
	// 		let tr = <tr>{innerArray}</tr>;
	// 		result.push(tr);
	// 	})
	// 	return result;
	// }, [year, month, date]);

	return (
		<div className="calendar-main">
			<table className="tbl-calendar">
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

export default CalendarMain;