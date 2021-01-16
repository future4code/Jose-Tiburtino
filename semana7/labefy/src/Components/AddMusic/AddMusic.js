import React from "react";
import axios from "axios";
import styled from "styled-components";

const Button = styled.button`
  height: 25px;
  width: 70px;
  :hover {
    cursor: pointer;
  }
`;

const DivApp = styled.div`
  margin-left: 3%;
`;

const Musics = styled.div``;

const MusicAdd = styled.div``;

const ButtonBack = styled.button`
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
  transition: color 0.4s ease-in-out;

  :before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: #3cefff;
    transform-origin: center;
    transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
    transition: transform 0.45s ease-in-out;
  }
  :hover {
    cursor: pointer;
    color: #161616;
  }
  :hover::before {
    transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
  }
`;

const Input = styled.input`
  height: 20px;
  width: 300px;
`;

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
    this.renderPlaylistDetails();
  }

  renderPlaylistDetails = () => {
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

  createMusic = () => {
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
        this.renderPlaylistDetails();
        this.changePlaylistEdit();
        alert("Música adicionada a Playlist!");
      })
      .catch((error) => {
        alert("Erro!");
      });
  };

  deleteMusic = (id, musicId) => {
    if (window.confirm("Quer mesmo deletar essa música?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks/${musicId}`,
          {
            headers: {
              Authorization: "jose-victor-epps",
            },
          }
        )
        .then((response) => {
          alert("Musica excluída da playlist");
          this.renderPlaylistDetails();
        })
        .catch((error) => {
          return alert("Erro ao excluir a música.");
        });
    }
  };

  render() {
    const renderPlaylist = this.state.playlistChanges.map((music) => {
      console.log(music);
      return (
        <div key={music.id}>
          <p>
            Artista: {music.artist} <br /> Música: {music.name}
          </p>
          <audio src={music.url} controls></audio>
          <button
            onClick={() => this.deleteMusic(this.props.changeId, music.id)}
          >
            Deletar Música
          </button>
        </div>
      );
    });

    const playlistEdit =
      this.state.playlistEdition === "editButton" ? (
        <MusicAdd onClick={this.changePlaylistEdit}>Adicionar tracks</MusicAdd>
      ) : (
        <div>
          <p>Adicione músicas a sua playlist:</p>
          <Input
            placeholder="Nome da música"
            value={this.state.name}
            onChange={this.nameChange}
          ></Input>

          <Input
            placeholder="Artista"
            value={this.state.artist}
            onChange={this.artistChange}
          />

          <Input
            placeholder="URL/Link da música"
            value={this.state.url}
            onChange={this.urlChange}
          />

          <Button onClick={this.createMusic}>Salvar</Button>
        </div>
      );

    return (
      <DivApp>
        <ButtonBack onClick={this.props.changePage}>Voltar</ButtonBack>
        <div>{playlistEdit}</div>
        <div>
          <h2>Músicas:</h2>
          <Musics>{renderPlaylist}</Musics>
          <hr />
        </div>
      </DivApp>
    );
  }
}

export default AddMusic;
