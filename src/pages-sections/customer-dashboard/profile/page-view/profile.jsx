"use client";

import { Fragment } from "react";
import Person from "@mui/icons-material/Person"; 
// Local CUSTOM COMPONENT

import UserInfo from "../user-info";
import UserAnalytics from "../user-analytics";
import DashboardHeader from "../../dashboard-header"; 
// CUSTOM DATA MODEL


// ============================================================
export default function ProfilePageView({
  user
}) {
  return <Fragment>
      {
      /* TITLE HEADER AREA */
    }
      <DashboardHeader Icon={Person} title="My Profile" buttonText="Edit Profile" href={`/profile/${user.id}`} />

      {
      /* USER PROFILE INFO */
    }
      <UserAnalytics user={user} />

      {
      /* USER PROFILE INFO */
    }
      <UserInfo user={user} />
    </Fragment>;
}