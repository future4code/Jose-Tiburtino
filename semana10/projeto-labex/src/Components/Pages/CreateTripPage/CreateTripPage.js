import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import styled from "styled-components";

const CreateTripContainer = styled.div``;

const CreateTripPage = () => {
  const history = useHistory();

  return (
    <CreateTripContainer>
      <Header />
      <h1>Criar viagem</h1>
      <Footer />
    </CreateTripContainer>
  );
};

export default CreateTripPage;
