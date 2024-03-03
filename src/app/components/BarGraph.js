import { BarChart } from "@mui/x-charts";

export default function BarGraph({ currentIndex }) {
  const firstData = {
    data: [4, 3, 5],
  };

  const secondData = {
    data: [1, 2, 3],
  };

  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: ["group A", "group B", "group C"] }]}
      series={[
        currentIndex === 0 ? firstData : secondData,
        { data: [1, 6, 3] },
        { data: [2, 5, 6] },
      ]}
      width={500}
      height={300}
    />
  );
}
