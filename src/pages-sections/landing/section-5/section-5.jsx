import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Done from "@mui/icons-material/Done"; 
// CUSTOM COMPONENTS

import LazyImage from "components/LazyImage";
import { FlexBox } from "components/flex-box";
import { H2, Paragraph, Span } from "components/Typography"; 
// IMAGES

import productModelImage from "../../../../public/assets/images/landing/product-model.png";
import restApiImage from "../../../../public/assets/images/landing/rest-api-endpoint.png"; 
// STYLED COMPONENT

import { ImageBox } from "./styles";
const model = ["Product model", "User model", "Shop model", "Order model", "Address model", "20+ more models"];
export default function Section5() {
  return <Box mb={4}>
      <Container>
        <Box my={25}>
          <Grid container spacing={{
          md: 8,
          xs: 4
        }} alignItems="center" justifyContent="center">
            <Grid item lg={4} md={5} sm={6} xs={10}>
              <ImageBox>
                <LazyImage alt="product-model" src={productModelImage} />
              </ImageBox>
            </Grid>

            <Grid item lg={4} md={5} sm={6} xs={10}>
              <H2 fontSize={{
              md: 28,
              xs: 27
            }}>Data structure with Typescript Data models</H2>

              <Box mt={3}>
                {model.map(item => <FlexBox mb={1} gap={1} key={item} fontWeight={500} color="grey.900" alignItems="center">
                    <Done color="success" />
                    <Span fontSize={16}>{item}</Span>
                  </FlexBox>)}
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box mt={25} mb={12}>
          <Grid container spacing={{
          md: 8,
          xs: 4
        }} alignItems="center" justifyContent="center">
            <Grid item lg={4} md={5} xs={10} textAlign={{
            xs: "center",
            md: "start"
          }}>
              <H2 fontSize={28}>REST API endpoints</H2>

              <Paragraph fontSize={16}>
                Customize and use existing data structure to implement your server easily.
              </Paragraph>
            </Grid>

            <Grid item md={6} xs={12}>
              <ImageBox>
                <LazyImage src={restApiImage} alt="rest-api-endpoint" />
              </ImageBox>
            </Grid>
          </Grid>
        </Box>

        <Box display="flex" justifyContent="center" mb={10}>
          <a href="https://server.getbazaar.io/" target="_blank" style={{
          width: '50%',
          display: 'block'
        }}>
            <LazyImage src="https://ui-lib.com/wp-content/uploads/2023/10/bazaar-server.jpg" alt="Bazaar server" width={800} height={180} />
          </a>
        </Box>
      </Container>
    </Box>;
}