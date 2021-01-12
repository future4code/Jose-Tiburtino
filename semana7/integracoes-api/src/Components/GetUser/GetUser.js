import React from "react";
import axios from "axios";
import styled from "styled-components";

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 35px;
  box-sizing: border-box;
`;

const UlUsers = styled.div`
  list-style-type: none;
  padding: 0;
  width: 30%;
`;

const DivList = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  margin: 15px;
`;

const ButtonDelete = styled.button`
  color: red;
`;

class GetUser extends React.Component {
  state = {
    usersList: [],
  };

  getUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "jose-victor-epps",
          },
        }
      )
      .then((response) => {
        this.setState({ usersList: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getUsers();
  }

  deleteItem = (id) => {
    if (window.confirm("Tem certeza de que deseja deletar?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
          {
            headers: {
              Authorization: "jose-victor-epps",
            },
          }
        )
        .then((response) => {
          return alert("Usuário deletado com sucesso!"), this.getUsers();
        })
        .catch((error) => {
          return alert("Usuário não foi deletado");
        });
    }
  };

  render() {
    return (
      <UserContainer>
        <h2>Usuários Cadastrados:</h2>
        <UlUsers>
          {this.state.usersList.map((user) => {
            return (
              <DivList>
                <li>{user.name}</li>
                <ButtonDelete onClick={() => this.deleteItem(user.id)}>
                  X
                </ButtonDelete>
              </DivList>
            );
          })}
        </UlUsers>
      </UserContainer>
    );
  }
}

export default GetUser;
