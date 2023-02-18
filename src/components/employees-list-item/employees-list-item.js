import './employees-list-item.css';

const EmployeesListItem = ({name, salary, onDelete, onToggleProp, award, promotion}) => {

  let classNames = 'list-group-item d-flex justify-content-between';
  if (award) {
    classNames += ' increase'
  }
  if (promotion) {
    classNames += ' like'
  }
  return (
    <li
      className={classNames}>
      <span data-toggle='promotion' className='list-group-item-label' onClick={onToggleProp}>{name}</span>
      <input type='text' className='list-group-item-input' defaultValue={`${salary} руб.`}/>
      <div className='d-flex justify-content-center align-items-center'>
        <button data-toggle='award' type="button" className="btn-cookie btn-sm " onClick={onToggleProp}>
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button"
                className="btn-trash btn-sm " onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  )
}

export default EmployeesListItem;
