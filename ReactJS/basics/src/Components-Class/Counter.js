import React from "react";
import DisplayCountValue from "./DisplayCountValue";
import MyComponent from "./MyComponent";
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  incrementCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementCounter = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Counter Component</h1>
        <h4>{this.state.count}</h4>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.decrementCounter}>Decrement</button>
        <DisplayCountValue countValue={this.state.count}/>
      </div>
    );
  }
}
export default Counter;
