import React from "react";
import axios from "axios";
import styled from "styled-components";

const DivApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SavePlaylist = styled.div`
  margin-bottom: 2%;
`;

const Button = styled.button`
  width: 200px;
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
        console.log(response);
        alert(`Playlist ${this.state.name} criada.`);
      })
      .catch((error) => {
        console.log(error);
        alert("Erro ao criar a Playlist!");
      });
  };

  render() {
    return (
      <DivApp>
        <SavePlaylist>
          <input
            value={this.state.name}
            onChange={this.onChangeName}
            placeholder={"Nome da Playlist"}
          ></input>
          <Button onClick={this.createPlaylist}>Criar Playlist</Button>
        </SavePlaylist>
        <Button onClick={this.props.changeSection}>
          Visualizar suas playlists
        </Button>
      </DivApp>
    );
  }
}

export default CreatePlaylist;
