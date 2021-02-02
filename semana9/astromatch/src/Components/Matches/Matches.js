import React from "react";
import { DivForMatches, DivMatchesList, Img, H2 } from "./MatchesStyled";

const Matches = (props) => {
  return (
    <DivForMatches>
      <H2>Seus matches:</H2>
      {props.matchesList &&
        props.matchesList.map((profile) => {
          return (
            <DivMatchesList>
              <Img src={profile.photo} />
              <p>{profile.name}</p>
            </DivMatchesList>
          );
        })}
    </DivForMatches>
  );
};

export default Matches;
