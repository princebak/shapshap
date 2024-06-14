import Link from "next/link";
import ChevronRight from "@mui/icons-material/ChevronRight"; 
// STYLED COMPONENT

import { Wrapper } from "./styles"; 
// =============================================================


// =============================================================
export default function CategoryListItem(props) {
  const {
    href,
    title,
    render,
    caret = true,
    icon: Icon
  } = props;
  return <Wrapper>
      <Link href={href}>
        <div className="category-dropdown-link">
          {Icon ? <Icon fontSize="small" color="inherit" /> : null}
          <span className="title">{title}</span>
          {caret ? <ChevronRight fontSize="small" className="caret-icon" /> : null}
        </div>
      </Link>

      {render ? <div className="mega-menu">{render}</div> : null}
    </Wrapper>;
}