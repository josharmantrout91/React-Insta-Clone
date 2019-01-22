import React from "react";
import styled from "styled-components";
import "../SearchBar/SearchBar.css";

const StyledSearchBar = styled.div`
  border-bottom: 1px solid #e6e6e6;
  background: #ffffff;
  height: 80px;
  line-height: 70px;
  display: flex;
  justify-content: space-evenly;
`;

const SearchBarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const SearchBarLogo = styled.div`
  padding-top: 7px;
`;

const SearchBarTitle = styled.div`
  margin-left: 20px;
`;

const Divider = styled.div`
  width: 1px;
  height: 30px;
  background-color: black;
  margin-left: 20px;
`;

const TitleText = styled.p`
  font-family: "Oleo Script", cursive;
  font-size: 30px;
  font-weight: none;
`;

const SearchBarCenter = styled.div`
  width: 15%;
`;

const SearchInput = styled.input`
type= "text";
placeholder= "Search";
height: 30%;
width: 100%;
border-radius: 5px;
`;

const SearchBarRight = styled.div`
  display: flex;
`;

const NavIcon = styled.div`
  width: 50px;
`;

const SearchBarContainer = props => {
  return (
    <StyledSearchBar>
      <SearchBarLeft>
        <SearchBarLogo>
          <i className="fab fa-instagram" size="2x" />
        </SearchBarLogo>
        <Divider />
        <SearchBarTitle>
          <TitleText>Instagramme</TitleText>
        </SearchBarTitle>
      </SearchBarLeft>

      <SearchBarCenter>
        <SearchInput onKeyDown={props.searchUserPosts} />
        {/* <input type= "text" placeholder= "Search" /> */}
      </SearchBarCenter>

      <SearchBarRight>
        <NavIcon>
          <i className="far fa-compass" />
        </NavIcon>
        <NavIcon>
          <i className="far fa-heart" />
        </NavIcon>
        <NavIcon>
          <i className="far fa-user" />
        </NavIcon>
      </SearchBarRight>
    </StyledSearchBar>
  );
};

export default SearchBarContainer;
