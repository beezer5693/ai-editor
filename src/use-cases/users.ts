import { createUser, getUserByEmail } from "@/data-access/users";
import { hash, verify } from "@node-rs/argon2";

const hashPassword = async (plainTextPassword: string) => {
  return await hash(plainTextPassword, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });
};

const verifyPassword = async (
  hashedPassword: string,
  plainTextPassword: string
) => {
  return await verify(hashedPassword, plainTextPassword, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });
};

export const registerUserUseCase = async (email: string, password: string) => {
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return null;
  }

  const hashedPassword = await hashPassword(password);

  const user = await createUser(email, hashedPassword);

  return user;
};

export const loginUserUseCase = async (email: string, password: string) => {
  const user = await getUserByEmail(email);
  if (!user) {
    return null;
  }

  const isPasswordCorrect = await verifyPassword(user.password!, password);
  if (!isPasswordCorrect) {
    return null;
  }

  return user;
};
