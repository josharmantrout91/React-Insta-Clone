import React from "react";
import Post from "./Post";
import styled from "styled-components";
import PropTypes from "prop-types";

const PostContainerWrap = styled.div`
  height: 50%;
  width: 33%;
  min-width: 400px;
  margin: 5px auto;
`;

const PostContainer = props => {
  return (
    <PostContainerWrap>
      {props.posts.map(post => (
        <Post post={post} key={post.imageUrl} />
      ))}
    </PostContainerWrap>
  );
};

PostContainer.propTypes = {
  posts: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string
      })
    )
  })
};

export default PostContainer;
