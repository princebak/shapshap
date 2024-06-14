import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; 
// CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import { H3, H4 } from "components/Typography"; 
// STYLED COMPONENTS

import { StyledContent } from "./styles";
export default function Section4() {
  return <Container id="technologies" className="mb-7">
      <H3 mb={8} fontSize={28} fontWeight="700" textAlign="center" color="secondary.main" textTransform="uppercase">
        Technologies Used
      </H3>

      <StyledContent>
        <Grid container spacing={3}>
          {list.map(item => <Grid item lg={3} md={4} sm={6} xs={12} key={item.title}>
              <Card elevation={3} sx={{
            display: "flex",
            minHeight: "260px",
            boxShadow: "large",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center"
          }}>
                <Box mb={2}>
                  <LazyImage width={60} height={60} alt={item.title} src={item.imgUrl} />
                </Box>
                <H4 fontSize="18px" fontWeight="700" maxWidth="200px" textAlign="center" mx="auto">
                  {item.title}
                </H4>
              </Card>
            </Grid>)}
        </Grid>
      </StyledContent>
    </Container>;
}
const list = [{
  imgUrl: "/assets/images/logos/react.png",
  title: "React"
}, {
  imgUrl: "/assets/images/logos/next-js.png",
  title: "Next.js"
}, {
  imgUrl: "/assets/images/logos/typescript.png",
  title: "TypeScript"
}, {
  imgUrl: "/assets/images/logos/mui.svg",
  title: "MUI"
}];