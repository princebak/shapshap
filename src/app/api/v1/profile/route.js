import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { getRefusedAccessReason, updateUser } from "services/UserService";

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

    const data = await req.json();

    const res = await updateUser(data);

    if (res.error) {
      return NextResponse.json({ error: res.error }, { status: 400 });
    }

    return NextResponse.json(
      { data: res, message: "Profile updated with success !" },
      { status: 200 }
    );
  } catch (error) {
    console.log("Update a Product Error >> ", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
