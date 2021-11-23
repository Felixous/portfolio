import React, { useEffect } from 'react';

import Header from './containers/Header';
import Main from './components/Main';
import ReadPopup from './containers/popups/ReadPopup';
import WritePopup from './containers/popups/WritePopup';
import DeletePopup from './containers/popups/DeletePopup';
import { checkDevice } from './resources/js/utils';


const App = () => {
	useEffect(() => {
		window.addEventListener('load', () => {
			checkDevice();
		})
		window.addEventListener('resize', () => {
			checkDevice();
		})
	}, [])
	return (
		<div className="layout">
			<Header />
			<Main />
			<ReadPopup />
			<DeletePopup />
			<WritePopup />
		</div>
	);
}

export default App;
