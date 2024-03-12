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
    <div className="relative mx-20">
      <div className="w-fit sticky top-1/3 left-1/2 z-0 text-center rounded-lg mx-10">
        <BarGraph currentIndex={currentStepIndex} className="" />
      </div>

      <Scrollama offset={0.5} onStepEnter={onStepEnter} className="z-10">
        <Step data={0} key={0}>
          <div className=" w-1/2 z-10 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8 border-black ">
                Over 1 billion reais (~$300 million dollars) of debt remain.
              </p>
            </div>
          </div>
        </Step>
        <Step data={1} key={1}>
          <div className=" w-1/2 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8  border-black ">
                Hello, I would be the second card: Step of index {1}{" "}
              </p>
            </div>
          </div>
        </Step>
        <Step data={2} key={2}>
          <div className="w-1/2 z-10 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8  border-black ">
                Over 1 billion reais (~$300 million dollars) of debt remain.
              </p>
            </div>
          </div>
        </Step>

        <Step data={3} key={4}>
          <div className=" w-1/2 z-10 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8  border-black ">
                Over 1 billion reais (~$300 million dollars) of debt remain.
              </p>
            </div>
          </div>
        </Step>
        <Step data={3} key={4}>
          <div className=" w-1/2 z-10 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8  border-black ">
                Over 1 billion reais (~$300 million dollars) of debt remain.
              </p>
            </div>
          </div>
        </Step>
      </Scrollama>
    </div>
  );
};

export default ScrollyBar;
