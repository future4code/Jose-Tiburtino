import connection from "../utilities/connection";

export const createUser = async (
  name: string,
  nickname: string,
  email: string
): Promise<void> => {
  try {
    await connection
      .insert({
        id: Date.now(),
        name: name,
        nickname: nickname,
        email: email,
      })
      .into("User");
  } catch (error) {
    console.log(error);
  }
};
