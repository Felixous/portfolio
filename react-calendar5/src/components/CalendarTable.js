import React from 'react';

const CalnedarTable = () => {
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

			</tbody>
		</table>
	);
}

export default CalnedarTable;