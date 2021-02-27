import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useStyles } from "./styled";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Header from "../../Components/Header/Header";
import useForm from "../../Hooks/useForm";
import { logIn } from "../../Services/User";
import { goToSignUp } from "../../Router/Coordinator";
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { useUnprotectedPage } from "../../Hooks/useUnprotectedPage";

const LoginPage = () => {
  useUnprotectedPage();
  const { form, changeState, clearInput } = useForm({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const classes = useStyles();

  const handleLogIn = (event) => {
    event.preventDefault();
    logIn(form, history, setLoading);
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
            Entre com sua conta
          </Typography>
          <form className={classes.form} onSubmit={handleLogIn} noValidate>
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
              {" "}
              {loading ? <CircularProgress /> : <>ENTRAR</>}
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
