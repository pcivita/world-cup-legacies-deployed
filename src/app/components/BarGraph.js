import { BarChart } from "@mui/x-charts";

export default function BarGraph({ currentIndex, data }) {
  const firstData = {
    data: [1, 0, 0],
    label: "Initial Cost",
  };

  const secondData = {
    data: [1, 2, 0],
    label: "Initial Cost",
  };

  const thirdData = {
    data: [1, 2, 3],
    label: "Initial Cost",
  };

  const dataArray = [firstData, secondData, thirdData];

  return (
    <BarChart
      xAxis={[
        {
          scaleType: "band",
          data: ["Initial Cost", "Final Cost", "Debt Remaining"],
        },
      ]}
      yAxis={[{ min: 0, max: 10 }]}
      series={[data]}
      width={600}
      height={300}
      className="w-1/2"
    />
  );
}
