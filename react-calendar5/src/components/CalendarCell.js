import React from 'react';

const CalendarCell = ({ cellInfo }) => {
	const { year, month, date, classNameList, events } = cellInfo;
	const className = classNameList.join(' ');
	
	const makeEventList = () => {
		let list = [];
		events.map((item, index) => {
			list.push(<li key={index}>{item.text}</li>)
		})
		return list;
	}

	return (
		<td className={className}>
			<div className="date-num">{date}</div>
			<ul className="event-list">
				{makeEventList()}
			</ul>
		</td>
	);
};

export default CalendarCell;