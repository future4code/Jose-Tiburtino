import styled from "styled-components";
import { CardContent, Card } from "@material-ui/core";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export const UserThings = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.1em;
  padding-bottom: 0.2em;
`;

export const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  max-width: 600px;
  background-color: white;
  border: 1px solid #d7d7d7;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  &:hover {
    border: 1px solid #a7a9ab;
  }
`;

export const ContentContainer = styled(CardContent)`
  display: flex;
  flex-direction: column;
  margin: 1em;
  width: 100%;
`;

export const Deslike = styled(ArrowDownward)`
  color: red;
`;

export const Like = styled(ArrowUpward)`
  color: green;
`;

export const TextContainer = styled.div`
  cursor: pointer;
  &:hover {
    background-color: lightgrey;
  }
`;

export const VotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  padding: 0.2em;
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 7px;
`;

export const Heading = styled.div`

`

export const Text = styled.div``