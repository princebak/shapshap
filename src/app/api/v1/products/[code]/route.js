import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { findOneByCode } from "services/ProductService";
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

    const product = await findOneByCode(code);
    if (res.error) {
      return NextResponse.json(res.error, { status: 500 });
    }
    return NextResponse.json(product, { status: 200 });
  } catch (error) {}
}
