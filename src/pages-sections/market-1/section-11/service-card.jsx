"use client";

import Fab from "@mui/material/Fab";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import styled from "@mui/material/styles/styled";

// CUSTOM ICON COMPONENTS
import appIcons from "icons"; 
// GLOBAL CUSTOM COMPONENTS

import { H4, Span } from "components/Typography"; 
// CUSTOM DATA MODEL


// STYLED COMPONENTS
const StyledFab = styled(Fab)(({
  theme
}) => ({
  width: 64,
  height: 64,
  fontSize: "1.75rem",
  boxShadow: theme.shadows[0],
  backgroundColor: theme.palette.grey[200]
}));
const StyledCard = styled(Card)(({
  theme
}) => ({
  padding: "3rem",
  height: "100%",
  display: "flex",
  borderRadius: "8px",
  alignItems: "center",
  flexDirection: "column",
  transition: "all 300ms ease-out",
  ":hover": {
    boxShadow: theme.shadows[2]
  }
})); 
// ==================================================


// ==================================================
export default function ServiceCard({
  service
}) {
  const {
    icon,
    title,
    description
  } = service;
  const Icon = appIcons[icon];
  return <Grid item lg={3} sm={6} xs={12}>
      <StyledCard>
        <StyledFab>
          <Icon fontSize="inherit" />
        </StyledFab>

        <H4 mt={2.5} mb={1.25} textAlign="center">
          {title}
        </H4>

        <Span textAlign="center" color="grey.600">
          {description || "We offer competitive prices on our 100 million plus product any range."}
        </Span>
      </StyledCard>
    </Grid>;
}