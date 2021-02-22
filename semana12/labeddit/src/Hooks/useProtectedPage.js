import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const useProtectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      history.push("/");
      window.alert("Entre com seu e-mail e senha!");
    }
  }, [history]);
};

export default useProtectedPage