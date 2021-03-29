import connection from "../database/connection";

export default async function selectUserType(type: string): Promise<any> {
  try {
    const result = await connection.raw(`
        SELECT * FROM aula48_exercicio WHERE type LIKE "${type}%"
    `);
    return result[0];
  } catch (error) {
    console.log(error);
  }
}
