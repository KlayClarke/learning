import { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addTask = this.addTask.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInputChange(e) {
    document.querySelector("h3").innerText = e.target.value;
  }

  clearInputField() {
    document.querySelector("input").value = "";
  }

  addTask() {
    this.setState({
      tasks: [...this.state.tasks, document.querySelector("input").value],
    });
    this.clearInputField();
  }

  handleClick(e) {
    e.preventDefault();

    if (document.querySelector("input").value.length > 0) {
      this.addTask();
    }
  }

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="task-entry">Task Entry</label>
          <input id="task-entry" onChange={this.handleInputChange} />
          <button type="submit" onClick={this.handleClick}>
            Add Task
          </button>
        </form>
        <h3></h3>
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;
