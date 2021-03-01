import axios from "axios";
import { goToFeed } from "../Router/Coordinator";
import { BASE_URL } from "../Constant/Constant";
import swal from "sweetalert";

export const logIn = (body, history, setLoading) => {
  setLoading(true);
  axios
    .post(`${BASE_URL}/login`, body)
    .then((response) => {
      setLoading(false);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.user.username);
      goToFeed(history);
    })
    .catch((error) => {
      setLoading(false);
      swal({
        title: "Os dados estão errados!",
        text: "Tente novamente.",
        icon: "error",
        dangerMode: true,
      });
    });
};

export const signUp = (body, history, setLoading) => {
  setLoading(true);
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((response) => {
      setLoading(false);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.user.username);
      goToFeed(history);
    })
    .catch((error) => {
      setLoading(false);
      swal({
        title: "Os dados foram preenchidos errados!",
        text: "Tente novamente.",
        icon: "error",
        dangerMode: true,
      });
    });
};
