import React from 'react';
import { showWritePopup } from '../resources/js/ui';

const Header = () => {
	const onClickAddEvent = () => {
		showWritePopup();
	}
	return (
		<header>
			<div className="inner-frame">
				<h1>Felix's Calendar5</h1>
				<div className="row">
					<ul className="menu-list">
						<li><a href="#">Tasks</a></li>
						<li><a href="#">List</a></li>
						<li><a href="#">Day</a></li>
						<li><a href="#">Week</a></li>
						<li className="is-active"><a href="#">Month</a></li>
					</ul>
					<button type="button" className="btn btn-add-event" onClick={onClickAddEvent}></button>
				</div>
			</div>
		</header>
	);
}

export default Header;