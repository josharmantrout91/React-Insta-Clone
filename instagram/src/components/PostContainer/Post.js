import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentsSection from "../CommentsSection/CommentsSection";
import PostLikes from "./PostLikes";
import PostBanner from "./PostBanner";
import styled from "styled-components";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  likesCounter = () => {
    let newLikesAmt = this.state.likes + 1;
    this.setState({ likes: newLikesAmt });
  };

  render() {
    return (
      <div className="post-container">
        <PostBanner
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <div className="post-main-img">
          <img
            className="post-img"
            src={this.props.post.imageUrl}
            alt="main post content"
          />
        </div>
        <PostLikes likes={this.state.likes} likesPlusOne={this.likesCounter} />
        <CommentsSection
          postID={this.props.post.imageUrl}
          comments={this.props.post.comments}
        />
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};

export default Post;
