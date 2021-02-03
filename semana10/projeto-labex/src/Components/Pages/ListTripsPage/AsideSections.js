import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  goToCreateTripsPage,
  goToListTripsPage,
  goToTripDetailsPage,
} from "../../Router/Coordinator";

const ProductAsideContainer = styled.div`
  width: 300px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  background-color: #26272b;
  align-items: center;
`;

const TitleAside = styled.h1`
  margin-top: 40px;
  color: white;
`;

const Button = styled.button`
  width: 200px;
  outline: none;
  margin: 20px 20px 20px 20px;
`;

const AsideSection = () => {
  const history = useHistory();

  return (
    <ProductAsideContainer>
      <TitleAside>Seções</TitleAside>
      <Button onClick={() => goToListTripsPage(history)}>
        Lista de Viagens
      </Button>
      <Button onClick={() => goToCreateTripsPage(history)}>Criar viagem</Button>
      <Button onClick={() => goToTripDetailsPage(history)}>
        Detalhes das viagens
      </Button>
    </ProductAsideContainer>
  );
};

export default AsideSection;
