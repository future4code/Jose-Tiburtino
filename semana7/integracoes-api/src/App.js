import React from "react";
import styled from "styled-components";
import CreateUser from "./Components/CreateUser/CreateUser";
import GetUser from "./Components/GetUser/GetUser";
import EditUser from "./Components/EditUser/EditUser"

const Container = styled.div``;

const Button = styled.button`
  display: inline-block;
`;

class App extends React.Component {
  state = {
    section: "",
    id: "",
  };

  changeSection = (event) => {
    this.setState({ section: event.target.getAttribute("value") });
  };

  receiveId = (idClicked) => {
    this.setState({section: "details", id:idClicked})
  }

  backToGetUser = () => {
    this.setState({section:"list", id:""})
  }

  render() {
    if (this.state.section === "list") {
      return (
        <Container>
          <Button onClick={this.changeSection} value="getUser">
            Ir para a página de registro
          </Button>
          <GetUser getId={this.receiveId} />
        </Container>
      );
    } else if (this.state.section === "details") {
      return (
        <Container>
          <EditUser id={this.state.id} back={this.backToGetUser}/>
        </Container>
      )
    }

    return (
      <Container>
        <Button onClick={this.changeSection} value="list">
          Ir para a lista de Usuários
        </Button>
        <CreateUser />
      </Container>
    );
  }
}

export default App;
