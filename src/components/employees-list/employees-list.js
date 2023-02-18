import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {

  const employees = data.map(employee => {
    const {id, ...employeeProps} = employee;
    return <EmployeesListItem key={id} {...employeeProps}
                              onDelete={() => onDelete(id)}
                              onToggleProp={(evt) => onToggleProp(id, evt.currentTarget.getAttribute('data-toggle'))}
    />
  })

  return (
    <ul className='app-list list-group'>
      {employees}
    </ul>
  );
};

export default EmployeesList;
