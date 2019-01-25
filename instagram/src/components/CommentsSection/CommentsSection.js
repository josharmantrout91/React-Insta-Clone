import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Comment from "./Comment";
import AddNewComment from "./AddNewComment";

class CommentsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ""
    };
  }

  componentDidMount() {
    const id = this.props.postID;
    if (localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postID))
      });
    } else {
      this.setUserComments();
    }
  }

  componentWillUnmount() {
    this.setUserComments();
  }

  setUserComments = () => {
    localStorage.setItem(
      this.props.postID,
      JSON.stringify(this.state.comments)
    );
  };

  commentChangeHandler = e => {
    this.setState({
      comment: e.target.value
    });
  };

  userCommentSubmission = e => {
    e.preventDefault();
    const newComment = { text: this.state.comment, username: "newuser" };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: "" });
    setTimeout(() => {
      this.setUserComments();
    }, 1000);
  };

  render() {
    return (
      <div>
        {this.state.comments.map((cmt, ind) => (
          <Comment comment={cmt} key={ind} />
        ))}
        <AddNewComment
          comment={this.state.comment}
          submitUserComment={this.userCommentSubmission}
          commentChanges={this.commentChangeHandler}
        />
      </div>
    );
  }
}

CommentsSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      username: PropTypes.string
    })
  )
};

export default CommentsSection;
