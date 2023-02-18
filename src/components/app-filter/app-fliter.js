import "./app-filter.css"

const AppFilter = (props) => {
  const {onFilterSelect, filterEmployee} = props;
  const buttonsData = [
    {name: 'all', label: 'Все сотрудники.'},
    {name: 'promotion', label: 'На повышение.'},
    {name: 'salary', label: 'ЗП больше 60000 руб.'},
  ]

  const buttons = buttonsData.map(({name, label}) => {
    const isActive = filterEmployee === name
    const buttonClassName = isActive ? 'btn-light' : 'btn-outline-light'
    return (
      <button onClick={() => onFilterSelect(name)}
              name={name}
              className={`btn ${buttonClassName}`}
              key={name}
              type="button">
        {label}
      </button>
    )
  })

  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
};

export default AppFilter;
