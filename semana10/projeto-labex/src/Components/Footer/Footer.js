import React from "react";
import { FooterContainer, SocialMedias } from "./FooterStyled";
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
  return (
    <FooterContainer>
      <p>Copyright @ 2021 All Rights Reserved by LabeX</p>
      <SocialMedias href="https://github.com/josevictorsss">
        <GitHubIcon />
      </SocialMedias>
      <SocialMedias href="mailto:adm.labex@labex.com.br">
        <p>adm.labex@labex.com.br</p>
      </SocialMedias>
    </FooterContainer>
  );
};

export default Footer;
