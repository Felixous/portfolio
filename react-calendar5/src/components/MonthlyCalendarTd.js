import React from 'react';
import { showReadPopup, showWritePopup } from '../resources/js/utils';

const MonthlyCalendarTd = ({ cellInfo, categories, changeSelected }) => {
	const { year, month, date, classNameList, events } = cellInfo;
	const className = classNameList.join(' ');

	const makeEventList = () => {
		let list = [];
		events.forEach((item, index) => {
			let category = item.category;
			let color = categories.find((v) => v.name === category).color;
			list.push(
				<li key={index}>
					<div className={'event-item ' + color} onClick={onClickEvent} data-event-id={item.id}>{item.text}</div>
				</li>
			)
		})
		return list;
	}

	const onClickCell = () => {
		if (classNameList.indexOf('other-month') >= 0) return;
		changeSelected(year, month, date);
		showWritePopup();
	}

	const onClickEvent = (e) => {
		e.stopPropagation();
		if (classNameList.indexOf('other-month') >= 0) return;
		let eventId = Number(e.target.dataset.eventId);
		let event = events.find((v) => v.id === eventId);
		changeSelected(year, month, date, event);
		showReadPopup();
	}

	return (
		<td className={className} onClick={onClickCell}>
			<div className="date-num">{date}</div>
			<div className="scroller">
				<ul className="event-list">
					{makeEventList()}
				</ul>
			</div>
		</td>
	);
};

export default MonthlyCalendarTd;