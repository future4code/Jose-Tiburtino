import React from "react";
import {
  VotesContainer,
  ContentContainer,
  UserThings,
  ArrowContainer,
  Deslike,
  Like,
  CardContainer,
  TextContainer,
  Text,
  PostedText,
} from "./styled";
import { IconButton } from "@material-ui/core";
import { BASE_URL } from "../../Constant/Constant";
import axios from "axios";

const CommentCard = (props) => {
  const voteForComment = (decision) => {
    const body = {
      direction: decision,
    };
    axios
      .put(`${BASE_URL}/posts/${props.postId}/comment/${props.id}/vote`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        props.getPostDetails();
      })
      .catch((error) => {
        alert("Erro ao votar no comentário");
      });
  };

  const arrowForVoteComment = () => {
    if (props.direction === 0) {
      return (
        <ArrowContainer>
          <IconButton>
            <Like fontSize="inherit" onClick={() => voteForComment(1)} />
          </IconButton>
          <p>
            <b>{props.votesCount}</b>{" "}
          </p>
          <IconButton>
            <Deslike fontSize="inherit" onClick={() => voteForComment(-1)} />
          </IconButton>
        </ArrowContainer>
      );
    } else if (props.direction === 1) {
      return (
        <ArrowContainer>
          <IconButton>
            <Like fontSize="inherit" onClick={() => voteForComment(0)} />
          </IconButton>
          <p>
            <b>{props.votesCount}</b>{" "}
          </p>
          <IconButton>
            <Deslike fontSize="inherit" onClick={() => voteForComment(-1)} />
          </IconButton>
        </ArrowContainer>
      );
    } else {
      return (
        <ArrowContainer>
          <IconButton>
            <Like fontSize="inherit" onClick={() => voteForComment(1)} />
          </IconButton>
          <p>
            <b>{props.votesCount}</b>{" "}
          </p>
          <IconButton>
            <Deslike fontSize="inherit" onClick={() => voteForComment(0)} />
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
            <PostedText>
              Comentado por u/<b>{props.username}</b>
            </PostedText>
          </UserThings>
          <Text>{props.text}</Text>
        </TextContainer>
      </ContentContainer>
    </CardContainer>
  );
};

export default CommentCard;
