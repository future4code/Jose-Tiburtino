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
  H3,
  SpacingBox,
} from "./styled";
import {
  Button,
  TextField,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import Loading from "../../Components/Loading/Loading";
import axios from "axios";
import { BASE_URL } from "../../Constant/Constant";
import swal from "sweetalert";

const FeedPage = () => {
  useProtectedPage();
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchContent, setSearchContent] = useState("");
  const { form, changeState, clearInput } = useForm({ text: "", title: "" });

  useEffect(() => {
    setInterval(updatePage, 200000);
    getPosts();
  }, []);

  const getPosts = () => {
    axios
      .get(`${BASE_URL}/posts`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log(response);
        setPosts(response.data.posts);
      })
      .catch((error) => {});
  };

  const createPost = (event) => {
    event.preventDefault();
    const body = {
      text: form.text,
      title: form.title,
    };
    axios
      .post(`${BASE_URL}/posts`, body, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        swal({
          title: "O post foi criado!",
          text: "Visualize ele no feed.",
          icon: "success",
        });
        getPosts();
        clearInput();
      })
      .catch((error) => {
        alert("Erro ao criar o post, tente novamente.");
      });
  };

  const searchFilter = (event) => {
    const searchArray = posts.filter((post) => {
      const title = post.title.toLowerCase();
      const text = post.text.toLowerCase();
      const username = post.username.toLowerCase();
      return (
        title.includes(event.target.value.toLowerCase()) ||
        text.includes(event.target.value.toLowerCase()) ||
        username.includes(event.target.value.toLowerCase())
      );
    });
    setFilteredPosts(searchArray);
    setSearchContent(event.target.value);
  };

  let myButton = document.getElementById("back-to-top");
  window.onscroll = () => {
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
        <NewPostContainer onSubmit={createPost}>
          <H3>CRIE SEU POST</H3>
          <SpacingBox>
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
          </SpacingBox>
          <SpacingBox>
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
          </SpacingBox>
          <SpacingBox>
            <Button type="submit" variant="contained" color="primary">
              Postar
            </Button>
          </SpacingBox>
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
