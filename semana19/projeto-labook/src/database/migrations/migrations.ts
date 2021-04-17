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
     );

     CREATE TABLE IF NOT EXISTS Labook_Friends (
       reqFriend_id VARCHAR(255) NOT NULL,
       resFriend_id VARCHAR(255) NOT NULL,
       FOREIGN KEY (reqFriend_id) REFERENCES Labook_Users(id),
       FOREIGN KEY (resFriend_id) REFERENCES Labook_Users(id)
     );

     CREATE TABLE IF NOT EXISTS Labook_Like ( 
      user_id VARCHAR(255) NOT NULL,
      post_id VARCHAR(255) NOT NULL, 
      FOREIGN KEY(user_id) REFERENCES Labook_Users (id),
      FOREIGN KEY(post_id) REFERENCES Labook_Posts (id)
     );

     CREATE TABLE Labook_Comment (
      id VARCHAR(255) PRIMARY KEY,
      user_id VARCHAR(255) NOT NULL,
      post_id VARCHAR(255) NOT NULL,
      comment VARCHAR(255) NOT NULL,
      FOREIGN KEY(user_id) REFERENCES Labook_Users (id),
      FOREIGN KEY(post_id) REFERENCES Labook_Posts (id) );
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
