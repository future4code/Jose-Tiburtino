import connection from "../connection";

const createTables = async (): Promise<void> => {
  try {
    await connection.raw(`
        CREATE TABLE Users_Cookenu (
            id VARCHAR(255) UNIQUE NOT NULL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            role ENUM("Normal", "Admin") DEFAULT("Normal")
        );
        
        CREATE TABLE Recipes_Cookenu (
            id VARCHAR(255) UNIQUE NOT NULL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT,
            created_at DATE NOT NULL,
            userCreator_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (userCreator_id) REFERENCES Users_Cookenu(id)
        );
        
        CREATE TABLE Following (
            follower_id VARCHAR(255) NOT NULL,
            following_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (follower_id) REFERENCES Users_Cookenu(id),
            FOREIGN KEY (following_id) REFERENCES Users_Cookenu(id)
        );
        `);

    console.log("Tabelas criadas!");

    connection.destroy();
  } catch (error) {
    console.log(error.sqlMessage || error.message);
    connection.destroy();
  }
};

createTables();
