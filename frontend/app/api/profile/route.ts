import { NextResponse } from "next/server";
import { getAccessToken} from '@auth0/nextjs-auth0';

// To handle a GET request to /api
export async function GET(req: Request) {

const { accessToken } = await getAccessToken();
  // Do whatever you want
const headers = {
    Authorization: `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
};

  const body = req.body;

  try {
    const response = await fetch("http://localhost:8000/private", {
      method: 'GET',
      headers,
      body,
    });

    const json = await response.text();

    return NextResponse.json({ message: json }, { status: 200 });
  } catch (e: unknown) {
    const message = (e as Error).message;

    return NextResponse.json({ error: message }, { status: 500 });
``}
}
