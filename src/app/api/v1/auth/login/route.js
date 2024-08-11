import AccessToken from "models/AccessToken";
import { NextResponse } from "next/server";
import { authenticate } from "services/UserService";

export async function POST(req) {
  const { email, password } = await req.json();
  try {
    const loggedInUser = await authenticate({ email, password });

    const newToken = new AccessToken({
      owner: loggedInUser,
      type: "API",
    });

    const savedToken = await newToken.save();

    return NextResponse.json(
      {
        message: "Logged in with success !",
        userToken: savedToken._id,
        userInfo: loggedInUser,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
