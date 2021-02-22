import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useStyles } from "./styled";
import Container from "@material-ui/core/Container";
import Header from "../../Components/Header/Header";
import useForm from "../../Hooks/useForm";
import axios from "axios";
import { goToFeed, goToSignUp } from "../../Router/Coordinator";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../Constant/Constant";

const LoginPage = () => {
  const { form, changeState, clearInput } = useForm({
    email: "",
    password: "",
  });
  const history = useHistory();
  const classes = useStyles();

  const logIn = (event) => {
    event.preventDefault();
    const body = {
      email: form.email,
      password: form.password,
    };
    axios
      .post(`${BASE_URL}`, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToFeed(history);
      })
      .catch((error) => {
        alert("Falha ao logar, tente novamente!");
      });
    clearInput();
  };

  return (
    <div>
      <Header />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <form className={classes.form} onSubmit={logIn} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Endereço de Email"
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
            <Grid container>
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => goToSignUp(history)}
                >
                  {"Não tem um conta? Cadastre-se"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}></Box>
      </Container>
    </div>
  );
};

export default LoginPage;
