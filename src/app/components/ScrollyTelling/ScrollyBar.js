import { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import Image from "next/image";
import BarGraph from "../BarGraph";

const ScrollyBar = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // TODO: Each card could be mapped intead, would look better.
  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="sticky top-1/3 z-0 mb-96 border-2 text-center rounded-lg">
        <BarGraph currentIndex={currentStepIndex} />

        <p>
          I&apos;m sticky. The current triggered step index is:{" "}
          {currentStepIndex}
        </p>
      </div>

      <Scrollama offset={0.5} onStepEnter={onStepEnter}>
        <Step data={0} key={0}>
          <div className=" w-1/4 h-40 relative bg-gray-200 align-center mx-auto mb-96 shadow-md rounded-lg">
            <p className="p-8">
              Over 1 billion reais (~$300 million dollars) of debt remain. Index{" "}
              {0}{" "}
            </p>
          </div>
        </Step>
        <Step data={1} key={1}>
          <div className=" w-1/4 h-40 relative bg-gray-200 align-center mx-auto mb-96 shadow-md rounded-lg">
            <p className="p-8">
              Hello, I would be the second card: Step of index {1}{" "}
            </p>
          </div>
        </Step>
        <Step data={2} key={2}>
          <div className=" w-1/4 h-40 relative bg-gray-200 justify-center mx-auto mb-96 shadow-md rounded-lg">
            <p className="p-8">
              Hello, I would be the third card: Step of index {2}{" "}
            </p>
          </div>
        </Step>

        <Step data={3} key={4}>
          <div className=" w-1/4 h-40 relative bg-gray-200 align-center mx-auto mb-96 shadow-md rounded-lg">
            <button className="w-full h-full bg-blue-400 rounded-lg">
              PRESS ME
            </button>
          </div>
        </Step>
        <Step data={3} key={4}>
          <div className=" w-1/4 h-40 relative bg-gray-200 align-center mx-auto mb-96 shadow-md rounded-lg">
            <button className="w-full h-full bg-blue-400 rounded-lg">
              Filler
            </button>
          </div>
        </Step>
      </Scrollama>
    </div>
  );
};

export default ScrollyBar;
