import React from 'react';

import Header from './containers/Header';
import Calendar from './components/Calendar';
import ReadPopup from './containers/ReadPopup';
import WritePopup from './containers/WritePopup';
import DeletePopup from './containers/DeletePopup';

const App = () => {
	return (
		<div className="layout">
			<Header />
			<Calendar />
			<ReadPopup />
			<DeletePopup />
			<WritePopup />
		</div>
	);
}

export default App;
