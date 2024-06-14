import Switch from "@mui/material/Switch";
import styled from "@mui/material/styles/styled"; 
// STYLED COMPONENT

const StyledSwitch = styled(Switch)(({
  theme
}) => ({
  padding: 8,
  "& .MuiSwitch-switchBase.MuiButtonBase-root": {
    backgroundColor: "transparent"
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    borderRadius: 22 / 2,
    backgroundColor: theme.palette.grey[400],
    "&:before, &:after": {
      width: 16,
      height: 16,
      top: "50%",
      content: '""',
      position: "absolute",
      transform: "translateY(-50%)"
    }
  },
  "& .MuiSwitch-thumb": {
    width: 16,
    height: 16,
    margin: "2px",
    boxShadow: "none",
    backgroundColor: theme.palette.grey[600]
  },
  "& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb": {
    backgroundColor: theme.palette.info.main
  }
}));
export default function BazaarSwitch(props) {
  return <StyledSwitch {...props} />;
}