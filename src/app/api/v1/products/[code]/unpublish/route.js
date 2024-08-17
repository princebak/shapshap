import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { updateProductStatusByCode } from "services/ProductService";
import { getRefusedAccessReason } from "services/UserService";
import { productStatus } from "utils/constants";

export async function PUT(req, { params: { code } }) {
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
    const res = await updateProductStatusByCode(
      code,
      productStatus.UNPUBLISHED
    );

    if (res.error) {
      return NextResponse.json(res.error, { status: 400 });
    }
    return NextResponse.json(res, { status: 200 });
  } catch (error) {
    console.log("UnpublishProduct Error >> ", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
