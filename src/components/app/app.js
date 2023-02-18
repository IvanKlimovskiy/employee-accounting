import {Component} from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-fliter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: "Иванов Илья Александрович", salary: 143500, award: true, promotion: true, id: 1},
        {name: "Петриченко Влад Валерьевич", salary: 32800, award: false, promotion: false, id: 2},
        {name: "Констатинов Михаил Юрьевич", salary: 51200, award: false, promotion: false, id: 3},
        {name: "Русанова Ольга Петровна", salary: 63000, award: true, promotion: true, id: 4},
        {name: "Мельникова Ксения Витальевна", salary: 12500, award: false, promotion: true, id: 5},
        {name: "Иванова София Ивановна", salary: 22300, award: false, promotion: false, id: 6},
        {name: "Буракшаева Юлия Сергеевна", salary: 54700, award: false, promotion: false, id: 7},
        {name: "Сапсай Иван Алексеевич", salary: 18100, award: false, promotion: true, id: 8},
        {name: "Сергеев Игорь Вячеславович", salary: 33900, award: false, promotion: true, id: 9},
        {name: "Бондина Анастасия Борисовна", salary: 19400, award: false, promotion: false, id: 10},
        {name: "Прокопенко Алина Дмитривена", salary: 81000, award: true, promotion: false, id: 11},
        {name: "Пискунов Валерий Александрович", salary: 92000, award: true, promotion: true, id: 12},
      ],
      searchingEmployeeTerm: '',
      filterEmployee: 'all'
    }
    this.employeeNextId = 13;
  }

  deleteEmployee = (id) => {
    this.setState(({data}) => {
      return {
        data: data.filter(employee => employee.id !== id)
      }
    })
  }

  addEmployee = (name, salary) => {
    const newEmployee = {
      name: name,
      salary: salary,
      award: false,
      promotion: false,
      id: this.employeeNextId++
    };
    this.setState(({data}) => {
      return {
        data: data.concat(newEmployee)
      }
    })
  }

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(element => {
        if (element.id === id) {
          return {...element, [prop]: !element[prop]}
        }
        return element
      })
    }))
  }

  filterEmployeesSalaryAndPromotion = (employees, filterEmployee) => {
    switch (filterEmployee) {
      case 'salary':
        return employees.filter(employee => employee.salary > 60000)
      case 'promotion':
        return employees.filter(employee => employee.promotion)
      default:
        return employees
    }
  }

  filterEmployees = (employees, searchingEmployeeTerm) => {
    if (searchingEmployeeTerm === 0) {
      return employees
    }
    return employees.filter((employee) => {
      return employee.name.indexOf(searchingEmployeeTerm) > -1
    })
  }

  updateSearchingEmployeeTerm = (searchingEmployeeTerm) => {
    this.setState({searchingEmployeeTerm})
  }

  onFilterSelect = (filterEmployee) => {
    this.setState({filterEmployee})
  }

  render() {
    const {data, searchingEmployeeTerm, filterEmployee} = this.state;
    const employeesCount = data.length;
    const employeesAwardCount = data.filter(el => el.award).length
    const employeesPromotionCount = data.filter(el => el.promotion).length
    const visibleData = this.filterEmployeesSalaryAndPromotion(this.filterEmployees(data, searchingEmployeeTerm), filterEmployee)
    return (
      <div className="app">
        <AppInfo onCountEmployees={employeesCount}
                 onCountEmployeesAward={employeesAwardCount}
                 onCountEmployeesPromotion={employeesPromotionCount}/>
        <div className="search-panel">
          <SearchPanel onUpdateSearchingEmployeeTerm={this.updateSearchingEmployeeTerm}/>
          <AppFilter filterEmployee={filterEmployee} onFilterSelect={this.onFilterSelect}/>
        </div>
        <EmployeesList data={visibleData}
                       onDelete={this.deleteEmployee}
                       onToggleProp={this.onToggleProp}/>
        <EmployeesAddForm onAdd={this.addEmployee}/>
      </div>
    );
  }
}
