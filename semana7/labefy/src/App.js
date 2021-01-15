import React from "react";
import styled from "styled-components";
import CreatePlaylist from "./Components/CreatePlaylist/CreatePlaylist";
import ShowPlaylist from "./Components/ShowPlaylist/ShowPlaylist";

const DivApp = styled.div``;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  color: white;
  font-size: xx-large;
`;

const MidContainer = styled.div`
  height: 90vh;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class App extends React.Component {
  state = {
    section: "createPlaylist",
  };

  changeSection = () => {
    if (this.state.section === "createPlaylist") {
      this.setState({ section: "showPlaylist" });
    } else {
      this.setState({ section: "createPlaylist" });
    }
  };

  render() {
    return (
      <DivApp>
        <Header>Labefy</Header>
        <MidContainer>
          {this.state.section === "createPlaylist" ? (
            <CreatePlaylist changeSection={this.changeSection} />
          ) : (
            <ShowPlaylist changeSection={this.changeSection} />
          )}
        </MidContainer>
      </DivApp>
    );
  }
}

export default App;
