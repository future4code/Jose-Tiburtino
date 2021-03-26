import connection from "../utilities/connection";

export const createUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<void> => {
  await connection
    .insert({
      id: Date.now(),
      name: name,
      nickname: nickname,
      email: email,
    })
    .into("User");
};
