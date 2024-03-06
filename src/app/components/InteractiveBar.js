import { BarChart } from "@mui/x-charts";
import { useState } from "react";
import { motion } from "framer-motion";

// TODO: Make it so one can change both stadium and category.
export default function InteractiveBar() {
  const dataDict = {
    SP: { data: [1, 2, 3] },
    RJ: { data: [0, 5, 1] },
    MG: { data: [5, 3, 2] },
    GO: { data: [1, 2, 3] },
    BR: { data: [0, 5, 1] },
    BA: { data: [5, 3, 2] },
  };
  const [curData, setCurData] = useState(dataDict.RJ);

  const onClick = (key) => {
    setCurData(dataDict[key]);
    console.log("cur Data: " + curData.data[1]);
  };

  return (
    <div className="flex align-center justify-center flex-col">
      <div className="flex align-center justify-center">
        <BarChart
          xAxis={[
            {
              scaleType: "band",
              data: ["Brasilia", "Fortaleza", "Porto Alegre"],
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
