import { NextResponse } from "next/server";
import { register } from "services/UserService";

export async function POST(req) {
  try {
    const { name, email, phone, password } = await req.json();
    await register({ name, email, phone, password });

    return NextResponse.json(
      {
        message:
          "Complete the validation process through the link sent via your email, and then come back, please !",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Register Api Error : ", error);
    return NextResponse.json(
      {
        message: "Server error",
      },
      { status: 500 }
    );
  }
}
