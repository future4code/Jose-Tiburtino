import connection from "../database/connection";

export default async function selectFiveUsers(
  pageNumber: number
): Promise<any> {
  const result = await connection.raw(`
  SELECT *
  FROM aula48_exercicio
  LIMIT 5
  OFFSET ${5 * (pageNumber - 1)};
  `);
  return result[0];
}
