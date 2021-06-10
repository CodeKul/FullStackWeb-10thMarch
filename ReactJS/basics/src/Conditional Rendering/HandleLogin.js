import React from "react";
import Login from "./Login";
import Logout from "./Logout";
class HandleLogin extends React.Component {
  // 1)if else
  //2)ternary operator
  //3)&& operator
  //4)element variables
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
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
      element = <Login displayLogin={this.handleLogin}/>
    } else {
      element = <Logout displayLogout={this.handleLogout}/>
    }
    return <div>{element}</div>;
  }
}

export default HandleLogin;
