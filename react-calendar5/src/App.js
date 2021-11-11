import React from 'react';

import Header from './components/Header';
import Calendar from './components/Calendar';
import WritePopup from './containers/WritePopup';

const App = () => {
	return (
		<div className="layout">
			<Header />
			<Calendar />
			<WritePopup />
		</div>
	);
}

export default App;
