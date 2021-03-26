import connection from "../connection";

const getActorById = async (id: string): Promise<void> => {
  try {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `);
    return result[0][0];
  } catch (error) {
    throw new Error(error.message);
  }
};

const getActorByName = async (name: string): Promise<void> => {
  try {
    const result = await connection.raw(
      `SELECT * FROM Actor WHERE name LIKE "%${name}%"`
    );
    return result[0][0];
  } catch (error) {
    throw new Error(error.message);
  }
};

const countActors = async (gender: string): Promise<void> => {
  try {
    const result = await connection.raw(`
      SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"  
    `);
    const count = result[0][0].count;
    return count;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getActorById, getActorByName, countActors };
