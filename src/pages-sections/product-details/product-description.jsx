"use client";

import { H3 } from "components/Typography";
export default function ProductDescription({ description }) {
  return (
    <div>
      <H3 mb={2}>Specification:</H3>
      <div>{description}</div>
    </div>
  );
}
