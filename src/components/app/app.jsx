import React from 'react';
import './app.css';

import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import SearchPanel from '../search-panel/search-panel';

const App = () => {
	return (
		<div className="app">

			<AppInfo />
			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>

			<EmployeesList />
			<EmployeesAddForm />

		</div>
	);
}

export default App;