import React from "react";
import axios from "axios";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import styled from "styled-components";
import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  MuiThemeProvider,
} from "@material-ui/core";
import { CountryList } from "./CountryList";
import { useForm } from "../../Hooks/useForm";
import { useListTrips } from "../../Hooks/useListTrips";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 88.6vh;
`;

const Title = styled.h1``;

const ApplyForm = styled.form`
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 30vw;
  background-color: white;
  border-radius: 5px;
`;

const ApplicationFormPage = () => {
  const { form, changeState, clearInput } = useForm({
    name: "",
    age: "",
    tripValue: "",
    applicationText: "",
    profession: "",
    country: "",
  });
  const list = useListTrips();

  const sendForm = (event) => {
    event.preventDefault();
    const body = {
      name: form.name,
      age: form.age,
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
      trip: form.tripValue,
    };
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jose-tiburtino-epps/trips/${form.tripValue}/apply`,
        body
      )
      .then((response) => {
        alert(
          ` ${form.name} sua inscrição foi enviada, em alguns dias entraremos em contato com você.`
        );
        clearInput();
      })
      .catch((error) => {
        alert("Erro ao enviar sua inscrição, tente novamente.");
      });
  };

  return (
    <div>
      <Header />
      <MainContainer>
        <Title variant="h3">Formulário de Inscrição</Title>
        <ApplyForm onSubmit={sendForm}>
          <TextField
            label="Nome"
            name="name"
            required
            variant="outlined"
            value={form.name}
            onChange={changeState}
            inputProps={{
              pattern: "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]{3,}",
            }}
          />
          <TextField
            variant="outlined"
            label="Idade"
            name="age"
            type="number"
            required
            value={form.age}
            onChange={changeState}
            inputProps={{ min: "18", step: "1" }}
          />
          <TextField
            multiline
            label="Por que você deseja ir?"
            name="applicationText"
            required
            variant="outlined"
            value={form.applicationText}
            onChange={changeState}
            inputProps={{
              pattern: "[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ,.?! ]{30,}",
            }}
          />
          <TextField
            variant="outlined"
            label="Profissão"
            name="profession"
            required
            value={form.profession}
            onChange={changeState}
          />
          <FormControl variant="outlined">
            <InputLabel>País</InputLabel>
            <Select
              required
              label="País"
              name="country"
              value={form.country}
              onChange={changeState}
            >
              <MenuItem value="Brasil">Brasil</MenuItem>
              {CountryList}
            </Select>
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel>Viagens</InputLabel>
            <Select
              required
              label="Viagem"
              name="tripValue"
              value={form.trip}
              onChange={changeState}
            >
              <MenuItem value="">Selecione uma viagem abaixo.</MenuItem>
              {list.map((trip) => {
                return (
                  <MenuItem value={trip.id}>
                    {trip.name} - {trip.planet}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <MuiThemeProvider>
            <Button type="submit" color="gray" variant="contained">
              Enviar
            </Button>
          </MuiThemeProvider>
        </ApplyForm>
      </MainContainer>
      <Footer />
    </div>
  );
};

export default ApplicationFormPage;
