import React from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";

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
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };

  render() {
    return (
      <Form className="user-login-form">
        <h2>Ye Olde Instagramme</h2>
        <div>Log In Henceforth</div>
        <FormGroup>
          <Input
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleChanges}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.handleChanges}
          />
          <br />
          <Button size="large" onClick={this.userLoginSubmit}>
            Log In
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default Login;
