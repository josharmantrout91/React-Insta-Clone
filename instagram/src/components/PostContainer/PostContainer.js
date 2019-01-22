import React from "react";
import Post from "./Post";
import styled from "styled-components";

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

export default PostContainer;
