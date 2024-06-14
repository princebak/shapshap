import { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer"; 
// GLOBAL CUSTOM COMPONENT

import Scrollbar from "components/scrollbar"; 
// ================================================================


// ================================================================
export default function SideNav(props) {
  const {
    position = "left",
    open = false,
    width = 280,
    children,
    handler,
    toggle
  } = props;
  const [sideNavOpen, setSideNavOpen] = useState(open);

  const handleToggleSideNav = () => setSideNavOpen(!sideNavOpen);

  useEffect(() => setSideNavOpen(open), [open]);
  const handleClose = toggle || handleToggleSideNav;
  return <div>
      <Drawer anchor={position} open={sideNavOpen} onClose={handleClose} SlideProps={{
      style: {
        width
      }
    }} sx={{
      zIndex: 15001
    }}>
        <Scrollbar autoHide={false}>{children}</Scrollbar>
      </Drawer>

      {handler(handleClose)}
    </div>;
}