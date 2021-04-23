import { BaseDatabase } from "../BaseDatabase";

class Migrations extends BaseDatabase {
  public createTables = async (): Promise<void> => {
    try {
      await BaseDatabase.connection!.raw(``);

      console.log("Tables created.");

      BaseDatabase.connection!.destroy();
    } catch (error) {
      console.log(error.sqlMessage || error.message);
      BaseDatabase.connection!.destroy();
    }
  };
}

new Migrations().createTables();
