import { Component } from "react";

// const ErrorComponent = () => <div>{props.ignore}</div>;

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      seed: 0,
    };
    this.increment = () => {
      this.setState({ counter: this.state.counter + 1 });
    };

    this.decrement = () => {
      this.setState({ counter: this.state.counter - 1 });
    };
  }

  static getDerivedStateFromProps(props, state) {
    // allows you to copy props to state
    // static, so we do not have access to instances of object

    // anything returned in here effects state
    // if you don't wish to change state, return null
    if (props.seed && state.seed !== props.seed) {
      return {
        seed: props.seed,
        counter: props.seed,
      };
    }
    return null;
  }

  componentDidMount() {
    console.log("called after initial mount / render");
  }

  componentDidUpdate() {
    console.log("called after every update / render after initial mount ");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log("Should Component Update -- DO NOT RENDER");
      return false;
    }
    console.log("Should Component Update -- RENDER");

    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return null;
  }

  render() {
    console.log("render");

    if (this.state.error) {
      return <div>We have encountered an error! {this.state.error}</div>;
    }

    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button type="button" onClick={this.increment}>
          Increment
        </button>
        <button type="button" onClick={this.decrement}>
          Decrement
        </button>
        <div className="counter">Counter: {this.state.counter}</div>
        {/* <ErrorComponent /> */}
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update");
    console.log("--------------------");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  componentDidCatch(error, info) {
    this.setState({
      error,
      info,
    });
  }
}
