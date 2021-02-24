import axios from "axios";
import { BASE_URL } from "../Constant/Constant";

export const getPosts = (setPosts) => {
  setPosts([]);
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

export const createPost = (body) => {
  axios
    .post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      alert("Post criado.");
      getPosts();
    })
    .catch((error) => {});
};

export const voteForPost = (body, postId) => {
  axios
    .put(`${BASE_URL}/posts/${postId}/vote`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      getPosts();
    })
    .catch((error) => {
      console.log(error);
    });
};
