import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const DivStyleForm = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 10%;
`;

const LoginForm = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  box-shadow: 0px 0px 8px 0px rgb(0 0 0 / 16%);

  border-radius: 16px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  margin-top: 10%;
  margin-left: 33%;
`;

const LoginPage = () => {
  const history = useHistory();

  return (
    <div>
      <Header />
      <DivStyleForm>
        <LoginForm>
          <h2>Login</h2>
          <form>
            <Field>
              <label for="email">E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="Coloque seu E-mail"
              ></input>
            </Field>
            <Field>
              <label for="password">Senha</label>
              <input
                type="password"
                name="password"
                placeholder="Coloque sua senha"
              ></input>
            </Field>
            <Button>Entrar</Button>
          </form>
        </LoginForm>
      </DivStyleForm>
      <Footer />
    </div>
  );
};

export default LoginPage;
