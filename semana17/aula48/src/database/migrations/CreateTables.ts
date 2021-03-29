import connection from "../connection";

const createTables = async (): Promise<void> => {
  try {
    await connection.raw(`
        CREATE TABLE aula48_exercicio(
            id INT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            type VARCHAR(255) NOT NULL
            );
            
        `);
    console.log("Tabelas criadas com sucesso!");
    connection.destroy();
  } catch (error) {
    throw new Error(error.message);
  }
};
createTables();
