import React from "react";
import { useHistory } from "react-router-dom";
import {
  ProductAsideContainer,
  TitleAside,
  Button,
} from "../ListTripsPage/ListTripsPagesStyled";
import {
  goToCreateTripsPage,
  goToListTripsPage,
} from "../../Router/Coordinator";

const AsideSection = () => {
  const history = useHistory();

  return (
    <ProductAsideContainer>
      <TitleAside>Menu</TitleAside>
      <Button onClick={() => goToListTripsPage(history)}>
        Gerenciar Viagens
      </Button>
      <Button onClick={() => goToCreateTripsPage(history)}>Criar viagem</Button>
    </ProductAsideContainer>
  );
};

export default AsideSection;
