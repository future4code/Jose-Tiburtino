import React from "react";
import axios from "axios";
import styled from "styled-components";

const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px;
  box-sizing: border-box;
  margin: 30px auto;
  width: 30%;
  border: 2px solid black;
`;

const Button = styled.button``;

class CreateUser extends React.Component {
  state = {
    inputName: "",
    inputEmail: "",
  };

  onChangeInputName = (event) => {
    this.setState({ inputName: event.target.value });
  };

  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  createUser = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "jose-victor-epps",
          },
        }
      )
      .then((response) => {
        console.log(response);
        return alert("Cadastro feito com sucesso!");
      })
      .catch((error) => {
        console.log(error);
        return alert("Coloque um NOME ou EMAIL válido!");
      });
  };

  render() {
    return (
      <Form>
        <label>Nome:</label>
        <input
          value={this.state.inputName}
          onChange={this.onChangeInputName}
        ></input>
        <label>Email:</label>
        <input
          value={this.state.inputEmail}
          onChange={this.onChangeInputEmail}
        ></input>
        <Button onClick={this.createUser}>Salvar</Button>
      </Form>
    );
  }
}

export default CreateUser;
