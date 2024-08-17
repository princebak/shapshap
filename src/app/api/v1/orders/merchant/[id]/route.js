import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { findMerchantOrders } from "services/OrderService";
import { getRefusedAccessReason } from "services/UserService";

export async function GET(req, { params: { id } }) {
  const page = req.nextUrl.searchParams.get("page");
  const search = req.nextUrl.searchParams.get("search");
  const limit = req.nextUrl.searchParams.get("limit");

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

  const ordersRes = await findMerchantOrders(id, page, search, limit);

  if (ordersRes.error) {
    return NextResponse.json({ error: ordersRes.error }, { status: 400 });
  }

  return NextResponse.json(ordersRes, { status: 200 });
}
