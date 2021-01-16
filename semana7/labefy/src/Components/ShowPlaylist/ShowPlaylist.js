import React from "react";
import axios from "axios";
import styled from "styled-components";
import AddMusic from "../AddMusic/AddMusic";

const Button = styled.button`
  display: flex;
  :hover {
    cursor: pointer;
  }
`;

const DivApp = styled.div`
  margin-left:3%;
  margin-right:19%;
`;

const Playlists = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  margin: 15px;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: -0.25em;
    right: -0.25em;
    background-color: #ff8e00;
    transform-origin: center right;
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
  }

  :hover::before {
    cursor: pointer;
    transform: scaleX(1);
    transform-origin: center left;
  }
`;

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

class ShowPlaylist extends React.Component {
  state = {
    playlist: [],
    id: "",
    name: "",
    changeId: "",
    section: "showPlaylist",
  };

  componentDidMount() {
    this.searchPlaylist();
  }

  searchPlaylist = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "jose-victor-epps",
          },
        }
      )
      .then((response) => {
        console.log(response.data)
        this.setState({ playlist: response.data.result.list });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  deletePlaylist = (id) => {
    if (window.confirm("Quer mesmo deletar essa playlist?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
          {
            headers: {
              Authorization: "jose-victor-epps",
            },
          }
        )
        .then((response) => {
          alert("Playlist excluída!");
          this.searchPlaylist();
        })
        .catch((error) => {
          return alert("Erro ao deletar.");
        });
    }
  };

  changePage = (changeId) => {
    if (this.state.section === "showPlaylist") {
      this.setState({
        section: "details",
        changeId: changeId,
      });
    } else {
      this.setState({ section: "showPlaylist", listId: "" });
    }
  };

  render() {
    return (
      <DivApp>
        {this.state.section === "showPlaylist" ? (
          <div>
            <ButtonBack onClick={this.props.changeSection}>Voltar</ButtonBack>
            <ul>
              <h1>Suas playlists</h1>
              {this.state.playlist.map((playlist) => {
                return (
                  <li>
                    <Playlists
                      playlistId = {playlist.id}
                      onClick={() => this.changePage(playlist.id)}
                    >
                      {playlist.name}
                    </Playlists>
                    <Button onClick={() => this.deletePlaylist(playlist.id)}>
                      Deletar Playlist
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <AddMusic
            changeId={this.state.changeId}
            changePage={this.changePage}
          />
        )}
      </DivApp>
    );
  }
}

export default ShowPlaylist;
