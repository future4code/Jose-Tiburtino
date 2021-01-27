import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../Img/logoastromatch.png";
import styled from "styled-components";
import Home from "./Home/Home";
import Matches from "./Matches/Matches";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const Header = styled.div``;

const Img = styled.img``;

const DivAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AppContainer = () => {
  const [profileLoading, setProfileLoading] = useState("");
  const [matchesList, setMatchesList] = useState("");
  const [section, setSection] = useState("home");

  useEffect(() => {
    loadProfile();
    getMatches();
  }, []);

  const loadProfile = () => {
    setProfileLoading("");
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jose-victor-epps/person"
      )
      .then((response) => {
        return setProfileLoading(response.data.profile);
      })
      .catch((error) => {
        alert("Erro ao procurar perfil, tente novamente!");
      });
  };

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jose-victor-epps/matches"
      )
      .then((response) => {
        return setMatchesList(response.data.matches);
      })
      .catch((error) => {
        alert("Erro ao carregar");
      });
  };

  const newMatches = () => {
    loadProfile();
    getMatches();
  };

  const changeSection = (event) => {
    setSection(event.target.value);
  };

  const deleteMatches = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jose-victor-epps/clear"
      )
      .then((response) => {
        return (
          alert("Lista de matches apagadas com sucesso!"),
          loadProfile(),
          getMatches()
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let renderSection = "";

  switch (section) {
    case "matches":
      renderSection = (
        <Div>
          <Header>
            <button onClick={changeSection} value="home">
              <ArrowBackIcon />
            </button>
            <Img src={logo} />
            <Matches matchesList={matchesList} />
          </Header>
        </Div>
      );
      break;
    default:
      renderSection = (
        <Div>
          <Header>
            <Img src={logo} />
            <button onClick={changeSection} value="matches">
              <HowToRegIcon />
            </button>
          </Header>
          <Home profile={profileLoading} newMatches={newMatches} />
        </Div>
      );
  }

  return (
    <DivAppContainer>
      <button onClick={deleteMatches}>Delete suas matches.</button>
      {renderSection}
    </DivAppContainer>
  );
};

export default AppContainer;
