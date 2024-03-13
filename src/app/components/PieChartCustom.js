import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function PieChartCustom({ currentIndex }) {
  const firstStep = [{ id: 0, value: 100, label: "44k Seats" }];

  const secondStep = [
    { id: 0, value: 25, label: "Occupied" },
    { id: 1, value: 75, label: "Empty", color: "gray" },
  ];

  const thirdStep = [
    { id: 0, value: 10, label: "Free" },
    { id: 2, value: 15, label: "Paid" },
    { id: 1, value: 75, label: "Empty", color: "gray" },
  ];

  const lastStep = [
    { id: 0, value: 8, label: "Free" },
    { id: 2, value: 32, label: "Paid" },
    { id: 1, value: 60, label: "Empty", color: "gray" },
  ];

  const dataArray = [firstStep, secondStep, thirdStep, lastStep];

  return (
    <PieChart
      series={[
        {
          data: dataArray[currentIndex],
        },
      ]}
      width={400}
      height={200}
    />
  );
}
