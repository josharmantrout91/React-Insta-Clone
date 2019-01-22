import React from "react";
import PropTypes from "prop-types";

const AddNewComment = props => {
  return (
    <form onSubmit={props.submitUserComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="Add a comment..."
        onChange={props.commentChanges}
      />
    </form>
  );
};

AddNewComment.propTypes = {
  submitUserComment: PropTypes.func,
  comment: PropTypes.string,
  commentChanges: PropTypes.func
};

export default AddNewComment;
