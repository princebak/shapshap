import { Fragment } from "react";

// GLOBAL CUSTOM COMPONENTS
import { Span } from "components/Typography"; 
// CUSTOM ICON COMPONENTS

import appIcons from "icons"; 
// ==============================================================


// ==============================================================
export default function ListItem({
  title,
  icon
}) {
  const Icon = appIcons[icon];
  return <Fragment>
      <Icon fontSize="small" />
      <Span fontWeight="600">{title}</Span>
    </Fragment>;
}