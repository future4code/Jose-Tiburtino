import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import axios from "axios";
import {
  DivProfiles,
  DivHome,
  ImgProfile,
  DivStatus,
  ProfileName,
  Age,
  Heart,
  HeartAnimation,
  ImgBlur,
  Description,
  ButtonHeart,
  ButtonClose,
  DivChoiceClick,
} from "./HomeStyled";

const Home = (props) => {
  const onClickHeart = () => {
    const body = {
      id: props.profile.id,
      choice: true,
    };

    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jose-victor-epps/choose-person",
        body
      )
      .then((response) => {
        return props.newMatches();
      })
      .catch((error) => {});
  };

  if (props.profile) {
    return (
      <DivProfiles>
        <DivHome>
          <ImgBlur image={props.profile.photo} />
          <ImgProfile src={props.profile.photo} alt={props.profile.name} />
          <DivStatus>
            <ProfileName> {props.profile.name},</ProfileName>
            <Age> {props.profile.age}</Age>
            <Description> {props.profile.bio} </Description>
          </DivStatus>
        </DivHome>
        <DivChoiceClick>
          <ButtonClose onClick={() => onClickHeart(false)}>
            <CloseIcon />
          </ButtonClose>
          <ButtonHeart onClick={() => onClickHeart(true)}>
            <FavoriteIcon />
          </ButtonHeart>
        </DivChoiceClick>
      </DivProfiles>
    );
  }
  return (
    <DivProfiles>
      <DivHome>
        <Heart>
          <h3>Procurando matches...</h3>
          <HeartAnimation />
        </Heart>
      </DivHome>
    </DivProfiles>
  );
};

export default Home;
