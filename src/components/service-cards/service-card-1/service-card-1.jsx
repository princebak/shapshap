
// GLOBAL CUSTOM COMPONENTS
import { H6, Paragraph } from "components/Typography";
import { FlexBox, FlexRowCenter } from "components/flex-box"; 
// LOCAL CUSTOM COMPONENTS

import IconComponent from "../icon-component"; 
// ==============================================================


// ==============================================================
export default function ServiceCard1({
  icon,
  title,
  description
}) {
  return <FlexBox gap={2}>
      <FlexRowCenter width={50} height={50} bgcolor="grey.100" borderRadius="50%">
        {icon ? <IconComponent icon={icon} fontSize="small" /> : null}
      </FlexRowCenter>

      <div>
        <H6 mb={0.5} fontSize={17}>
          {title}
        </H6>

        <Paragraph color="grey.600">{description}</Paragraph>
      </div>
    </FlexBox>;
}