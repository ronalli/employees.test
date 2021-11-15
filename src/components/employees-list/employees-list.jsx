import './employees-list.css'
import EmployeesListItem from '../employees-list-item/employees-list-item';


const EmployeesList = ({ data, onDelete, onCreateElement }) => {

	const elements = data.map((item) => {

		const { id, ...itemProps } = item;

		return <EmployeesListItem
			key={id}
			{...itemProps}
			onDelete={() => onDelete(id)}
		/>
	})

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	);
}

export default EmployeesList;