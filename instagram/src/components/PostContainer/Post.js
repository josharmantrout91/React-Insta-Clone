import React from "react";
import PropTypes from "prop-types";
import CommentsSection from "../CommentsSection/CommentsSection";
import PostLikes from "./PostLikes";
import PostBanner from "./PostBanner";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }

  likesCounter = () => {
    const newLikesAmt = this.state.likes + 1;
    this.setState({ likes: newLikesAmt });
  };

  render() {
    return (
      <div className="post-wrapper">
        <PostBanner
          username={this.props.post.username}
          thumbnailURL={this.props.post.thumbnailURL}
        />
        <div className="post-main-img">
          <img
            className="post-img"
            src={this.props.post.imageURL}
            alt="post image thumbnail"
          />
        </div>
        <PostLikes likesPlusOne={this.likesCounter} likes={this.state.likes} />
        <CommentsSection
          postID={this.props.post.imageURL}
          comments={this.props.post.comments}
        />
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailURL: PropTypes.string,
    imageURL: PropTypes.string
  })
};

export default Post;
