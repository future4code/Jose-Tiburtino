import { useState, useEffect } from "react";
import axios from "axios";

export const useListTrips = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/jose-tiburtino-epps/trips"
      )
      .then((response) => {
        setList(response.data.trips);
      })
      .catch((error) => alert("Erro", error));
  }, [setList]);

  return list;
};
