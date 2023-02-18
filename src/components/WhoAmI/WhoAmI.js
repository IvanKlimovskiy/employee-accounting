import {Component} from "react";

export default class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: this.props.years,
      position: ""
    }
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  prevYear = () => {
    this.setState(state => ({
      years: state.years - 1
    }))
  }

  commitInputChanges = (evt) => {
    this.setState({
      position: evt.target.value
    })
  }

  render() {
    const {name, surname, link} = this.props;
    const {years, position} = this.state
    return(
      <div>
        <button onClick={this.nextYear}>Увеличить</button>
        <h1>My name is {name}, surname - {surname}, age - {years}, position - {position}</h1>
        <p><a href={link}>LINK</a></p>
        <button onClick={this.prevYear}>Уменьшить</button>
        <form>
          <span>Введите должность</span>
          <input type="text" onChange={this.commitInputChanges}/>
        </form>
      </div>
    )
  }
}
