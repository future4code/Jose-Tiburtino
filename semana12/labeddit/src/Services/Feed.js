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
    .catch((error) => {
      console.log(error);
    });
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
    .catch((error) => {
      console.log(error);
    });
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
    .catch((error) => {});
};

export const createComment = (body, postId) => {
  axios
    .post(`${BASE_URL}/posts/${postId}/comment`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      alert("comentário criado, legal");
    })
    .catch((error) => {
      console.log(error);
      alert("Erro ao criar comentário");
    });
};

export const voteForComment = (body, postId, commentId) => {
  axios
    .put(`${BASE_URL}/posts/${postId}/comment/${commentId}/vote`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((response) => {})
    .catch((error) => {
      alert("Erro ao votar no comentário");
    });
};
