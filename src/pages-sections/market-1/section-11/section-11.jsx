import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container"; 
// LOCAL CUSTOM COMPONENTS

import ServiceCard from "./service-card"; 
// API FUNCTIONS

import api from "utils/__api__/market-1";
export default async function Section11() {
  const services = await api.getServiceList();
  return <Container className="mb-5">
      <Grid container spacing={3}>
        {services.map(item => <ServiceCard key={item.id} service={item} />)}
      </Grid>
    </Container>;
}