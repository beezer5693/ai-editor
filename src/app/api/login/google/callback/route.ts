import { getUserByOAuthProviderId } from "@/data-access/users";
import { Database } from "@/db";
import { google, lucia } from "@/lib/session/auth";
import { AccountType, User } from "@/lib/types/types";
import { OAuth2RequestError } from "arctic";
import { generateId } from "lucia";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

interface GoogleUser {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
}

export async function GET(request: NextRequest): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const storedState = cookies().get("google_oauth_state")?.value ?? null;
  const codeVerifier = cookies().get("google_code_verifier")?.value ?? null;

  if (
    !code ||
    !state ||
    !storedState ||
    state !== storedState ||
    !codeVerifier
  ) {
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const tokens = await google.validateAuthorizationCode(code, codeVerifier);

    const response = await fetch(
      "https://www.googleapis.com/oauth2/v1/userinfo",
      {
        headers: {
          Authorization: `Bearer ${tokens.accessToken}`,
        },
        method: "GET",
      }
    );

    const googleUser: GoogleUser = await response.json();

    const existingUser = await getUserByOAuthProviderId(
      "google_id",
      googleUser.id
    );

    if (existingUser) {
      const session = await lucia.createSession(existingUser.id, {});
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    } else {
      const db = Database.getInstance();

      const [user] = (await db.sql(
        `
        INSERT INTO users (id, email, google_id, account_type, name, avatar)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING *
        `,
        [
          generateId(15),
          googleUser.email,
          googleUser.id,
          AccountType.Google,
          googleUser.name,
          googleUser.picture,
        ]
      )) as User[];

      const session = await lucia.createSession(user.id, {});
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes
      );
    }

    return new Response(null, {
      status: 302,
      headers: {
        Location: "/dashboard",
      },
    });
  } catch (error) {
    if (error instanceof OAuth2RequestError) {
      return new Response(null, {
        status: 400,
      });
    }

    return new Response(null, {
      status: 500,
    });
  }
}
