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
		}
	}

	onDeleteElement = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter(element => element.id !== id),
			}
		})
	}

	onToggleIncrease = (id) => {
		this.setState(({ data }) => ({
			data: data.map(element => {
				if (element.id === id) {
					return { ...element, increase: !element.increase }
				}
				return element
			})
		}))
		// console.log(`this increase ${id}`);
	}

	onToggleRise = (id) => {
		console.log(`this rise ${id}`);

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

	render() {

		const employees = this.state.data.length;
		const increased = this.state.data.filter(item => item.increase === true).length

		// console.log(employees, increased)

		return (
			<div className="app" >

				<AppInfo
					employees={employees}
					increased={increased}
				/>
				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>

				<EmployeesList
					data={this.state.data}
					onDelete={this.onDeleteElement}
					onToggleIncrease={this.onToggleIncrease}
					onToggleRise={this.onToggleRise}
				/>
				<EmployeesAddForm
					addElement={this.addElement}
				/>

			</div>
		);
	}
}

export default App;