import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { useListTrips } from "../../Hooks/useListTrips";
import { goToLogin } from "../../Router/Coordinator";
import styled from "styled-components";
import AsideSection from "./AsideSections";
import ContentTrips from "./ContentTrips";

const TripPageContainer = styled.div`
  display: flex;
`;

const ListTripsPage = () => {
  return (
    <div>
      <Header />
      <TripPageContainer>
        <AsideSection />
        <ContentTrips />
      </TripPageContainer>
      <Footer />
    </div>
  );
};

export default ListTripsPage;
