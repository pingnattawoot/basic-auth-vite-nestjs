import * as bcrypt from "bcrypt";

async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
}

hashPassword("123456").then((hash) => {
  console.log(hash);
});
