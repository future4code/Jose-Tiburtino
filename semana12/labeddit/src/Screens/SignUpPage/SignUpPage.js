import React from "react";
import Header from "../../Components/Header/Header";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styled";
import Container from "@material-ui/core/Container";
import { goToFeed, goToLogin } from "../../Router/Coordinator";
import { useHistory } from "react-router-dom";
import useForm from "../../Hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../Constant/Constant";

const SignUpPage = () => {
  const classes = useStyles();
  const history = useHistory();
  const { form, changeState, clearInput } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const signUpForm = (event) => {
    event.preventDefault();
    const body = {
      email: form.email,
      password: form.password,
      username: form.username,
    };
    axios
      .post(`${BASE_URL}/signup`, body)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToFeed(history);
        window.alert("Bem-vindo ao LabEddit!");
      })
      .catch((error) => {
        alert("Erro ao criar o cadastro, tente novamente.");
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
          <Typography component="h1" variant="h5">
            Cadastre-se
          </Typography>
          <form className={classes.form} noValidate onSubmit={signUpForm}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="username"
                  name="username"
                  variant="outlined"
                  required
                  fullWidth
                  id="username"
                  label="Nome de usuário"
                  autoFocus
                  value={form.username}
                  onChange={changeState}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Endereço de Email"
                  name="email"
                  autoComplete="email"
                  onChange={changeState}
                  value={form.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={changeState}
                  value={form.password}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Cadastrar
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => goToLogin(history)}
                >
                  Já tem uma conta? Entre aqui.
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}></Box>
      </Container>
    </div>
  );
};

export default SignUpPage;
