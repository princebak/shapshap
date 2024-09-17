import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { findOneMerchantOrderByCode } from "services/OrderService";
import { getRefusedAccessReason } from "services/UserService";

export async function GET(req, { params: { code } }) {
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

    const ordersRes = await findOneMerchantOrderByCode(code);

    if (ordersRes.error) {
      return NextResponse.json({ error: ordersRes.error }, { status: 400 });
    }

    return NextResponse.json(ordersRes, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
