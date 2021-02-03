import React from "react";
import { FooterContainer, SocialMedias } from "./FooterStyled";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";

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
