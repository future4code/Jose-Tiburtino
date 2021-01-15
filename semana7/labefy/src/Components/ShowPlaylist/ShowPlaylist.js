import React from "react";
import axios from "axios";
import styled from "styled-components";
import AddMusic from "../AddMusic/AddMusic";

const Button = styled.button``;

const DivApp = styled.div``;

const Playlists = styled.div``;

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
            <Button onClick={this.props.changeSection}>Voltar</Button>
            <h3>Procurar playlist:</h3>
            <input
              placeholder="Coloque o nome da playlist."
              type="text"
              value={this.state.name}
            />
            <Button>Buscar</Button>
            <ul>
              <h2>Suas playlists</h2>
              {this.state.playlist.map((list) => {
                return (
                  <li>
                    <Playlists
                      onClick={() => this.changePage(list.id, list.name)}
                    >
                      {list.name}
                      <Button onClick={() => this.deletePlaylist(list.id)}>
                        X
                      </Button>
                    </Playlists>

                    <hr />
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
