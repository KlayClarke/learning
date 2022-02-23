import { Component } from "react";
import { Counter } from "./components/Counter";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
    };

    this.mountCounter = () => {
      this.setState({ mount: true });
    };
    this.unMountCounter = () => {
      this.setState({ mount: false });
    };
    this.ignoreProp = () => {
      this.setState({
        ignoreProp: Math.random(),
      });
    };
    this.seedGenerator = () => {
      this.setState({
        seed: Number.parseInt(Math.random() * 100),
      });
    };
  }

  render() {
    return (
      <div>
        <button
          type="button"
          onClick={this.mountCounter}
          disabled={this.state.mount}
        >
          Mount Counter
        </button>
        <button
          typeof="button"
          onClick={this.unMountCounter}
          disabled={!this.state.mount}
        >
          Unmount Counter
        </button>
        <button type="button" onClick={this.ignoreProp}>
          Ignore Prop
        </button>
        <button type="button" onClick={this.seedGenerator}>
          Generate Seed
        </button>
        {this.state.mount ? (
          <Counter ignoreProp={this.state.ignoreProp} seed={this.state.seed} />
        ) : null}
      </div>
    );
  }
}

export default App;
