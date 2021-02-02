import styled from "styled-components";
import PeopleIcon from "@material-ui/icons/People";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";

export const DivAppContainer = styled.div`
  margin: 0;
  padding: 0%;
  background-color: #f2f2f2;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DivApp = styled.div`
  width: 43vh;
  height: 60vh;
  border: 1px solid black;
  border-radius: 5%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  background-color: white;
  display: grid;
  grid-template-rows: 50px 1fr;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    height: 90vh;
    width: 35vh;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 2px solid lightgray;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  background-color: white;
  width: 50px;
  height: 40px;
  cursor: pointer;
`;

export const MatchIcon = styled(PeopleIcon)`
  cursor: pointer;
  color: #762d93;
`;

export const ArrowBack = styled(ArrowBackIcon)`
  cursor: pointer;
  color: #762d93;
`;

export const DeleteMatches = styled(DeleteSweepIcon)`
  cursor: pointer;
  color: #52a99d;
`;
