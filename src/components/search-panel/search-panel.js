import "./search-panel.css";
import {Component} from "react";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchingEmployeeTerm: ''
    }
  }

  updateSearchingEmployeeTerm = (evt) => {
    const searchingEmployeeTerm = evt.target.value
    this.setState({
      searchingEmployeeTerm
    })
    this.props.onUpdateSearchingEmployeeTerm(searchingEmployeeTerm)
  }

  render() {
    return (
      <input type="text"
             className="form-control search-input"
             placeholder="Найти сотрудника"
             onChange={this.updateSearchingEmployeeTerm}
             value={this.state.searchingEmployeeTerm}
      />
    )
  }
}

export default SearchPanel
