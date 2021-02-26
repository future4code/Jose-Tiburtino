import styled from "styled-components";
import { makeStyles, fade } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar } from "@material-ui/core";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
  border-bottom: 1px solid #edeff1;
`;

export const Logo = styled.img`
  cursor: pointer;
  @media screen and (min-device-width: 320px) and (max-device-width: 420px) {
    height: 6vh;
  }
  @media screen and (min-device-width: 421px) and (max-device-width: 800px) {
    height: 6vh;
  }
`;

export const Button = styled.button`
  border-radius: 9999px;
  height: 30px;
  width: 100px;
  font-size: 0.9em;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  font-family: "Noto Sans", sans-serif;
  cursor: pointer;
`;

export const ContainerButton = styled.div`
  display: flex;
`;

export const NavBar = styled(AppBar)`
  display: flex;
  justify-content: space-evenly;
  background-color: white;
`;

export const ToolConfigBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  inputRoot: {
    color: "#878a8c",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#f6f7f8",
    boxShadow:
      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    color: "#878a8c",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
