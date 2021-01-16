import React from "react";
import styled from "styled-components";
import CreatePlaylist from "./Components/CreatePlaylist/CreatePlaylist";
import ShowPlaylist from "./Components/ShowPlaylist/ShowPlaylist";
import Logo from "./Img/logo.png";

const DivApp = styled.div``;

const LogoContainer = styled.img`
`

const Header = styled.header`
  background-color: #DAE5E8;
  color: black;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MidContainer = styled.div`
  height: 79vh;
  background-color: #f9f9f9;
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
        <Header>
          <LogoContainer src={Logo} alt="logo" />
          <strong>Labefy</strong>
        </Header>
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
