import React from "react";
import { ReactDOM } from "react";

class Greeting extends React.Component {
  render() {
    return (
      <div className="box">
        <h2>Hello world!</h2>
        <p>We are so glad to have you here.</p>
      </div>
    );
  }
}

ReactDOM.render(<Greeting />, document.getElementById("app"));
