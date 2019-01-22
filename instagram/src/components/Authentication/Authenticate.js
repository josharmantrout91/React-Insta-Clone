import React from "react";

const Authenticate = PostsPage => Login =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoggedIn: false
      };
    }

    componentDidMount() {
      if (!localStorage.getItem("username")) {
        this.setState({
          isLoggedIn: false
        });
      } else {
        this.setState({
          isLoggedIn: true
        });
      }
    }
    render() {
      if (this.state.isLoggedIn) return <PostsPage />;
      return <Login />;
    }
  };

export default Authenticate;
