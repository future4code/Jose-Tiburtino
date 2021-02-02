import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const ListTripsPage = () => {
  const history = useHistory();
  return (
    <div>
      <Header />
      <h1>Lista de viagems</h1>
      <Footer />
    </div>
  );
};

export default ListTripsPage;
