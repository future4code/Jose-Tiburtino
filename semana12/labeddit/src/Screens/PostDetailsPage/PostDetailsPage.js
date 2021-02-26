import {
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Loading from "../../Components/Loading/Loading";
import { BASE_URL } from "../../Constant/Constant";
import useForm from "../../Hooks/useForm";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import CommentCard from "../../Components/CommentCard/CommentCard";
import {
  PostDetailsPageContainer,
  PostComment,
  CommentsSection,
} from "./styled";
import PostCard from "../../Components/PostCard/PostCard";
import { createComment } from "../../Services/Feed";

const PostDetailsPage = (props) => {
  useProtectedPage();
  const params = useParams();
  const [postDetails, setPostDetails] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchContent, setSearchContent] = useState("");
  const { form, changeState, clearInput } = useForm({ text: "", title: "" });

  useEffect(() => {
    getPostDetails();
  }, []);

  const getPostDetails = () => {
    axios
      .get(`${BASE_URL}/posts/${params.id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setPostDetails(response.data.post);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmissionComment = (event) => {
    event.preventDefault();
    createComment(form, postDetails.id);
    clearInput();
  };

  const voteSearchFilter = (event) => {
    const searchArray = postDetails.comments.filter((post) => {
      const text = post.text.toLowerCase();
      const username = post.username.toLowerCase();
      return (
        text.includes(event.target.value.toLowerCase()) ||
        username.includes(event.target.value.toLowerCase())
      );
    });
    setFilteredPosts(searchArray);
    setSearchContent(event.target.value);
  };

  return (
    <div>
      <Header />
      <PostDetailsPageContainer>
        <PostCard
          key={postDetails.id}
          username={postDetails.username}
          text={postDetails.text}
          title={postDetails.title}
          votesCount={postDetails.votesCount}
          commentsCount={postDetails.commentsCount}
          createdAt={postDetails.createdAt}
          id={postDetails.id}
          title={postDetails.title}
          direction={postDetails.userVoteDirection}
          getPostsDetails={getPostDetails}
        />
        <PostComment onSubmit={handleSubmissionComment}>
          <TextField
            name="text"
            value={form.text}
            label="Comentário"
            variant="outlined"
            color="primary"
            multiline
            required
            onChange={changeState}
            placeholder="Escreva seu comentário."
          />
          <Button type="submit" variant="contained" color="primary">
            {" "}
            Enviar comentário
          </Button>
        </PostComment>
        <CommentsSection>
          {postDetails.length === 0 ? (
            <Loading>
              <Typography variant="h5" color="primary">
                Carregando...
              </Typography>
              <CircularProgress />
            </Loading>
          ) : searchContent === "" ? (
            postDetails.comments
              .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
              .map((post) => {
                console.log(post);
                return (
                  <CommentCard
                    key={post.id}
                    username={post.username}
                    text={post.text}
                    votesCount={post.votesCount}
                    createdAt={post.createdAt}
                    id={post.id}
                    commentId={post.id}
                    postId={params.id}
                    direction={post.userVoteDirection}
                    getPostDetails={getPostDetails}
                  />
                );
              })
          ) : (
            <div>
              {filteredPosts
                .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
                .map((post) => {
                  return (
                    <CommentCard
                      key={post.id}
                      username={post.username}
                      text={post.text}
                      votesCount={post.votesCount}
                      createdAt={post.createdAt}
                      id={post.id}
                      postId={params.id}
                      direction={post.userVoteDirection}
                      getPostDetails={getPostDetails}
                      voteOnSearch={voteSearchFilter}
                    />
                  );
                })}
            </div>
          )}
        </CommentsSection>
      </PostDetailsPageContainer>
    </div>
  );
};

export default PostDetailsPage;
