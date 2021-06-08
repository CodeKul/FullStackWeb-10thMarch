import React from "react";
class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      showTime: new Date().toLocaleTimeString(),
    };
  }
  componentDidMount() {
    console.log("didMount");
    setInterval(() => {
      this.setState({ showTime: new Date().toLocaleTimeString() });
    }, 1000);
  }
  shouldComponentUpdate() {
    console.log("should Update");
    return true;
  }
  componentWillUpdate() {
    console.log("will Update");
  }
  componentDidUpdate() {
    console.log("did Update");
  }

  render() {
    return (
      <div>
        <h2>{this.state.showTime}</h2>
      </div>
    );
  }
}
export default Clock;
