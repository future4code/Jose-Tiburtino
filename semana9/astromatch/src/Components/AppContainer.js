import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../Img/logoastromatch.png";
import {
  DivApp,
  Header,
  DivAppContainer,
  Button,
  MatchIcon,
  ArrowBack,
  DeleteMatches,
} from "./AppContainerStyled";
import Home from "./Home/Home";
import Matches from "./Matches/Matches";

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
      .catch((error) => {});
  };

  let renderSection = "";

  switch (section) {
    case "matches":
      renderSection = (
        <DivApp>
          <Header>
            <ArrowBack onClick={changeSection} value="home" />
            <img src={logo} alt="logo do site" />
            <DeleteMatches onClick={deleteMatches} alt="Deletar Matches" />
          </Header>
          <Matches matchesList={matchesList} />
        </DivApp>
      );
      break;
    default:
      renderSection = (
        <DivApp>
          <Header>
            <DeleteMatches onClick={deleteMatches} alt="Deletar Matches" />
            <img src={logo} alt="logo do site" />
            <Button onClick={changeSection} value="matches">
              <MatchIcon onClick={changeSection} value="matches" />
            </Button>
          </Header>
          <Home profile={profileLoading} newMatches={newMatches} />
        </DivApp>
      );
  }

  return <DivAppContainer>{renderSection}</DivAppContainer>;
};

export default AppContainer;
