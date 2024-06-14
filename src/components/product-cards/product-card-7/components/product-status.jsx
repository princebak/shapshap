
// STYLED COMPONENTS
import { StatusChipBox, StatusChip } from "../styles"; 
// ==============================================================


// ==============================================================
export default function ProductStatus({
  status
}) {
  return status ? <StatusChipBox>
      <StatusChip>{status}</StatusChip>
      <div className="triangle">
        <div className="triangle-left" />
        <div className="triangle-right" />
      </div>
    </StatusChipBox> : null;
}