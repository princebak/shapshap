import { H3, Span } from "components/Typography"; 
// ==============================================================


// ==============================================================
export default function CountBox({
  digit = 365,
  title = "DAYS"
}) {
  return <H3>
      {digit}{" "}
      <Span color="grey.600" fontSize={14} fontWeight={600}>
        {title}
      </Span>
    </H3>;
}