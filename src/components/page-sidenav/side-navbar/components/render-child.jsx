import { Span } from "components/Typography";
import { Circle, StyledList } from "../styles";
export const renderChild = (childList, handleSelect) => {
  return childList.map(item => <StyledList key={item.title} onClick={() => handleSelect(item.title)}>
      <Circle className="dot" />
      <Span py={0.75} flex="1 1 0">
        {item.title}
      </Span>
    </StyledList>);
};