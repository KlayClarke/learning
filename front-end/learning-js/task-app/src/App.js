import { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };

    this.addTask = this.addTask.bind(this);
  }

  addTask() {
    this.setState({
      tasks: [...this.state.tasks, document.querySelector("input").value],
    });
  }

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="task-entry">Task Entry</label>
          <input id="task-entry" />
          <button type="button" onClick={this.addTask}>
            Add Task
          </button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}

export default App;
