import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AsideSection from "../ListTripsPage/AsideSections";

const TripDetailsContainer = styled.div`
  display: flex;
`;

const TripDetailsPage = () => {
  const history = useHistory();

  return (
    <div>
      <Header />
      <TripDetailsContainer>
        <AsideSection />
        <h1>Detalhes das viagens</h1>
      </TripDetailsContainer>
      <Footer />
    </div>
  );
};

export default TripDetailsPage;
