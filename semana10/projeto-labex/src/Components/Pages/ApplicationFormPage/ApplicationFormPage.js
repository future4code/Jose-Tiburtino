import React from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const FormContainer = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormApplication = styled.form`
  width: 30%;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin: 40px;
  width: 180px;
  margin-left: 34%;
`;

const TextArea = styled.textarea`
  border-radius: 4px;
`;

const ApplicationFormPage = () => {
  const history = useHistory();
  return (
    <div>
      <Header />
      <FormContainer>
        <h1>Formulário de Inscrição</h1>
        <FormApplication>
          <Label for="name">Nome</Label>
          <Input name="name" type="text" required />
          <Label for="age">Idade</Label>
          <Input name="age" type="number" required />
          <Label for="applicationText">Por que deseja ir?</Label>
          <TextArea name="applicationText" required />
          <Label for="profession">Profissão</Label>
          <Input name="profession" type="text" required />
          <Label for="country">País</Label>
          <select name="country" required>
            <option value="Brasil">Brasil</option>
          </select>
          <Button>Enviar</Button>
        </FormApplication>
      </FormContainer>
      <Footer />
    </div>
  );
};

export default ApplicationFormPage;
