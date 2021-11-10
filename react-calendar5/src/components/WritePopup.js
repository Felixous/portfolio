import React from 'react';

const WritePopup = () => {
	return (
		<div className="write-popup">
			<div className="popup-layout">

				<div className="header">
					<button type="button" className="btn btn-cancel">Cancel</button>
					<strong>New Event</strong>
					<button type="button" className="btn btn-save">Save</button>
				</div>
				<div className="main"></div>

			</div>
		</div>
	);
};

export default WritePopup;