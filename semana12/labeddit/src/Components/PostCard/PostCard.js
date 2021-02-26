import React from "react";
import {
  CountContainer,
  VotesContainer,
  ContentContainer,
  PostedContainer,
  PostedText,
  ArrowContainer,
  Deslike,
  Like,
  CardContainer,
  TextContainer,
} from "./styled";
import { IconButton, Typography } from "@material-ui/core";
import { goToDetailsPost } from "../../Router/Coordinator";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../Constant/Constant";
import axios from "axios";

const Post = (props) => {
  const history = useHistory();

  const voteForPost = (decision) => {
    const body = {
      direction: decision,
    };
    axios
      .put(`${BASE_URL}/posts/${props.id}/vote`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        props.getPosts();
      })
      .catch((error) => {});
  };

  const arrowForVote = () => {
    if (props.direction === 0) {
      return (
        <ArrowContainer>
          <IconButton>
            <Like fontSize="inherit" onClick={() => voteForPost(1)} />
          </IconButton>
          <p>
            <b>{props.votesCount}</b>{" "}
          </p>
          <IconButton>
            <Deslike fontSize="inherit" onClick={() => voteForPost(-1)} />
          </IconButton>
        </ArrowContainer>
      );
    } else if (props.direction === 1) {
      return (
        <ArrowContainer>
          <IconButton>
            <Like fontSize="inherit" onClick={() => voteForPost(0)} />
          </IconButton>
          <p>
            <b>{props.votesCount}</b>{" "}
          </p>
          <IconButton>
            <Deslike fontSize="inherit" onClick={() => voteForPost(-1)} />
          </IconButton>
        </ArrowContainer>
      );
    } else {
      return (
        <ArrowContainer>
          <IconButton>
            <Like fontSize="inherit" onClick={() => voteForPost(1)} />
          </IconButton>
          <p>
            <b>{props.votesCount}</b>{" "}
          </p>
          <IconButton>
            <Deslike fontSize="inherit" onClick={() => voteForPost(0)} />
          </IconButton>
        </ArrowContainer>
      );
    }
  };

  return (
    <CardContainer variant="contained">
      <VotesContainer>{arrowForVote()}</VotesContainer>
      <ContentContainer>
        <TextContainer onClick={() => goToDetailsPost(history, props.id)}>
          <Typography color="textSecondary" gutterBottom>
            <PostedContainer>
              <PostedText>
                Postado por u/<b>{props.username}</b>
              </PostedText>
            </PostedContainer>
          </Typography>
          <Typography variant="h5" component="h2">
            <p>
              <b>{props.title}</b>
            </p>
          </Typography>
          <Typography variant="body2" component="p">
            <p>{props.text}</p>
          </Typography>
        </TextContainer>
        <CountContainer onClick={() => goToDetailsPost(history, props.id)}>
          <p>{props.commentsCount} comentários</p>
        </CountContainer>
      </ContentContainer>
    </CardContainer>
  );
};

export default Post;
