import * as bcrypt from "bcryptjs";

export const hash = async (s: string): Promise<string> => {
  const rounds = Number(process.env.BCRYPT_COST);
  const salt = await bcrypt.genSalt(rounds);
  const result = await bcrypt.hash(s, salt);
  return result;
};

export const compare = (s: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(s, hash);
};
