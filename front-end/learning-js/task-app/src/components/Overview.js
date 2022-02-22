import { Component } from "react";
import uniqid from "uniqid";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tasks = this.props.tasks;
    return (
      <ul>
        {tasks.map((task) => (
          <li key={uniqid()}>{task}</li>
        ))}
      </ul>
    );
  }
}

export default Overview;
