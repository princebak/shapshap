import { headers } from "next/headers";
import { NextResponse } from "next/server";
import {
  findAllByUserId,
} from "services/ProductService";
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

  const productsRes = await findAllByUserId(id, page, search, limit);

  return NextResponse.json(productsRes, { status: 200 });
}
