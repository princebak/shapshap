import { Fragment } from "react";
import { Heading, StyledLink } from "../styles";
import { ABOUT_LINKS } from "../data"; 
// ==============================================================


// ==============================================================
export default function AboutLinks({
  isDark
}) {
  return <Fragment>
      <Heading>About Us</Heading>

      <div>
        {ABOUT_LINKS.map((item, ind) => <StyledLink isDark={isDark} href="/" key={ind}>
            {item}
          </StyledLink>)}
      </div>
    </Fragment>;
}