import React from "react";
import axios from "axios";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useForm } from "../../Hooks/useForm";
import { goToListTripsPage } from "../../Router/Coordinator";
import styled from "styled-components";

const LoginContainer = styled.div`
  height: 81.8vh;
`;

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "black",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginPage = () => {
  const history = useHistory();
  const classes = useStyles();
  const { form, changeState } = useForm({ email: "", password: "" });

  const logIn = (event) => {
    event.preventDefault();
    const body = {
      email: form.email,
      password: form.password,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/jose-tiburtino-epps/login",
        body
      )
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToListTripsPage(history);
      })
      .catch((error) => {
        alert("Falha ao logar, tente novamente!");
      });
  };

  return (
    <div>
      <Header />
      <LoginContainer>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form className={classes.form} onSubmit={logIn} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Endereço de E-mail"
                name="email"
                autoComplete="email"
                autoFocus
                value={form.email}
                onChange={changeState}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
                value={form.password}
                onChange={changeState}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Entrar
              </Button>
            </form>
          </div>
          <Box mt={8}></Box>
        </Container>
      </LoginContainer>
      <Footer />
    </div>
  );
};

export default LoginPage;
