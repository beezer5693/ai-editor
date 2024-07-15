import { getUserByOAuthProviderId } from "@/data-access/users";
import { Database } from "@/db";
import { lucia, slack } from "@/lib/session/auth";
import { AccountType, User } from "@/lib/types/types";
import { OAuth2RequestError } from "arctic";
import { generateId } from "lucia";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");

  if (!code) {
    return NextResponse.json(null, {
      status: 400,
    });
  }

  try {
    const tokens = await slack.validateAuthorizationCode(code);

    const response = await fetch(
      "https://slack.com/api/openid.connect.userInfo",
      {
        headers: {
          Authorization: `Bearer ${tokens.accessToken}`,
        },
      }
    );

    const slackUser = await response.json();

    const existingUser = await getUserByOAuthProviderId(
      "slack_id",
      slackUser.id
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
        INSERT INTO users (id, email, account_type, name, avatar) 
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
      `,
        [
          generateId(15),
          slackUser.email,
          AccountType.Slack,
          slackUser.name,
          slackUser.picture,
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
