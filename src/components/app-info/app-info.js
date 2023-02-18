import "./app-info.css";

const AppInfo = ({onCountEmployees, onCountEmployeesAward, onCountEmployeesPromotion}) => {
  return (
    <div className="app-info">
      <h1>Учёт сотрудников в компании РосБарДак</h1>
      <h2>Общее число сотрудников: {onCountEmployees} </h2>
      <h2>Примию получат: {onCountEmployeesAward} </h2>
      <h2>На повышение: {onCountEmployeesPromotion} </h2>
    </div>
  )
}

export default AppInfo;
