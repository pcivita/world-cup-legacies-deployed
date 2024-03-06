import { BarChart } from "@mui/x-charts";

export default function BarGraph({ currentIndex, dataTest }) {
  const firstDataInitial = {
    data: [0, 0, 0],
    label: "Initial Cost",
  };

  const secondDataInitial = {
    data: [1, 2, 3],
    label: "Initial Cost",
  };

  const secondDataFinal = {
    data: [2, 4, 6],
    label: "Initial Cost",
  };

  return (
    <BarChart
      xAxis={[
        { scaleType: "band", data: ["Brasilia", "Fortaleza", "Porto Alegre"] },
      ]}
      yAxis={[{ min: 0, max: 10 }]}
      series={[
        currentIndex === 0 ? firstDataInitial : secondDataInitial,
        currentIndex <= 2 ? firstDataInitial : secondDataFinal,
      ]}
      width={600}
      height={300}
      className="w-1/2"
    />
  );
}
