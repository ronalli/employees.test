import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import SearchPanel from '../search-panel/search-panel';

import './app.css';

// console.log(Math.floor(Math.random() * 10));

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{ name: "Alex", salary: 1500, increase: false, id: 1 },
				{ name: "Mark", salary: 1100, increase: false, id: 2 },
				{ name: "Bob", salary: 1900, increase: false, id: 3 }
			],
			term: "",
		}
	}

	onDeleteElement = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter(element => element.id !== id),
			}
		})
	}

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map(element => {
				if (element.id === id) {
					return { ...element, [prop]: !element[prop] }
				}
				return element
			})
		}))
	}

	random = () => {
		return Date.now();
	}

	addElement = (name, salary) => {
		this.setState(({ data }) => {
			let element = {
				name,
				salary,
				increase: false,
				rise: false,
				id: this.random()
			}
			return {
				data: [...data, element]
			}
		})
	}

	searchEmployees = (items, term) => {
		if (term.length === 0) {
			return items;
		}
		return items.filter((item) => {
			return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
		})
	}

	onUpdateSearch = (term) => {
		this.setState({ term })
	}

	render() {

		const { data, term } = this.state;
		const visibleData = this.searchEmployees(data, term)
		const employees = data.length;
		const increased = data.filter(item => item.increase).length

		// console.log(employees, increased)

		return (
			<div className="app" >

				<AppInfo
					employees={employees}
					increased={increased}
				/>
				<div className="search-panel">
					<SearchPanel
						onUpdateSearch={this.onUpdateSearch}
					/>
					<AppFilter />
				</div>

				<EmployeesList
					data={visibleData}
					onDelete={this.onDeleteElement}
					onToggleProp={this.onToggleProp}
				/>
				<EmployeesAddForm
					addElement={this.addElement}
				/>

			</div>
		);
	}
}

export default App;