import { Component } from 'react';
import './employees-add-form.css'

class EmployeesAddForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			salary: ''
		}
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	addPersone = (e) => {
		const { name, salary } = this.state;
		e.preventDefault();
		if (name !== '' && salary !== '') {
			this.props.addElement(name, salary)
		}
		this.setState({
			name: '',
			salary: ''
		})
	}

	render() {

		const { name, salary } = this.state;

		return (
			<div className="app-add-form" >
				<h3>Добавьте нового сотрудник</h3>
				<form className="add-form d-flex"
					onSubmit={this.addPersone}>
					<input type="text"
						className="form-control new-post-label"
						value={name}
						name="name"
						onChange={this.onValueChange}
						placeholder="Как его зовут?" />
					<input type="number"
						className="form-control new-post-label"
						value={salary}
						name="salary"
						onChange={this.onValueChange}
						placeholder="З/П в $?" />
					<button type="submit"
						className="btn btn-outline-light">Добавить</button>
				</form>
			</div>
		);
	}
}

export default EmployeesAddForm;