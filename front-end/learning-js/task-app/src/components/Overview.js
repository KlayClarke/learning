import { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let key = 0;
    const tasks = this.props.tasks;
    const taskItems = tasks.map((task) => <li key={key++}>{task}</li>);
    return <ul>{taskItems}</ul>;
  }
}

export default Overview;
