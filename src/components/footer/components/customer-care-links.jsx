import { Fragment } from "react";
import { Heading, StyledLink } from "../styles";
import { CUSTOMER_CARE_LINKS } from "../data"; 
// ==============================================================


// ==============================================================
export default function CustomerCareLinks({
  isDark
}) {
  return <Fragment>
      <Heading>Customer Care</Heading>

      {CUSTOMER_CARE_LINKS.map((item, ind) => <StyledLink isDark={isDark} href="/" key={ind}>
          {item}
        </StyledLink>)}
    </Fragment>;
}