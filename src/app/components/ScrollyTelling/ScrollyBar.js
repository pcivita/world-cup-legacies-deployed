import { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import Image from "next/image";
import { motion } from "framer-motion";
import BarGraph from "../BarGraph";

const ScrollyBar = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const stepDataArray = [];
  const dataDict = {
    RJ: { data: [8.2, 10.5, 1.8], color: "black" },
    // CE: { data: [4.5, 5.7, 1.3] },
    // BA: { data: [5.9, 6.8, 1.2] },
    SP: { data: [8.2, 10.5, 6.1] },
    RE: { data: [4.9, 5.3, 1.5] },
    AZ: { data: [5.3, 6.6, 1.5] },
    CU: { data: [5.9, 5.9, 1.5] },
  };

  const [curData, setCurData] = useState({ data: [0, 0, 0] });

  const onClick = (key) => {
    setCurData(dataDict[key]);
  };

  // TODO: Each card could be mapped intead, would look better.
  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurData(data);
  };

  return (
    <div className="relative mx-20">
      <div className="w-fit sticky top-1/3 left-1/2 z-0 text-center rounded-lg mx-10">
        <BarGraph
          currentIndex={currentStepIndex}
          className=""
          data={curData}
        />
      </div>

      <Scrollama
        offset={0.5}
        onStepEnter={onStepEnter}
        className="z-10"
      >
        <Step
          data={{ data: [0, 0, 0] }}
          key={0}
        >
          <div className=" w-1/2 z-10 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8 border-black ">
                Over 1 billion reais (~$300 million dollars) of debt remain.
              </p>
            </div>
          </div>
        </Step>
        <Step
          data={{ data: [8.2, 0, 0] }}
          key={0}
        >
          <div className=" w-1/2 z-10 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8 border-black ">
                Over 1 billion reais (~$300 million dollars) of debt remain.
              </p>
            </div>
          </div>
        </Step>
        <Step
          data={{ data: [8.2, 10.5, 0] }}
          key={1}
        >
          <div className=" w-1/2 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8  border-black ">
                Hello, I would be the second card: Step of index {1}{" "}
              </p>
            </div>
          </div>
        </Step>
        <Step
          data={{ data: [8.2, 10.5, 6.2] }}
          key={2}
        >
          <div className="w-1/2 z-10 flex justify-center">
            <div className="w-2/3 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center gap-4 px-4">
              {Object.keys(dataDict).map((key) => (
                <motion.button
                  whileHover={{ scale: 1.05, background: "blue" }}
                  whileTap={{
                    scale: 0.95,
                    background: "green",
                  }}
                  key={key}
                  onClick={() => onClick(key)}
                  // Use `w-full` to make each button take up the full width of its grid cell
                  // Adjust padding, background, margin, and rounded corners as needed
                  className="p-4 bg-green-500 rounded w-full"
                >
                  {key}
                </motion.button>
              ))}
            </div>
          </div>
        </Step>
      </Scrollama>
    </div>
  );
};

export default ScrollyBar;
