import React from "react";
class HandleLogin extends React.Component {
  // 1)if else
  //2)ternary operator
  //3)&& operator
  //4)element variables
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };
  render() {
    let element;
    if (this.state.isLoggedIn) {
      element = <button onClick={this.handleLogin}>Login</button>;
    } else {
      element = <button onClick={this.handleLogout}>Logout</button>;
    }
    return <div>{element}</div>;
  }
}

export default HandleLogin;
