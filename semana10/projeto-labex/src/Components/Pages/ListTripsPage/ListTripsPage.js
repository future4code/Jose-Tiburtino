import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import {TripPageContainer} from "../ListTripsPage/ListTripsPagesStyled"
import AsideSection from "./AsideSections";
import ContentTrips from "./ContentTrips";

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
