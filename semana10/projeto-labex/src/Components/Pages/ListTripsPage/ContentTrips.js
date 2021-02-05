import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useListTrips } from "../../Hooks/useListTrips";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import {
  Title,
  DivTrips,
  CardTrip,
  ImageTrip,
  Image,
  Description,
  ButtonDetails,
  DeleteItem,
} from "../ListTripsPage/ListTripsPagesStyled";

const ContentTrips = () => {
  const history = useHistory();
  const list = useListTrips();
  useProtectedPage();

  const deleteTrip = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jose-tiburtino-epps/trips/${id}`
      )
      .then((response) => {
        alert("Viagem deletada.");
      })
      .catch((error) => {
        alert("Erro ao deletar, tente novamente!");
      });
  };

  return (
    <div>
      <Title>Gerenciamento de Viagens</Title>
      <DivTrips lines={Math.ceil(list.length / 4)}>
        {list.map((trip) => {
          const urlImage = `https://picsum.photos/300/200`;
          return (
            <CardTrip key={trip.id}>
              <ImageTrip>
                <Image src={urlImage} />
              </ImageTrip>
              <Description>
                <h3>{trip.name}</h3>
                <p>{trip.description}</p>
                <p>
                  <strong>Planeta: </strong>
                  {trip.planet}
                </p>
                <p>
                  <strong>Duração: </strong>
                  {trip.durationInDays}
                </p>
                <p>
                  <strong>Data:</strong> {trip.date}
                </p>
                <ButtonDetails
                  onClick={() => history.push(`/trips/details/${trip.id}`)}
                >
                  DETALHES
                </ButtonDetails>
                <DeleteItem onClick={() => deleteTrip(trip.id)}></DeleteItem>
              </Description>
            </CardTrip>
          );
        })}
      </DivTrips>
    </div>
  );
};

export default ContentTrips;
