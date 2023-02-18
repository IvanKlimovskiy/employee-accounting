import './employees-add-form.css';
import {Component} from "react";

class EmployeesAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: ""
    }
  }

  onValueChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.onAdd(this.state.name, this.state.salary);
    this.setState({
      name: "",
      salary: ""
    })
  }

  render() {
    const {name, salary} = this.state;
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form onSubmit={this.onSubmit}
              className="add-form d-flex">
          <input type="text"
                 required
                 minLength={5}
                 maxLength={40}
                 className="form-control new-post-label"
                 placeholder="Как его зовут?" name="name" value={name} onChange={this.onValueChange}/>
          <input type='number'
                 required
                 className="form-control new-post-label"
                 placeholder="З/П в рублях?" name="salary" value={salary} onChange={this.onValueChange}/>
          <button type="submit"
                  className="btn btn-outline-light">Добавить
          </button>
        </form>
      </div>
    )
  }
}

export default EmployeesAddForm;
