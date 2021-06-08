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

  componentDidMount() {
    console.log("After Mount");  //API Calls
  }

  componentWillUpdate(){
    console.log("Will Update")
  }
  shouldComponentUpdate() {
    console.log("should Update")
    return true;
  }

 

  componentDidUpdate() {
    console.log("Inside component did update");
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
        <DisplayCountValue countValue={this.state.count} />
      </div>
    );
  }
}
export default Counter;
