import { Component } from "react";
import "./App.css";
import MyComponent from "./MyComponents";

function App() {
  return (
    <div>
      <MyComponent title="Hello World" />
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       count: 0,
//     };

//     this.countUp = this.countUp.bind(this);
//   }

//   countUp() {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.countUp}>Click Me!</button>
//         <p>{this.state.count}</p>
//       </div>
//     );
//   }
// }

export default App;
