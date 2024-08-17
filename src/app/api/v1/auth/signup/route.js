import { NextResponse } from "next/server";
import { register } from "services/UserService";

export async function POST(req) {
  try {
    const { name, email, phone, password } = await req.json();
    const res = await register({ name, email, phone, password });

    if (res.error) {
      return NextResponse.json(
        {
          error: res.error,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        message:
          "Registered with success, now complete the validation process through the link sent via your email, and then come back, please !",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Register Api Error : ", error);
    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}
