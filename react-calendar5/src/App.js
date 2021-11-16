import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './containers/Header';
import WeeklyCalendar from './containers/WeeklyCalendar';
import MonthlyCalendar from './containers/MonthlyCalendar';
import ReadPopup from './containers/popups/ReadPopup';
import WritePopup from './containers/popups/WritePopup';
import DeletePopup from './containers/popups/DeletePopup';


const App = () => {
	return (
		<div className="layout">
			<Header />
			<main>
				<Routes>
					<Route exact path="/" element={<MonthlyCalendar />} />
					<Route path="/week" element={<WeeklyCalendar />} />
					{/* <Route path="/list" element={<div>List</div>} /> */}
				</Routes>
			</main>
			<ReadPopup />
			<DeletePopup />
			<WritePopup />
		</div>
	);
}

export default App;
