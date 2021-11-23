import React, { useCallback } from 'react';
import { textCapitalize, showReadPopup } from '../resources/js/utils';

const WeeklyCalendarTd = ({ categories, cellInfo, changeSelected }) => {
	const { year, month, date, events } = cellInfo;

	const onClickEvent = useCallback((e) => {
		e.stopPropagation();
		let target = e.target;
		if (!target.classList.contains('event-item')) target = target.parentNode;
		let eventId = Number(target.dataset.eventId);
		let event = events.find((v) => v.id === eventId);
		changeSelected(year, month, date, event);
		showReadPopup();
	}, [year, month, date, events, changeSelected])

	const eventListMaker = useCallback(() => {
		let lis = [];
		events.forEach((o, i) => {
			let color = categories.find((v) => v.name === o.category).color;
			lis.push(
				<li key={i}>
					<div className={'event-item ' + color} data-event-id={o.id} onClick={onClickEvent}>
						<div className="title">{o.text}</div>
						<div className="category">{textCapitalize(o.category)}</div>
					</div>
				</li>
			);
		})
		return lis;
	}, [categories, events, onClickEvent]);
	
	return (
		<td>
			<div className="scroller">
				<ul className="event-list">
					{eventListMaker()}
				</ul>
			</div>
		</td>
	);
};

export default WeeklyCalendarTd;