import React, { Component } from "react";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage";
import Login from "./components/Login/Login";
import Authenticate from "./components/Authentication/Authenticate";
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <ConditionalView />
      </div>
    );
  }
}

const ConditionalView = Authenticate(PostsPage)(Login);

export default App;
