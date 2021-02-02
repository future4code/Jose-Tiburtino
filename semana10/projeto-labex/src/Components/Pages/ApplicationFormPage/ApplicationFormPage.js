import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const FormContainer = styled.div``;

const ApplicationFormPage = () => {
  const history = useHistory();
  return (
    <FormContainer>
      <Header />
      <h1>Formulário em construção.</h1>
      <Footer />
    </FormContainer>
  );
};

export default ApplicationFormPage;
