import React from "react";
import { useHistory } from "react-router-dom";
import { HeaderContainer, Logo, ContainerButton } from "./styled";
import { goToLogin } from "../../Router/Coordinator";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styled";

const Header = () => {
  const history = useHistory();
  const classes = useStyles();
  const token = localStorage.getItem("token");

  const logOut = () => {
    localStorage.removeItem("token");
    goToLogin(history);
  };

  return (
    <div>
      <HeaderContainer>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              LabEddit
            </Typography>
            <Button color="inherit">Login</Button>
            <Button color="inherit">Cadastre-se</Button>
          </Toolbar>
        </AppBar>
      </HeaderContainer>
    </div>
  );
};

export default Header;
