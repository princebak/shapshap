import { useEffect, useState } from "react";
export default function ApexChart(props) {
  const [Chart, setChart] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setChart(() => require("react-apexcharts").default);
    }
  }, []);
  return Chart && <Chart {...props} />;
}