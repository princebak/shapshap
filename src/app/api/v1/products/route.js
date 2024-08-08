import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { create, findAllPublished, update } from "services/ProductService";
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

  const res = await create(data);

  if (res.error) {
    return NextResponse.json(res.error, { status: 500 });
  }

  return NextResponse.json(res, { status: 200 });
}

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

  const res = await update(data);

  if (res.error) {
    return NextResponse.json(res.error, { status: 500 });
  }

  return NextResponse.json(res, { status: 200 });
}

export async function GET(req) {
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

  const productsRes = await findAllPublished();

  return NextResponse.json(productsRes, { status: 200 });
}
