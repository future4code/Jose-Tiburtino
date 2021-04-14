import { Connection } from "../connection";

class Migrations extends Connection {
  public createTables = async (): Promise<void> => {
    try {
      await Connection.connection.raw(``);

      console.log("Tables created.");

      Migrations.connection.destroy();
    } catch (error) {
      console.log(error.sqlMessage || error.message);
      Migrations.connection.destroy();
    }
  };
}

export { Migrations };
