import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../../Img/LabexLogo.png";
import styled from "styled-components";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { goToHomePage, goToLogin } from "../Router/Coordinator";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 40px;
  background-color: #26272b;
  color: white;
`;

const Menu = styled.ul``;

const AssignmentIcon = styled(AssignmentIndIcon)`
  transform: scale(1.6);
`;

const MenuItens = styled.li`
  display: inline;
  font-weight: 500;
  font-size: 1.6em;
  cursor: pointer;
`;

const ImgLogo = styled.img`
  height: 90%;
  color: white;
  cursor: pointer;
`;

const Header = () => {
  const history = useHistory();

  return (
    <HeaderContainer>
      <ImgLogo src={logo} onClick={() => goToHomePage(history)} />
      <Menu>
        <MenuItens onClick={() => goToLogin(history)}>
          <AssignmentIcon />
        </MenuItens>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
