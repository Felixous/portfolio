import React, { useEffect, useState } from 'react';
import { getFullDayName, getFullMonthName, hideReadPopup, showDeletePopup, showWritePopup, textCapitalize } from '../resources/js/ui';

const ReadPopup = ({ view, categories, event }) => {
	// console.log('리드팝업 =============');

	const dotMaker = () => {
		if (!event) return;
		let category = event.category;
		let categoryObj = categories.find((o) => category === o.name);
		return <div className={"dot " + categoryObj.color}></div>;
	}
	const titleMaker = () => {
		if (!event) return;
		let text = event.text;
		return <div className="title">{text}</div>;
	}
	const descMaker = () => {
		if (!event) return;
		let obj = new Date(view.year + '-' + view.month + '-' + event.date);
		let day = getFullDayName(obj.getDay());
		let month = getFullMonthName(view.month);
		let date = event.date;
		let result = day + ', ' + month + ' ' + date;
		return <div className="desc">{result}</div>;
	}
	const categoryMaker = () => {
		if (!event) return;
		let category = event.category;
		return <div className="category">{textCapitalize(category)}</div>;
	}
	const repeatMaker = () => {
		if (!event) return;
		let repeat = event.repeat;
		let result;
		if (repeat === 'none') {
			result = null;
		} else if (repeat === 'monthly') {
			result = <div className="repeats">Repeats every month</div>;
		} else if (repeat === 'yearly') {
			result = <div className="repeats">Repeats every year</div>;
		}
		return result;
	}

	const onClickDim = () => {
		hideReadPopup();
	}
	const onClickEdit = () => {
		showWritePopup();
		hideReadPopup();
	}
	const onClickDelete = () => {
		showDeletePopup();
	}

	return (
		<div className="read-popup">
			<div className="popup-dim" onClick={onClickDim}></div>
			<div className="popup-layout">

				<div className="contents">
					{dotMaker()}
					{titleMaker()}
					{descMaker()}
					{categoryMaker()}
					{repeatMaker()}
				</div>

				<div className="bottom">
					<button type="button" className="btn btn-edit" onClick={onClickEdit}>Edit</button>
					<button type="button" className="btn btn-delete" onClick={onClickDelete}>Delete</button>
				</div>

			</div>
		</div>
	)
}

export default ReadPopup;




