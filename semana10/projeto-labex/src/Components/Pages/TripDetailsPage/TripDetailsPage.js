import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import {
  DivContent,
  DivToFix,
  DivCandidates,
  ItemCandidate,
  ListCandidates,
  Icons,
  Approved,
  Declined,
  ButtonCand,
} from "./TripDetailsPageStyled";
import AsideSection from "../ListTripsPage/AsideSections";
import { goToListTripsPage } from "../../Router/Coordinator";

const TripDetailsPage = () => {
  const history = useHistory();
  const pathParams = useParams();
  const [trip, setTrip] = useState("");
  const [showCandidate, setShowCandidate] = useState(false);
  const [candidatesList, setCandidatesList] = useState(undefined);
  const [filterCandidates, setFilterCandidates] = useState("aguardando");
  const [candDetails, setCandDetails] = useState(undefined);

  const tripDetails = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jose-tiburtino-epps/trip/${pathParams.idtrip}`,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        setTrip(response.data.trip);
        setCandidatesList(response.data.trip.candidates);
      })
      .catch((error) => {
        console.log("Erro, tripdetails", error);
      });
  };

  useEffect(() => {
    tripDetails();
  }, []);

  const decideCandidates = (approved, idCandidate) => {
    const body = {
      approve: approved,
    };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/jose-tiburtino-epps/trips/${pathParams.idtrip}/candidates/${idCandidate}/decide`,
        body,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        tripDetails();
      })
      .catch((error) => {
        alert("Erro pra aprovar ou reprovar.");
      });
  };

  const handleFilter = (event) => {
    setFilterCandidates(event.target.value);
    event.target.value === "aprovados"
      ? setCandidatesList(trip.approved)
      : setCandidatesList(trip.candidates);
  };

  const detailsCandidate = (id) => {
    const cand = candidatesList.find((candidate) => candidate.id === id);
    setCandDetails(cand);
    setShowCandidate(true);
  };

  return (
    trip && (
      <div>
        <Header />
        <DivContent>
          <AsideSection />
          <DivToFix>
            <h2>{trip.name}</h2>
            <h3>Data: {trip.date}</h3>
            {!showCandidate && candidatesList && (
              <>
                <h3>Candidatos: </h3>
                <label for="filtro" />
                <select
                  name="filtro"
                  value={filterCandidates}
                  onChange={handleFilter}
                >
                  <option value="aguardando">Aguardando</option>
                  <option value="aprovados">Aprovados</option>
                </select>
                <p>Clique no nome para visualizar os detalhes do inscrito.</p>
                <DivCandidates>
                  {candidatesList.map((candidate) => {
                    return (
                      <ListCandidates>
                        <ItemCandidate
                          key={candidate.id}
                          onClick={() => {
                            detailsCandidate(candidate.id);
                          }}
                        >
                          <p>{candidate.name}</p>
                        </ItemCandidate>
                        <Icons mostrar={filterCandidates}>
                          <Approved
                            onClick={() => {
                              decideCandidates(true, candidate.id);
                            }}
                          />
                          <Declined
                            onClick={() => {
                              decideCandidates(false, candidate.id);
                            }}
                          />
                        </Icons>
                      </ListCandidates>
                    );
                  })}
                </DivCandidates>
                <ButtonCand
                  onClick={() => {
                    goToListTripsPage(history);
                  }}
                >
                  Voltar para lista de viagens
                </ButtonCand>
              </>
            )}
            {candDetails && (
              <>
                <DivCandidates>
                  <p>
                    <strong>Nome: </strong>
                    {candDetails.name}
                  </p>
                  <p>
                    <strong>Idade: </strong>
                    {candDetails.age} anos
                  </p>
                  <p>
                    <strong>Motivo:</strong>: {candDetails.applicationText}
                  </p>
                  <p>
                    <strong>Profissão:</strong> {candDetails.profession}
                  </p>
                  <p>
                    <strong>País:</strong> {candDetails.country}
                  </p>
                </DivCandidates>
                <ButtonCand
                  onClick={() => {
                    setCandDetails(undefined);
                    setShowCandidate(false);
                  }}
                >
                  Voltar para detalhes da viagem
                </ButtonCand>
              </>
            )}
          </DivToFix>
        </DivContent>
        <Footer />
      </div>
    )
  );
};

export default TripDetailsPage;
