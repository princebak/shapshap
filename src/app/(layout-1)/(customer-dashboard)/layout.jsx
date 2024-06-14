import { CustomerDashboardLayout } from "components/layouts/customer-dashboard";
export default function Layout({
  children
}) {
  return <CustomerDashboardLayout>{children}</CustomerDashboardLayout>;
}