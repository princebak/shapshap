import AccessToken from "models/AccessToken";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { create, findAllPublished, update } from "services/ProductService";
import { getRefusedAccessReason } from "services/UserService";
import { userStatus } from "utils/constants";

export async function POST(req) {
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

    const userAccessToken =
      await AccessToken.findById(userToken).populate("owner");
    const user = userAccessToken?.owner;

    if (user.status != userStatus.VALIDATED) {
      return NextResponse.json(
        { message: "Update your profile before to create a product." },
        { status: 401 }
      );
    }

    const data = await req.json();

    const res = await create(data);

    if (res.error) {
      return NextResponse.json(res.error, { status: 400 });
    }

    return NextResponse.json({ data: res }, { status: 200 });
  } catch (error) {
    console.log("CreateProduct Error >> ", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req) {
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

    const data = await req.json();

    const res = await update(data);

    if (res.error) {
      return NextResponse.json(res.error, { status: 400 });
    }

    return NextResponse.json({ data: res }, { status: 200 });
  } catch (error) {
    console.log("Update a Product Error >> ", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  const requestHeaders = headers();
  const userToken = requestHeaders.get("userToken");

  const page = req.nextUrl.searchParams.get("page");
  const search = req.nextUrl.searchParams.get("search");
  const limit = req.nextUrl.searchParams.get("limit");

  // Is there any refused access reason ?
  const refusedAccess = await getRefusedAccessReason(userToken);

  if (refusedAccess) {
    return NextResponse.json(
      { message: refusedAccess.message },
      { status: refusedAccess.status }
    );
  }

  const productsRes = await findAllPublished(page, search, limit);

  return NextResponse.json(productsRes, { status: 200 });
}
