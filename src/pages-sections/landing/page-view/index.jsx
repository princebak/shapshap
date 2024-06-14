"use client";

import { useState } from "react";
import Box from "@mui/material/Box"; 
// CUSTOM COMPONENTS

import Footer from "../footer";
import Section1 from "../section-1";
import Section2 from "../section-2";
import Section3 from "../section-3";
import Section4 from "../section-4";
import Section5 from "../section-5";
import Section6 from "../section-6";
import Setting from "components/settings";
export default function IndexPageView() {
  const [filterDemo, setFilterDemo] = useState("");

  const handleChangeFilter = value => setFilterDemo(value);

  return <Box id="top" overflow="hidden" bgcolor="background.paper">
      <Section1 />
      <Section6 handleChangeFilter={handleChangeFilter} />
      <Section2 />
      <Section5 />
      <Section3 filterDemo={filterDemo} setFilterDemo={handleChangeFilter} />
      <Section4 />
      <Footer />
      <Setting />
    </Box>;
}