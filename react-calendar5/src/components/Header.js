import React from 'react';
import { Link } from 'react-router-dom';
import { showWritePopup } from '../resources/js/ui';

const Header = ({ changeSelected }) => {
	const onClickPlus = () => {
		let today = new Date();
		changeSelected(today.getFullYear(), today.getMonth() + 1, today.getDate());
		showWritePopup();
	}
	return (
		<header>
			<div className="inner-frame">
				<h1><a href="http://localhost:3000/">Felix's Calendar5</a></h1>
				<div className="btns-box">
					<ul className="menu-list">
						<li className="is-active"><Link to="/">Month</Link></li>
						<li><Link to="/week">Week</Link></li>
						{/* <li><Link to="/list">List</Link></li> */}
					</ul>
					<button type="button" className="btn btn-add" onClick={onClickPlus}></button>
				</div>
			</div>
		</header>
	);
}

export default Header;