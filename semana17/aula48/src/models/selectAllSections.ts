import connection from "../database/connection";
import AllSections from "../types/allSections";

export default async function selectAllSections(
  options: AllSections
): Promise<any> {
  const result = await connection.raw(`
        SELECT * FROM aula48_exercicio WHERE name LIKE "%${
          options.nameSearch
        }%" AND
        type LIKE "%${options.typeSearch}%"
        ORDER BY ${options.orderBy} ${options.orderType}
        LIMIT ${Number(options.perPage)}
        OFFSET ${Number(options.perPage) * (Number(options.pageNumber) - 1)}
    `);
  return result[0];
}
