import React from 'react';
import './app.css';

import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import SearchPanel from '../search-panel/search-panel';

const App = () => {

	const data = [
		{ name: "Alex", salary: 1500 },
		{ name: "Mark", salary: 1100 },
		{ name: "Bob", salary: 1900 }
	]

	return (
		<div className="app">

			<AppInfo />
			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>

			<EmployeesList data={data} />
			<EmployeesAddForm />

		</div>
	);
}

export default App;