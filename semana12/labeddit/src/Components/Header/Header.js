import React from "react";
import { useHistory } from "react-router-dom";
import { HeaderContainer } from "./styled";
import { goToLogin } from "../../Router/Coordinator";
import Toolbar from "@material-ui/core/Toolbar";
import {
  useStyles,
  Logo,
  NavBar,
  Button,
  ToolConfigBar,
  UserOptions,
  UserName,
} from "./styled";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { goToFeed } from "../../Router/Coordinator";
import logo from "../../Assets/logolabeddit.png";
import swal from "sweetalert";

const Header = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const logOut = () => {
    localStorage.removeItem("token");
    goToLogin(history);
    swal({
      title: "Você deslogou!",
      text: "Volte sempre.",
      icon: "warning",
    });
  };

  return (
    <div>
      <HeaderContainer>
        {!token && (
          <NavBar position="static">
            <Toolbar>
              <Logo src={logo} />
            </Toolbar>
          </NavBar>
        )}
        {token && (
          <NavBar position="static">
            <ToolConfigBar>
              <Logo onClick={() => goToFeed(history)} src={logo} />
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
              <UserOptions>
                <UserName>u/{username}</UserName>
                <Button color="inherit" onClick={logOut}>
                  Log Out
                </Button>
              </UserOptions>
            </ToolConfigBar>
          </NavBar>
        )}
      </HeaderContainer>
    </div>
  );
};

export default Header;
