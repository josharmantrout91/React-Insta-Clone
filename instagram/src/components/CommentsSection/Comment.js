import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CommentContent = styled.div`
  text-align: left;
  padding: 2px;
  margin-left: 4px;
`;

const UserComment = styled.span`
  font-size: 12px;
  margin-left: 5px;
`;

const UserName = styled.span`
  font-weight: bold;
  font-size: 12px;
`;

const Comment = props => {
  return (
    <CommentContent>
      <UserName>{props.comment.username}</UserName>
      <UserComment>{props.comment.text}</UserComment>
    </CommentContent>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
