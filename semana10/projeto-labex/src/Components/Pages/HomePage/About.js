import React from "react";
import {
  Title,
  DivTrips,
  CardTrip,
  ImageTrip,
  Image,
  Description,
  ButtonDetails,
  FixButton,
} from "./HomePageStyled";
import { useHistory } from "react-router-dom";
import { useListTrips } from "../../Hooks/useListTrips";
import { goToApplicationFormPage } from "../../Router/Coordinator";

const About = () => {
  const history = useHistory();
  const list = useListTrips();

  return (
    <div>
      <Title>Viagens Disponíveis</Title>
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
                <FixButton>
                  <ButtonDetails
                    onClick={() => goToApplicationFormPage(history)}
                  >
                    APLICAR
                  </ButtonDetails>
                </FixButton>
              </Description>
            </CardTrip>
          );
        })}
      </DivTrips>
    </div>
  );
};

export default About;
