import { BarChart } from "@mui/x-charts";

export default function BarGraph({ currentIndex, data }) {
  return (
    <BarChart
      xAxis={[
        {
          scaleType: "band",
          data: ["Initial", "Final", "Debt Remaining"],
        },
      ]}
      yAxis={[{ min: 0, max: 10, label: "Cost (R$100M)" }]}
      series={[data]}
      width={600}
      height={300}
      className="w-1/2"
      // {...chartSetting}
    />
  );
}
