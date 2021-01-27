import React from "react";
import styled from "styled-components";

const DivForMatches = styled.div``;

const DivMatchesList = styled.div``;

const Img = styled.img`
  height: 50px;
  width: 50px;
`;

const Name = styled.p``;

const Matches = (props) => {
  return (
    <DivForMatches>
      {props.matchesList && props.matchesList.map((profile) => {
        return (
          <DivMatchesList>
            <Img src={profile.photo} />
            <Name>{profile.name}</Name>
          </DivMatchesList>
        );
      })}
    </DivForMatches>
  );
};

export default Matches;
