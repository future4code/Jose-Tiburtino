import React from "react";
import axios from "axios";
import styled from "styled-components";

const Button = styled.button``;

const Musics = styled.div``;

const MusicAdd = styled.div``;

class AddMusic extends React.Component {
  state = {
    name: "",
    artist: "",
    url: "",
    playlistChanges: [],
    playlists: [],
    listEdit: "edit",
  };

  componentDidMount() {
    this.addPlaylistDetails();
  }

  addPlaylistDetails = (changeId) => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.changeId}/tracks
        `,
        {
          headers: {
            Authorization: "jose-victor-epps",
          },
        }
      )
      .then((response) => {
        this.setState({ playlistChanges: response.data.result.tracks });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  changePlaylistEdit = () => {
    if (this.state.listEdit === "edit") {
      this.setState({ listEdit: "playlistEditForm" });
    } else {
      this.setState({ listEdit: "edit" });
    }
  };

  nameChange = (event) => {
    const newNameValue = event.target.value;

    this.setState({ name: newNameValue });
  };

  artistChange = (event) => {
    const newArtistValue = event.target.value;

    this.setState({ artist: newArtistValue });
  };

  urlChange = (event) => {
    const newUrlValue = event.target.value;

    this.setState({ url: newUrlValue });
  };

  createPlaylist = (listId) => {
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.changeId}/tracks`,
        body,
        {
          headers: {
            Authorization: "jose-victor-epps",
          },
        }
      )
      .then((response) => {
        this.setState({ name: "", artist: "", url: "" });
        this.addPlaylistDetails();
        this.changePlaylistEdit();
        alert("Música adicionada a Playlist!");
      })
      .catch((error) => {
        alert("Erro!");
        console.log(error);
      });
  };

  render() {
    const details = this.state.playlistChanges.map((playlist) => {
      return (
        <div key={playlist.id}>
          <p>
            Artista: {playlist.artist} <br /> Música: {playlist.name}
          </p>
          <audio src={playlist.url} controls></audio>
        </div>
      );
    });

    const playlistEdit =
      this.state.playlistEdition === "editButton" ? (
        <MusicAdd onClick={this.changePlaylistEdit}>Adicionar tracks</MusicAdd>
      ) : (
        <div>
          <p>Adicione músicas a sua playlist:</p>
          <input
            placeholder="Nome da música"
            value={this.state.name}
            onChange={this.nameChange}
          ></input>

          <input
            placeholder="Artista"
            value={this.state.artist}
            onChange={this.artistChange}
          />

          <input
            placeholder="URL/Link da música"
            value={this.state.url}
            onChange={this.urlChange}
          />

          <Button onClick={this.createPlaylist}>Salvar</Button>
        </div>
      );

    return (
      <div>
        <Button onClick={this.props.changePage}>Voltar</Button>
        <div>{playlistEdit}</div>
        <div>
          <Musics>{details}</Musics>
          <hr />
        </div>
      </div>
    );
  }
}

export default AddMusic;
