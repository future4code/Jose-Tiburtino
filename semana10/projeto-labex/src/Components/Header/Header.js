import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../../Img/LabexLogo.png";
import {
  HeaderContainer,
  Menu,
  AssignmentIcon,
  MenuItens,
  ImgLogo,
  ExitToApp,
  AdmConfigIcon,
} from "./HeaderStyled";
import {
  goToHomePage,
  goToListTripsPage,
  goToLogin,
} from "../Router/Coordinator";

const Header = () => {
  const history = useHistory();
  const token = localStorage.getItem("token");

  const logOut = () => {
    localStorage.removeItem("token");
    goToHomePage(history);
  };

  return (
    <HeaderContainer>
      <ImgLogo src={logo} onClick={() => goToHomePage(history)} />
      {!token && (
        <Menu>
          <MenuItens>
            <AssignmentIcon onClick={() => goToLogin(history)} />
          </MenuItens>
        </Menu>
      )}
      {token && (
        <Menu>
          <MenuItens>
            <AdmConfigIcon onClick={() => goToListTripsPage(history)} />
            <ExitToApp onClick={logOut} />
          </MenuItens>
        </Menu>
      )}
    </HeaderContainer>
  );
};

export default Header;
