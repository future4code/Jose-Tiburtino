import connection from "../connection";

const updateSalary = async (id: string, newSalary: number): Promise<void> => {
  await connection("Actor")
    .where("id", "=", `${id}`)
    .update({ salary: newSalary });
};

const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor").delete().where("id", id);
};

const averageSalary = async (gender: string): Promise<void> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};

export { updateSalary, deleteActor, averageSalary };
