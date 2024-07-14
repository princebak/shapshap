"use client";

import { H3 } from "components/Typography";
import Link from "next/link";
export default function ProductOwner({ owner }) {
  return (
    <div>
      <H3 mb={2}>Shop:</H3>
      <div>
        <p style={{ textDecoration: "underline" }}>
          <Link href={`/shops/${owner.code}`}>{owner.shop.name}</Link>
        </p>
        <p>{owner.shop.address}</p>
        <p>{owner.shop.phone}</p>
        <p>{owner.shop.description}</p>
      </div>
    </div>
  );
}
