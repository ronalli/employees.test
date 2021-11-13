import { Component } from 'react';
import './employees-list-item.css'

class EmployeesListItem extends Component {

	constructor(props) {
		super(props)
		this.state = {
			increase: this.props.increase,
		}
	}

	onIncrease = () => {
		if (this.state.increase) this.setState({ increase: false })
		else this.setState({ increase: true })
	}

	salaryPerson

	render() {
		const { name, salary } = this.props;
		let defaultClass = "list-group-item d-flex justify-content-between";
		let classList = this.state.increase ? defaultClass + ' increase' : defaultClass;

		return (
			<li className={classList}>
				<span className="list-group-item-label">{name}</span>
				<input type="text" className="list-group-item-input" defaultValue={salary + "$"} />
				<div className="f-flex justify-content-center align-items-center">
					<button type="button" className="btn-cookie btn-sm" onClick={this.onIncrease}>
						<i className="fas fa-cookie"></i>
					</button>

					<button type="button" className="btn-trash btn-sm">
						<i className="fas fa-trash"></i>
					</button>

					<i className="fas fa-star"></i>
				</div>
			</li>
		);
	}
}

export default EmployeesListItem;