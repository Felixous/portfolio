import React from 'react';
import { createDate, getFullDayName, getFullMonthName, hideReadPopup, showDeletePopup, showWritePopup, textCapitalize } from '../../resources/js/utils';

const ReadPopup = ({ view, categories, event }) => {
	
	const titleMaker = () => {
		if (!event) return;
		let category = event.category;
		let categoryObj = categories.find((o) => category === o.name);
		let text = event.text;
		return (
			<div className="title">
				<div className={"dot " + categoryObj.color}></div>
				<div className="text">{text}</div>
			</div>
		);
	}
	const dateMaker = () => {
		if (!event) return;
		let obj = createDate(view.year, view.month, event.date)
		let day = getFullDayName(obj.getDay());
		let month = getFullMonthName(view.month);
		let date = event.date;
		let result = day + ', ' + month + ' ' + date;
		return (<div className="date">{result}</div>);
	}
	const categoryMaker = () => {
		if (!event) return;
		let category = event.category;
		return (
			<div className="category">
				<span className="icon icon-category"></span>
				<div className="category">{textCapitalize(category)}</div>
			</div>
		);
	}
	const repeatMaker = () => {
		if (!event) return;
		let repeat = event.repeat;
		let result;
		if (repeat === 'none') {
			result = null;
		} else if (repeat === 'monthly') {
			result = (
				<div className="repeat">
					<span className="icon icon-repeat"></span>
					<div className="text">Repeats every month</div>
				</div>
			);
		} else if (repeat === 'yearly') {
			result = (
				<div className="repeat">
					<span className="icon icon-repeat"></span>
					<div className="text">Repeats every year</div>
				</div>
			);
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
					<div className="info-box">
						{titleMaker()}
						{dateMaker()}
					</div>
					<div className="info-box">
						{categoryMaker()}
						{repeatMaker()}
					</div>
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




