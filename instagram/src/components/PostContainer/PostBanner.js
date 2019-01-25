import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "./Post.css";

const StyledBanner = styled.div`
  display: flex;
  width: 100%;
  background: #ffffff;
`;

const WrapThumbnail = styled.div`
  height: 50px;
  width: 50px;
  margin-left: 10px;
`;

const Uname = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  font-weight: bold;
`;
const PostBanner = props => {
  return (
    <StyledBanner>
      <WrapThumbnail>
        <img
          className="post-thumbnail"
          src={props.thumbnailUrl}
          alt="post banner"
        />
      </WrapThumbnail>
      <Uname>{props.username}</Uname>
    </StyledBanner>
  );
};

PostBanner.propTypes = {
  thumbnailUrl: PropTypes.string,
  username: PropTypes.string
};

export default PostBanner;
