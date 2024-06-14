import { SupportTicketsPageView } from "pages-sections/vendor-dashboard/support-tickets/page-view"; 
// API FUNCTIONS

import api from "utils/__api__/ticket";
export const metadata = {
  title: "Support Tickets - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default async function SupportTickets() {
  const tickets = await api.getTicketList();
  return <SupportTicketsPageView tickets={tickets} />;
}