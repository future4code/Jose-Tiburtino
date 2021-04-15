import * as jwt from "jsonwebtoken";

export type AuthenticationData = {
  id: string;
};

class Authenticator {
  public generateToken = (input: AuthenticationData): string => {
    const token: string = jwt.sign(
      {
        id: input.id,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: process.env.JWT_EXPIRE_TIME,
      }
    );
    return token;
  };

  public getTokenData = (token: string): AuthenticationData => {
    const payload = jwt.verify(
      token,
      process.env.JWT_KEY as string
    ) as AuthenticationData;

    return {
      id: payload.id,
    };
  };
}

export default new Authenticator();
