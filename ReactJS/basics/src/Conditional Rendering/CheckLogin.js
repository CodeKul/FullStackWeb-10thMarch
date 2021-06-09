import React from "react";
import Guestuser from "./Guestuser";
import Welcome from "./Welcome";

function CheckLogin(props) {
  if (props.isLoggedIn) {
    return <h1>Welcome</h1>;
  } else {
    return <h1>Please Login</h1>;
  }
}

export default CheckLogin;
