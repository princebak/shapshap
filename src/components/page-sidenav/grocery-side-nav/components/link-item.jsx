
// GLOBAL CUSTOM COMPONENTS
import { Span } from "components/Typography";
import { NavLink } from "components/nav-link"; 
// ==============================================================


// ==============================================================
export default function LinkItem({
  href,
  title,
  ml = 4
}) {
  return <NavLink href={href} color="grey.700">
      <Span display="block" ml={ml} py={1}>
        {title}
      </Span>
    </NavLink>;
}