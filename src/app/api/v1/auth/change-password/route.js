import User from "models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { authenticate } from "services/UserService";
import { headers } from "next/headers";

export async function PUT(req) {
  try {
    const requestHeaders = headers();
    const userToken = requestHeaders.get("userToken");

    // Is there any refused access reason ?
    const refusedAccess = await getRefusedAccessReason(userToken);

    if (refusedAccess) {
      return NextResponse.json(
        { message: refusedAccess.message },
        { status: refusedAccess.status }
      );
    }

    const { email, currentPassword, newPassword } = await req.json();

    await authenticate({
      email: email,
      password: currentPassword,
    });
    const hashedPassword = await bcrypt.hash(newPassword, 12);

    await User.findOneAndUpdate({ email: email }, { password: hashedPassword });

    return NextResponse.json(
      {
        message: "password changed !",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Change password Api Error : ", error);
    return NextResponse.json(
      {
        error: error,
      },
      { status: 500 }
    );
  }
}
