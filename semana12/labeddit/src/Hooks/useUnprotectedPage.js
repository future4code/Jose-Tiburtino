import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToFeed } from "../Router/Coordinator";

export const useUnprotectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToFeed(history);
    }
  }, [history]);
};
