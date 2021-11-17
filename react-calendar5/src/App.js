import React from 'react';

import Header from './containers/Header';
import Main from './components/Main';
import ReadPopup from './containers/popups/ReadPopup';
import WritePopup from './containers/popups/WritePopup';
import DeletePopup from './containers/popups/DeletePopup';


const App = () => {
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
