import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Comment = props => {
  return (
    <div className="comment-content">
      <p className="user-comment">{props.comment.text}</p>
      <p className="user-name">{props.comment.username}</p>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};

export default Comment;
