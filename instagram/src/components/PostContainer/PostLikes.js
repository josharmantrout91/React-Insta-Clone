import React, { Fragment } from "react";

const PostLikes = props => {
  return (
    <Fragment>
      <div
        className="like-container"
        key="like-icons"
        onClick={props.likesPlusOne}
      >
        <div className="like-icon">
          <i className=" far fa-heart" />
        </div>
        <div className="like-icon">
          <i className="far fa-comment" />
        </div>
      </div>
      <div className="like-container" key="likes-count">
        <div className="like-container">{props.likes} Likes</div>
      </div>
    </Fragment>
  );
};

export default PostLikes;
