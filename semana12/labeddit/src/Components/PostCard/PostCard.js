import React from "react";
import { useHistory } from "react-router-dom";
import {
  PostContainer,
  CountContainer,
  VotesContainer,
  ClickContainer,
  PostedContainer,
  PostedText,
} from "./styled";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { IconButton, Card, Typography } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";

const Post = (props) => {
  const history = useHistory();

  return (
    <PostContainer>
      <Card variant="contained">
        <ClickContainer>
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
        </ClickContainer>
        <CountContainer>
          <VotesContainer>
            <IconButton>
              {props.direction === 1 ? (
                <ArrowUpward fontSize="inherit" style={{ color: green[500] }} />
              ) : (
                <ArrowUpward fontSize="inherit" color="inherit" />
              )}
            </IconButton>
            <p>
              <b>{props.votesCount}</b>
            </p>
            <IconButton>
              {props.direction === -1 ? (
                <ArrowDownward fontSize="inherit" style={{ color: red[500] }} />
              ) : (
                <ArrowDownward fontSize="inherit" color="inherit" />
              )}
            </IconButton>
          </VotesContainer>
          <p>{props.commentsCount} comentários</p>
        </CountContainer>
      </Card>
    </PostContainer>
  );
};

export default Post;
