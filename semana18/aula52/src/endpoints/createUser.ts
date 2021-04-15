import { Request, Response } from "express";
import { insertCep } from "../data/insertCEP";
import { insertUser } from "../data/insertUser";
import { generateToken } from "../services/auth";
import { generateId } from "../services/generateId";
import { getAdressInfo } from "../services/getAdressInfo";
import { hash } from "../services/hashManager";
import { newUser, userAdress } from "../types";

export const createUser = async (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { email, password, role, cep, addressNumber, complement } = req.body;
    if (!cep || !addressNumber || !complement) {
      errorCode = 422;
      throw new Error("Informe um endereço!");
    }
    if (!email || email.indexOf("@") === -1) {
      throw new Error("Email inválido!");
    }
    if (!password || password.length < 6) {
      throw new Error("Senha inválida!");
    }
    const hashPassword: string = await hash(password);
    const id = generateId();
    const addressId = generateId();
    const newUser: newUser = {
      id: id,
      email: email,
      password: hashPassword,
      role: role || "NORMAL",
    };
    const addressInfos = await getAdressInfo(cep as string);
    const newAddress: userAdress = {
      id: addressId,
      street: addressInfos.street,
      number: addressNumber,
      neighborhood: addressInfos.neighborhood,
      complement: complement,
      city: addressInfos.city,
      state: addressInfos.state,
      user_id: id,
    };
    await insertUser(newUser);
    await insertCep(newAddress);
    const token = generateToken({ id, role });
    res.status(200).send({ token });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
