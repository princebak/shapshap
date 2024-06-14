import CircularProgress from "@mui/material/CircularProgress";
import FlexRowCenter from "components/flex-box/flex-row-center";

const Loading = () => {
  return <FlexRowCenter minHeight="100vh">
      <CircularProgress color="primary" />
    </FlexRowCenter>;
};

export default Loading;