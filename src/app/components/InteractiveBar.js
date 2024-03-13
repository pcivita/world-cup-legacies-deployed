import { BarChart } from "@mui/x-charts";
import { useState } from "react";
import { motion } from "framer-motion";

// TODO: Make it so one can change both stadium and category.
export default function InteractiveBar() {
  const dataDict = {
    RJ: { data: [8.2, 10.5, 1.8] },
    CE: { data: [4.5, 5.7, 1.3] },
    BA: { data: [5.9, 6.8, 1.2] },
    SP: { data: [8.2, 10.5, 6.1] },
    RE: { data: [4.9, 5.3, 1.5] },
    AZ: { data: [5.3, 6.6, 1.5] },
    CU: { data: [5.9, 5.9, 1.5] },
  };

  const [curData, setCurData] = useState(dataDict.RJ);

  const onClick = (key) => {
    setCurData(dataDict[key]);
  };

  return (
    <div className="flex align-center justify-center flex-col">
      <div className="flex align-center justify-center">
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: ["Initial Cost", "Final Cost", "Debt Remaining"],
            },
          ]}
          yAxis={[{ min: 0, max: 10 }]}
          series={[curData]}
          width={600}
          height={300}
          className="w-1/2"
        />
      </div>

      <div className="grid grid-cols-3 gap-4 mb-10">
        {Object.keys(dataDict).map((key) => (
          <motion.button
            whileHover={{ scale: 1.05, background: "blue" }}
            whileTap={{
              scale: 0.95,
              background: "blue",
            }}
            key={key}
            onClick={() => onClick(key)}
            // Use `w-full` to make each button take up the full width of its grid cell
            // Adjust padding, background, margin, and rounded corners as needed
            className="p-4 bg-slate-500 rounded w-full"
          >
            {key}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
