import React from "react";
import logo from "../../Img/LabexLogo.png";
import styled from "styled-components";

const HeaderContainer = styled.div``;

const ImgLogo = styled.img`
  height: 80px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <ImgLogo src={logo} />
    </HeaderContainer>
  );
};

export default Header;
