import { neon, NeonQueryFunction } from "@neondatabase/serverless";

export class Database {
  private static instance: Database;
  private _sql: NeonQueryFunction<false, false> | null = null;

  private constructor() {}

  public static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public get sql(): NeonQueryFunction<false, false> {
    if (!this._sql) {
      this._sql = neon(Database.getConnectionString());
    }
    return this._sql;
  }

  private static getConnectionString(): string {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error("Could not find database URL in environment variables.");
    }
    return connectionString;
  }
}
