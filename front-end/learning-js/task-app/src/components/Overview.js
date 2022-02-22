import { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tasks = this.props.tasks;
    const taskItems = tasks.map((task) => (
      <li key={tasks.indexOf(task)}>{task}</li>
    ));
    return <ul>{taskItems}</ul>;
  }
}

export default Overview;
