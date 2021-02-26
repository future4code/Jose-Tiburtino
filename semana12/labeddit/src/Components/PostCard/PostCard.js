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
import { voteForPost } from "../../Services/Feed";
import { goToDetailsPost } from "../../Router/Coordinator";
import { useHistory } from "react-router-dom";

const Post = (props) => {
  const history = useHistory();
  const handleVotePost = (decision) => {
    const body = {
      direction: decision,
    };
    voteForPost(body, props.id);
  };

  const arrowForVote = () => {
    if (props.direction === 0) {
      return (
        <ArrowContainer>
          <IconButton>
            <Like fontSize="inherit" onClick={() => handleVotePost(1)} />
          </IconButton>
          <p>
            <b>{props.votesCount}</b>{" "}
          </p>
          <IconButton>
            <Deslike fontSize="inherit" onClick={() => handleVotePost(-1)} />
          </IconButton>
        </ArrowContainer>
      );
    } else if (props.direction === 1) {
      return (
        <ArrowContainer>
          <IconButton>
            <Like fontSize="inherit" onClick={() => handleVotePost(0)} />
          </IconButton>
          <p>
            <b>{props.votesCount}</b>{" "}
          </p>
          <IconButton>
            <Deslike fontSize="inherit" onClick={() => handleVotePost(-1)} />
          </IconButton>
        </ArrowContainer>
      );
    } else {
      return (
        <ArrowContainer>
          <IconButton>
            <Like fontSize="inherit" onClick={() => handleVotePost(1)} />
          </IconButton>
          <p>
            <b>{props.votesCount}</b>{" "}
          </p>
          <IconButton>
            <Deslike fontSize="inherit" onClick={() => handleVotePost(0)} />
          </IconButton>
        </ArrowContainer>
      );
    }
  };

  return (
    <CardContainer variant="contained">
      <VotesContainer>{arrowForVote()}</VotesContainer>
      <ContentContainer>
        <TextContainer onClick={() => goToDetailsPost(history,props.id)}>
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
        <CountContainer>
          <p>{props.commentsCount} comentários</p>
        </CountContainer>
      </ContentContainer>
    </CardContainer>
  );
};

export default Post;
