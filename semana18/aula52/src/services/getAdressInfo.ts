import axios from "axios";
import { addressInfo } from "../types";

const baseUrl = "https://viacep.com.br/ws";

export const getAdressInfo = async (cep: string): Promise<addressInfo> => {
  try {
    const result = await axios.get(`${baseUrl}/${cep}/json`);
    const { logradouro, bairro, localidade, uf } = result.data;
    const addressStatus: addressInfo = {
      street: logradouro,
      neighborhood: bairro,
      city: localidade,
      state: uf,
    };
    return addressStatus;
  } catch (error) {
    throw new Error(error.message);
  }
};
