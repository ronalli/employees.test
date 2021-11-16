// import { Component } from 'react';
import './employees-list-item.css'

const EmployeesListItem = (props) => {

	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		increase: this.props.increase,
	// 		rise: false
	// 	}
	// }

	// onIncrease = () => {
	// 	this.setState(({ increase }) => ({
	// 		increase: !increase
	// 	}))
	// }

	// onRise = (e) => {
	// 	this.setState(({ rise }) => ({
	// 		rise: !rise
	// 	}))
	// }
	const { name, salary, onDelete, onToggleRise, onToggleIncrease, increase, rise } = props;
	// const { increase, rise } = this.state;
	let defaultClass = "list-group-item d-flex justify-content-between";

	if (increase) {
		defaultClass += ' increase';
	}
	if (rise) {
		defaultClass += ' like';
	}

	return (
		<li className={defaultClass}  >
			<span onClick={onToggleRise} className="list-group-item-label">{name}</span>
			<input type="text" className="list-group-item-input" defaultValue={salary + "$"} />
			<div className="f-flex justify-content-center align-items-center">
				<button type="button" className="btn-cookie btn-sm" onClick={onToggleIncrease}>
					<i className="fas fa-cookie"></i>
				</button>

				<button onClick={onDelete} type="button" className="btn-trash btn-sm">
					<i className="fas fa-trash"></i>
				</button>

				<i className="fas fa-star"></i>
			</div>
		</li>
	);
}

export default EmployeesListItem;