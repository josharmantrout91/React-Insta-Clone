import React from "react";
import Post from "./Post";
import styled from "styled-components";

const PostContainer = props => {
  return (
    <div>
      {props.posts.map(post => (
        <Post post={post} key={post.imageURL} />
      ))}
    </div>
  );
};

export default PostContainer;
