import React, { useState } from 'react';
import { makeMonthMatrix } from '../resources/js/ui';

const CalnedarTable = () => {
	const [ year, setYear ] = useState(2021);
	const [ month, setMonth ] = useState(11);
	const [ date, setDate ] = useState(8);

	const makeWeeks = () => {
		let data = makeMonthMatrix(year, month, date);
		console.log(data);
		let weeks = [];
		data.map((weekData, i) => {
			let days = [];
			weekData.map((DayData, i) => {
				let td = <td key={DayData.toString()}>{DayData.getDate()}</td>;
				days.push(td);
			})
			weeks.push(<tr key={i}>{days}</tr>);
		})
		return weeks;
	}

	return (
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
				{makeWeeks()}
			</tbody>
		</table>
	);
}

export default CalnedarTable;