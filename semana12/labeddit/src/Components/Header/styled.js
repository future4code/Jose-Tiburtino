import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 5vh;
  border-bottom: 1px solid #edeff1;
`;

export const Logo = styled.h3``;

export const Button = styled.button`
  border-radius: 9999px;
  font-family: "Noto Sans", sans-serif;
  cursor: pointer;
`;

export const ContainerButton = styled.div`
  display: flex;
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
}));
