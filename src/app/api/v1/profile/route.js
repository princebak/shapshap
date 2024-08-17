import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { getRefusedAccessReason, updateUser } from "services/UserService";

export async function PUT(req) {
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
    console.log("MyError <> ", error);
    return NextResponse.json({ error: res.error }, { status: 500 });
  }

  return NextResponse.json(
    { data: res, message: "Profile updated with success !" },
    { status: 200 }
  );
}
