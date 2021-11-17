import React from 'react';
import { Routes, Route } from 'react-router-dom';

import WeeklyCalendar from '../containers/WeeklyCalendar';
import MonthlyCalendar from '../containers/MonthlyCalendar';

const Main = () => {
	return (
		<main>
			<Routes>
				<Route exact path="/" element={<MonthlyCalendar />} />
				<Route path="/week" element={<WeeklyCalendar />} />
			</Routes>
		</main>
	);
};

export default Main;