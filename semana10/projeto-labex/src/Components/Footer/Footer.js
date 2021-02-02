import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

const FooterContainer = styled.div`
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #26272b;
  color: white;
  bottom: 0;
  padding: 0 40px;
  position: absolute;
`;

const SocialMedias = styled.a`
  color: white;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Copyright @ 2021 All Rights Reserved by LabeX</p>
      <SocialMedias>
        <FacebookIcon />
        <TwitterIcon />
        <GitHubIcon />
      </SocialMedias>
      <SocialMedias>
        <p>adm.labex@labex.com.br</p>
      </SocialMedias>
    </FooterContainer>
  );
};

export default Footer;
