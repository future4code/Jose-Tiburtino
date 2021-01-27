import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import axios from "axios";
import {
  DivProfiles,
  DivHome,
  Img,
  DivStatus,
  ProfileName,
  Age,
  Description,
  Button,
  DivChoiceClick,
} from "./HomeStyled";

const Home = (props) => {
  const onClickHeart = (like) => {
    const body = {
      id: props.profile.id,
      choice: like,
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jose-victor-epps/choose-person",
        body
      )
      .then((response) => {
        return props.newMatches();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <DivProfiles>
      <DivHome>
        <Img src={props.profile.photo} alt={props.profile.name} />
        <DivStatus>
          <ProfileName>{props.profile.name},</ProfileName>
          <Age>{props.profile.age}</Age>
          <Description>{props.profile.bio}</Description>
        </DivStatus>
      </DivHome>
      <DivChoiceClick>
        <Button onClick={() => onClickHeart(false)}>
          <CloseIcon />
        </Button>
        <Button onClick={() => onClickHeart(true)}>
          <FavoriteIcon />
        </Button>
      </DivChoiceClick>
    </DivProfiles>
  );
};

export default Home;
