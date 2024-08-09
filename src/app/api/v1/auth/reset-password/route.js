import { NextResponse } from "next/server";
import { sendResetPwLink } from "services/UserService";

export async function PUT(req) {
  try {
    const { email } = await req.json();
    const res = await sendResetPwLink(email);

    if (res.error) {
      console.log("Reset password API >> ", res.error);
      return NextResponse.json({ error: res.error }, { status: 500 });
    }

    return NextResponse.json(
      {
        message:
          "Click on the reset password link sent in your mail box, complete the process on the web app, then come back here.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Register Api Error : ", error);
    return NextResponse.json(
      {
        error: error,
      },
      { status: 500 }
    );
  }
}
