import { Connection } from "../connection";

class Migrations extends Connection {
  public createTables = async (): Promise<void> => {
    try {
      await Connection.connection.raw(`
      CREATE TABLE IF NOT EXISTS Labook_Users(
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
     );

     CREATE TABLE IF NOT EXISTS Labook_Posts(
        id VARCHAR(255) PRIMARY KEY,
        photo VARCHAR(255) NOT NULL,
        description VARCHAR(255) NOT NULL,
        type ENUM("normal","event") DEFAULT "normal",
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        author_id VARCHAR(255),
        FOREIGN KEY (author_id) REFERENCES Labook_Users(id)
     )
    `);

      console.log("Tables created.");

      Migrations.connection.destroy();
    } catch (error) {
      console.log(error.sqlMessage || error.message);
      Migrations.connection.destroy();
    }
  };
}

new Migrations().createTables();
