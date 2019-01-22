import React, { Component } from "react";
import dummyData from "../../dummy-data";
import PostContainer from "./PostContainer";
import SearchBarContainer from "./components/SearchBar/SearchBarContainer";

class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      searchResults: []
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  searchPostsHandler = e => {
    const posts = this.state.posts.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
    });
    this.setState({ filteredPosts: posts });
  };

  render() {
    return (
      <div className="App">
        <SearchBarContainer searchUserPosts={this.searchPostsHandler} />
        <PostContainer
          posts={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
        />
      </div>
    );
  }
}

export default PostsPage;
