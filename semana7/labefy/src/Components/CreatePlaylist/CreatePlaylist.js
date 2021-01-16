import React from "react";
import axios from "axios";
import styled from "styled-components";

const DivApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const SavePlaylist = styled.div`
  display: flex;
`;

const H3 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  z-index: 1;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);

  :hover {
    cursor: pointer;
    animation: jelly 0.5s;
  }

  @keyframes jelly {
    0%,
    100% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(0.9, 1.1);
    }
    50% {
      transform: scale(1.1, 0.9);
    }
    75% {
      transform: scale(0.95, 1.05);
    }
  }
`;

const ButtonGoPlay = styled.button`
  height: 50px;
  width: 300px;
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
  overflow: hidden;
  cursor: pointer;
  ::after {
    content: "";
    z-index: -1;
    background-color: hsla(0, 0%, 100%, 0.2);
    position: absolute;
    top: -50%;
    bottom: -50%;
    width: 1.25em;
    transform: translate3d(-525%, 0, 0) rotate(35deg);
  }
  :hover::after {
    transition: transform 0.45s ease-in-out;
    transform: translate3d(200%, 0, 0) rotate(35deg);
  }
`;

const Input = styled.input`
  height: 50px;
  width: 500px;
`;

class CreatePlaylist extends React.Component {
  state = {
    name: "",
  };

  onChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  createPlaylist = () => {
    const body = {
      name: this.state.name,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "jose-victor-epps",
          },
        }
      )
      .then((response) => {
        alert(`Playlist ${this.state.name} criada.`);
      })
      .catch((error) => {
        alert("Erro ao criar a Playlist!");
      });
  };

  render() {
    return (
      <DivApp>
        <H3>Bem-vindo(a) ao Labefy!</H3>
        <H3>Crie sua Playlist!</H3>
        <SavePlaylist>
          <Input
            value={this.state.name}
            onChange={this.onChangeName}
            placeholder={"Nome da Playlist"}
          ></Input>
          <Button onClick={this.createPlaylist}>Criar Playlist</Button>
        </SavePlaylist>
        <H3>Ou</H3>
        <ButtonGoPlay onClick={this.props.changeSection}>
          Visualize suas playlists
        </ButtonGoPlay>
      </DivApp>
    );
  }
}

export default CreatePlaylist;
