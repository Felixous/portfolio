import React from 'react';

import Header from './components/Header';
import Calendar from './components/Calendar';
import AddEvent from './containers/AddEvent';
import WritePopup from './components/WritePopup';

const App = () => {
	return (
		<div className="layout">
			<Header />
			<Calendar />
			<AddEvent />
			<WritePopup />
		</div>
	);
}

export default App;
