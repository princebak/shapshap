import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { findOneMainOrderByCode } from "services/OrderService";
import { getRefusedAccessReason } from "services/UserService";

export async function GET(req, { params: { code } }) {
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

  if (!code) {
    return NextResponse.json(
      { message: "Bad request, the code is required." },
      { status: 400 }
    );
  }

  const order = await findOneMainOrderByCode(code);

  return NextResponse.json(order, { status: 200 });
}
