import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { createOrder } from "services/OrderService";
import { getRefusedAccessReason } from "services/UserService";

export async function POST(req) {
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

  const res = await createOrder(data);

  if (res.error) {
    return NextResponse.json(res.error, { status: 500 });
  }

  return NextResponse.json(res, { status: 200 });
}
