import Grid from "@mui/material/Grid";
// LOCAL CUSTOM COMPONENTS

import Sales from "../sales";
import Card1 from "../card-1";
import WelcomeCard from "../welcome-card";
// API FUNCTIONS

import api from "utils/__api__/dashboard";
import useUser from "hooks/useUser";
import { useContext } from "react";
import { UserContext } from "contexts/UserContext";
// DATA TYPES

export default async function DashboardPageView({ userType }) {
  const cardList = await api.getAllCard();

  return (
    <div className="pt-2 py-2">
      <Grid container spacing={3}>
        {/* WELCOME CARD SECTION */}
        <Grid item md={6} xs={12}>
          <WelcomeCard />
        </Grid>

        {/* ALL TRACKING CARDS */}
        <Grid container item md={6} xs={12} spacing={3}>
          {cardList.map((item) => (
            <Grid item md={6} sm={6} xs={12} key={item.id}>
              <Card1
                title={item.title}
                color={item.color}
                amount1={item.amount1}
                amount2={item.amount2}
                percentage={item.percentage}
                status={item.status === "down" ? "down" : "up"}
              />
            </Grid>
          ))}
        </Grid>

        {/* SALES AREA */}

        {userType == "admin" ? (
          <Grid item xs={12}>
            <Sales />
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </div>
  );
}
