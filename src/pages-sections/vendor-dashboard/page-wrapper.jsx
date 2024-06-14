
// GLOBAL CUSTOM COMPONENTS
import { H3 } from "components/Typography"; 
// ==============================================================


// ==============================================================
export default function PageWrapper({
  children,
  title
}) {
  return <div className="pt-2 pb-2">
      <H3 mb={2}>{title}</H3>

      {children}
    </div>;
}