import { Database } from "@/db";
import { generateId } from "lucia";
import { AccountType, User } from "../lib/types/types";
import {
  CREATE_USER_SQL,
  GET_USER_BY_EMAIL_SQL,
  GET_USER_BY_OAUTH_PROVIDER_ID_SQL,
} from "@/db/queries";

const db: Database = Database.getInstance();

export const getUserByEmail = async (email: string): Promise<User> => {
  try {
    const [user] = await db.sql(GET_USER_BY_EMAIL_SQL, [
      email,
      AccountType.Email,
    ]);
    return user as User;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getUserByOAuthProviderId = async (
  provider: string,
  id: string
): Promise<User> => {
  try {
    const [user] = await db.sql(GET_USER_BY_OAUTH_PROVIDER_ID_SQL, [
      provider,
      id,
    ]);

    return user as User;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const createUser = async (
  email: string,
  password: string
): Promise<User> => {
  const ID_LENGTH = 15;

  try {
    const [user] = await db.sql(CREATE_USER_SQL, [
      generateId(ID_LENGTH),
      email,
      password,
      AccountType.Email,
    ]);

    return user as User;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
