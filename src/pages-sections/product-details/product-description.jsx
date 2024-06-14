"use client";

import { H3 } from "components/Typography";
export default function ProductDescription() {
  return <div>
      <H3 mb={2}>Specification:</H3>
      <div>
        Brand: Beats <br />
        Model: S450 <br />
        Wireless Bluetooth Headset <br />
        FM Frequency Response: 87.5 – 108 MHz <br />
        Feature: FM Radio, Card Supported (Micro SD / TF) <br />
        Made in China <br />
      </div>
    </div>;
}