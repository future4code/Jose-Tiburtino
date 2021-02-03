import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { useListTrips } from "../../Hooks/useListTrips";
import { goToLogin } from "../../Router/Coordinator";
import styled from "styled-components";
import { useProtectedPage } from "../../Hooks/useProtectedPage";

const DivTrips = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  column-gap: 15px;
  justify-content: center;
  padding: 15px;
`;

const CardTrip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

const ImageTrip = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img``;

const Description = styled.div`
  width: 100%;
  padding: 0 10px;
  text-align: left;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentTrips = () => {
  const history = useHistory();
  const list = useListTrips();
  useProtectedPage();

  return (
    <div>
      <Title>Lista de viagens</Title>
      <DivTrips>
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
              </Description>
            </CardTrip>
          );
        })}
      </DivTrips>
    </div>
  );
};

export default ContentTrips;
