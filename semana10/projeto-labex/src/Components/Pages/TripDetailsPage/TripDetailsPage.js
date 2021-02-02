import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { useHistory } from "react-router-dom";

const TripDetailsPage = () => {
  const history = useHistory();

  return (
    <div>
      <Header />
      <h1>Detalhes das viagens</h1>
      <Footer />
    </div>
  );
};

export default TripDetailsPage;
