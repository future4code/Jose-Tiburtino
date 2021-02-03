import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import styled from "styled-components";
import AsideSection from "../ListTripsPage/AsideSections";

const CreateTripContainer = styled.div`
  display: flex;
`;

const CreateTripPage = () => {
  const history = useHistory();

  return (
    <div>
      <Header />
      <CreateTripContainer>
        <AsideSection />
        <h1>Criar viagem</h1>
      </CreateTripContainer>
      <Footer />
    </div>
  );
};

export default CreateTripPage;
