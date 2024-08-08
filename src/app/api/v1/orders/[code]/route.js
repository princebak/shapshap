import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { findOneMerchantOrderByCode } from "services/OrderService";
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

  const order = await findOneMerchantOrderByCode(code);

  return NextResponse.json(order, { status: 200 });
}
