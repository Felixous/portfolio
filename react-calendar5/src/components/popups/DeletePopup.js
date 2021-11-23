import React from 'react';
import { hideDeletePopup, hideReadPopup } from '../../resources/js/utils';

const DeletePopup = ({ event, deleteEvent }) => {

	const onClickDim = () => {
		hideDeletePopup();
	}

	const onClickCancel = () => {
		hideDeletePopup();
	}

	const onClickDelete = () => {
		deleteEvent(event);
		hideDeletePopup();
		hideReadPopup();
	}

	return (
		<div className="delete-popup">
			<div className="popup-dim" onClick={onClickDim}></div>
			<div className="popup-layout">
				<p>
					<b>You're about to delete an event</b>
					<br />
					<span className="event">{event ? event.text : null}</span>
				</p>
				<div className="btns-box">
					<button type="button" className="btn btn-delete" onClick={onClickDelete}>Delete</button>
					<button type="button" className="btn btn-cancel" onClick={onClickCancel}>Cancel</button>
				</div>
			</div>
		</div>
	);
}

export default DeletePopup;