import { getUserByOAuthProviderId } from "@/data-access/users";
import { Database } from "@/db/index";
import { github, lucia } from "@/lib/session/auth";
import { AccountType, User } from "@/lib/types/types";
import { OAuth2RequestError } from "arctic";
import { generateId } from "lucia";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

interface GithubUser {
  id: number;
  name: string;
  login: string;
  email: string;
  avatar_url: string;
}

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const storedState = cookies().get("github_oauth_state")?.value ?? null;

  if (!code || !state || !storedState || state !== storedState) {
    return NextResponse.json(null, { status: 400 });
  }

  try {
    const tokens = await github.validateAuthorizationCode(code);

    const response = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `token ${tokens.accessToken}`,
      },
    });

    const githubUser: GithubUser = await response.json();

    const existingUser = await getUserByOAuthProviderId(
      "github_id",
      githubUser.id.toString()
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
        INSERT INTO users (id, username, email, account_type, github_id, name, avatar) 
        VALUES ($1, $2, $3, $4, $5, $6, $7) 
        RETURNING *
        `,
        [
          generateId(15),
          githubUser.login,
          githubUser.email,
          AccountType.Github,
          githubUser.id.toString(),
          githubUser.name,
          githubUser.avatar_url,
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
      return NextResponse.json(null, {
        status: 400,
      });
    }

    return NextResponse.json(null, {
      status: 500,
    });
  }
}
