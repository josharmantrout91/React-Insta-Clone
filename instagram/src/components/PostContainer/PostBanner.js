import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const PostBanner = props => {
  return (
    <div className="post-banner">
      <div className="wrap-thumbnail">
        <img
          className="post-thumbnail"
          src={props.thumbnailUrl}
          alt="post banner image"
        />
      </div>
      <div>{props.username}</div>
    </div>
  );
};

PostBanner.PropTypes = {
  thumbnailUrl: PropTypes.string,
  username: PropTypes.string
};

export default PostBanner;
