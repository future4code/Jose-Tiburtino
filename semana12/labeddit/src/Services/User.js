import axios from "axios";
import { goToFeed } from "../Router/Coordinator";
import { BASE_URL } from "../Constant/Constant";

export const logIn = (body, history, setLoading) => {
  setLoading(true);
  axios
    .post(`${BASE_URL}/login`, body)
    .then((response) => {
      setLoading(false);
      localStorage.setItem("token", response.data.token);
      goToFeed(history);
    })
    .catch((error) => {
      setLoading(false);
      alert("Informações incorretas, digite novamente.");
    });
};

export const signUp = (body, history, setLoading) => {
  setLoading(true);
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((response) => {
      setLoading(false);
      localStorage.setItem("token", response.data.token);
      goToFeed(history);
    })
    .catch((error) => {
      setLoading(false);
      alert("E-mail já foi utilizado, crie novamente.");
    });
};
