import React from "react";
import {
  VotesContainer,
  ContentContainer,
  PostedContainer,
  UserThings,
  ArrowContainer,
  Deslike,
  Like,
  CardContainer,
  TextContainer,
  Heading,
  Text,
} from "./styled";
import { voteForComment } from "../../Services/Feed";
import { IconButton, Typography } from "@material-ui/core";

const CommentCard = (props) => {
  const handleVoteComment = (decision) => {
    const body = {
      direction: decision,
    };
    voteForComment(body, props.postId, props.commentId);
  };

  const arrowForVoteComment = () => {
    if (props.direction === 0) {
      return (
        <ArrowContainer>
          <IconButton>
            <Like fontSize="inherit" onClick={() => handleVoteComment(1)} />
          </IconButton>
          <p>
            <b>{props.votesCount}</b>{" "}
          </p>
          <IconButton>
            <Deslike fontSize="inherit" onClick={() => handleVoteComment(-1)} />
          </IconButton>
        </ArrowContainer>
      );
    } else if (props.direction === 1) {
      return (
        <ArrowContainer>
          <IconButton>
            <Like fontSize="inherit" onClick={() => handleVoteComment(0)} />
          </IconButton>
          <p>
            <b>{props.votesCount}</b>{" "}
          </p>
          <IconButton>
            <Deslike fontSize="inherit" onClick={() => handleVoteComment(-1)} />
          </IconButton>
        </ArrowContainer>
      );
    } else {
      return (
        <ArrowContainer>
          <IconButton>
            <Like fontSize="inherit" onClick={() => handleVoteComment(1)} />
          </IconButton>
          <p>
            <b>{props.votesCount}</b>{" "}
          </p>
          <IconButton>
            <Deslike fontSize="inherit" onClick={() => handleVoteComment(0)} />
          </IconButton>
        </ArrowContainer>
      );
    }
  };

  return (
    <CardContainer variant="contained">
      <VotesContainer>{arrowForVoteComment()}</VotesContainer>
      <ContentContainer>
        <TextContainer>
          <UserThings>
            <Heading size="xs" pl="0.4em">
              u/{props.username}
            </Heading>
          </UserThings>
          <Text>{props.text}</Text>
        </TextContainer>
      </ContentContainer>
    </CardContainer>
  );
};

export default CommentCard;
