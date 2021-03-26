import connection from "../connection";

export const editUser = async (
  id: string,
  name: string,
  nickname: string
): Promise<void> => {
  try {
    await connection("User")
      .where("id", id)
      .update({ name: name, nickname: nickname });
  } catch (error) {
    console.log(error);
  }
};
