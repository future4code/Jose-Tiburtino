import React from "react";
import CarouselSistem from "./CarouselSistem";
import About from "./About";
import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"

const HomePage = () => {
  return (
    <div>
      <Header />
      <CarouselSistem />
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;
