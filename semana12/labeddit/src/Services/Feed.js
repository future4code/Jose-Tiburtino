import axios from "axios";
import { BASE_URL } from "../Constant/Constant";

export const createPost = (body, update) => {
  axios
    .post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      alert("Post criado.");
      update();
    })
    .catch((error) => {});
};
