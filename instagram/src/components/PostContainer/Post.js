import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentsSection from "../CommentsSection/CommentsSection";
import PostLikes from "./PostLikes";
import PostBanner from "./PostBanner";
import styled from "styled-components";
import "./Post.css";

const StyledPostContainer = styled.div`
  border: 1px solid #e6e6e6;
  margin: 15px 0;
  border-radius: 5px;
  background: #ffffff;
`;

const StyledPostImgWrap = styled.div`
  height: 100%;
  width: 100%;
`;

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
      <StyledPostContainer>
        <PostBanner
          username={this.props.post.username}
          thumbnailUrl={this.props.post.thumbnailUrl}
        />
        <StyledPostImgWrap>
          <img
            className="post-img"
            src={this.props.post.imageUrl}
            alt="main post content"
          />
        </StyledPostImgWrap>
        <PostLikes likes={this.state.likes} likesPlusOne={this.likesCounter} />
        <CommentsSection
          postID={this.props.post.imageUrl}
          comments={this.props.post.comments}
        />
      </StyledPostContainer>
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
