import React from "react";
import { useHistory } from "react-router-dom";
import { HeaderContainer } from "./styled";
import { goToLogin } from "../../Router/Coordinator";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styled";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

const Header = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const token = localStorage.getItem("token");

  const logOut = () => {
    localStorage.removeItem("token");
    goToLogin(history);
    alert("Deslogou!");
  };

  return (
    <div>
      <HeaderContainer>
        {!token && (
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                LabEddit
              </Typography>
              <Button color="inherit">Login</Button>
              <Button color="inherit">Cadastre-se</Button>
            </Toolbar>
          </AppBar>
        )}
        {token && (
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                LabEddit
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Buscar…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  onChange={props.handleSearch}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
              <Button color="inherit" onClick={logOut}>
                Logout
              </Button>
            </Toolbar>
          </AppBar>
        )}
      </HeaderContainer>
    </div>
  );
};

export default Header;
