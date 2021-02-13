import styled from "styled-components";

export const CreateTripContainer = styled.div`
  display: flex;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 25%;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    margin-left: 0%;
  }
`;

export const Title = styled.h1`
  margin-top: 50px;
`;

export const CreateTripForm = styled.form`
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 30vw;
  background-color: white;
  border-radius: 5px;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 100%;
  }
`;