export const GET_USER_BY_EMAIL_SQL =
  "SELECT * FROM users WHERE email = $1 AND account_type = $2";

export const CREATE_USER_SQL = `
INSERT INTO users (id, email, password, account_type)
VALUES ($1, $2, $3, $4)
RETURNING *`;

export const GET_USER_BY_OAUTH_PROVIDER_ID_SQL =
  "SELECT * FROM users WHERE $1 = $2";
