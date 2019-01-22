import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  userLoginSubmit = e => {
    const username = this.state.username;
    localStorage.setItem("username", username);
    window.location.reload();
  };

  render() {
    return Form;
  }
}
