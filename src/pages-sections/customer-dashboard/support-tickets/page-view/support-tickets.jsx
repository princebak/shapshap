"use client";

import { Fragment } from "react"; 
// CUSTOM ICON COMPONENT

import CustomerService from "icons/CustomerService"; 
// Local CUSTOM COMPONENTS

import TicketCard from "../ticket-card";
import Pagination from "../../pagination";
import DashboardHeader from "../../dashboard-header"; 
// CUSTOM DATA MODEL


// =============================================
export default function TicketsPageView({
  tickets
}) {
  return <Fragment>
      {
      /* TITLE HEADER AREA */
    }
      <DashboardHeader title="Support Ticket" Icon={CustomerService} />

      {
      /* SUPPORT TICKET LIST AREA */
    }
      {tickets.map(item => <TicketCard ticket={item} key={item.id} />)}

      {
      /* PAGINATION AREA */
    }
      <Pagination count={4} onChange={data => console.log(data)} />
    </Fragment>;
}