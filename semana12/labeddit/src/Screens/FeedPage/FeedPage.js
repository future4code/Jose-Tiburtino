import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import PostCard from "../../Components/PostCard/PostCard";
import useForm from "../../Hooks/useForm";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import {
  BackToTop,
  FeedContainer,
  FeedPageContainer,
  NewPostContainer,
} from "./styled";
import {
  Button,
  TextField,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import { BASE_URL } from "../../Constant/Constant";
import Loading from "../../Components/Loading/Loading";
import { createPost } from "../../Services/Feed";
import { useHistory } from "react-router-dom";

const FeedPage = () => {
  useProtectedPage();
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchContent, setSearchContent] = useState("");
  const { form, changeState, clearInput } = useForm({ text: "", title: "" });

  useEffect(() => {
    setInterval(updatePage, 60000);
    getPosts();
    goTop();
  }, []);

  const getPosts = () => {
    axios
      .get(`${BASE_URL}/posts`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setPosts(response.data.posts);
      })
      .catch((error) => {});
  };

  const handleCreatePost = (event) => {
    event.preventDefault();
    createPost(form, history);
    clearInput();
  };

  const searchFilter = (e) => {
    const searchArray = posts.filter((post) => {
      const title = post.title.toLowerCase();
      const text = post.text.toLowerCase();
      const username = post.username.toLowerCase();
      return (
        title.includes(e.target.value.toLowerCase()) ||
        text.includes(e.target.value.toLowerCase()) ||
        username.includes(e.target.value.toLowerCase())
      );
    });
    setFilteredPosts(searchArray);
    setSearchContent(e.target.value);
  };

  let myButton = document.getElementById("back-to-top");
  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (posts.length > 0) {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        myButton.style.display = "block";
      } else {
        myButton.style.display = "none";
      }
    }
  };

  const goTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const updatePage = () => {
    getPosts();
  };

  return (
    <div>
      <Header handleSearch={searchFilter} />
      <FeedPageContainer>
        <NewPostContainer onSubmit={handleCreatePost}>
          <h3>Crie seu post.</h3>
          <TextField
            name="title"
            value={form.title}
            label="Título"
            variant="outlined"
            color="primary"
            required
            onChange={changeState}
            placeholder="Escreva seu título"
          />
          <TextField
            name="text"
            value={form.text}
            label="Texto"
            variant="outlined"
            color="primary"
            multiline
            required
            onChange={changeState}
            placeholder="Escreva seu texto"
          />
          <Button type="submit" variant="contained" color="primary">
            Postar
          </Button>
        </NewPostContainer>
        <FeedContainer>
          {posts.length === 0 ? (
            <Loading>
              <Typography variant="h5" color="primary">
                Carregando...
              </Typography>
              <CircularProgress />
            </Loading>
          ) : searchContent === "" ? (
            posts
              .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
              .map((post) => {
                return (
                  <PostCard
                    key={post.id}
                    username={post.username}
                    text={post.text}
                    votesCount={post.votesCount}
                    commentsCount={post.commentsCount}
                    createdAt={post.createdAt}
                    id={post.id}
                    title={post.title}
                    direction={post.userVoteDirection}
                    getPosts={getPosts}
                  />
                );
              })
          ) : (
            <div>
              {filteredPosts
                .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
                .map((post) => {
                  return (
                    <PostCard
                      key={post.id}
                      username={post.username}
                      text={post.text}
                      votesCount={post.votesCount}
                      commentsCount={post.commentsCount}
                      createdAt={post.createdAt}
                      id={post.id}
                      title={post.title}
                      direction={post.userVoteDirection}
                      getPosts={getPosts}
                    />
                  );
                })}
            </div>
          )}
        </FeedContainer>
        <BackToTop
          onClick={goTop}
          id="back-to-top"
          style={{ backgroundColor: "#e5004d" }}
        >
          Voltar ao topo
        </BackToTop>
      </FeedPageContainer>
    </div>
  );
};

export default FeedPage;
