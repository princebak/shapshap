"use client";

import { Fragment, useState } from "react";
import Collapse from "@mui/material/Collapse"; 
// GLOBAL CUSTOM COMPONENTS

import FlexBox from "components/flex-box/flex-box";
import AccordionHeader from "components/accordion/accordion-header"; 
// LOCAL CUSTOM COMPONENT

import ListItem from "./list-item";
import { renderChild } from "./render-child"; 
// CUSTOM DATA MODEL


// ==============================================================
export default function Accordion({
  item,
  handleSelect
}) {
  const {
    icon,
    title,
    child
  } = item;
  const [open, setOpen] = useState(false);
  return <Fragment>
      {
      /* ACCORDION / COLLAPSE HEADER */
    }
      <AccordionHeader py={0.75} open={open} className="linkList" onClick={() => setOpen(state => !state)}>
        <FlexBox gap={1.5} alignItems="center">
          <ListItem icon={icon} title={title} />
        </FlexBox>
      </AccordionHeader>

      {
      /* RENDER NESTED NAV ITEMS */
    }
      {child ? <Collapse in={open}>{renderChild(child, handleSelect)}</Collapse> : null}
    </Fragment>;
}