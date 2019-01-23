import React, { Fragment } from "react";
import styled from "styled-components";
import "./Post.css";
import PropTypes from "prop-types";

const LikeContainer = styled.div`
  display: flex;
`;

const LikeWrapper = styled.div`
  height: 10px;
  width: 10px;
  margin: 10px;
`;

const PostLikes = props => {
  return (
    <Fragment>
      <LikeContainer key="like-icons" onClick={props.likesPlusOne}>
        <LikeWrapper>
          <i className="far fa-heart" />
        </LikeWrapper>
        <LikeWrapper>
          <i className="far fa-comment" />
        </LikeWrapper>
      </LikeContainer>
      <LikeContainer key="likes-count">
        <LikeWrapper>{props.likes}</LikeWrapper>
      </LikeContainer>
    </Fragment>
  );
};

Comment.propTypes = {
  likesPlusOne: PropTypes.func,
  likes: PropTypes.string
};

export default PostLikes;
