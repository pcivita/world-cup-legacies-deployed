import { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import Image from "next/image";
import BarGraph from "../BarGraph";
import PieChartCustom from "../PieChartCustom";

const ScrollyChart = () => {
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
        <PieChartCustom currentIndex={currentStepIndex} />
      </div>

      <Scrollama
        offset={0.5}
        onStepEnter={onStepEnter}
        className="z-10"
      >
        <Step
          data={0}
          key={0}
        >
          <div className=" w-1/2 z-10 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8 border-black ">
                In one of the arenas, Arena Amazonas, the situation is dire.
                While the arena holds space for 44 Thousand people...
              </p>
            </div>
          </div>
        </Step>
        <Step
          data={1}
          key={1}
        >
          <div className=" w-1/2 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8  border-black ">
                ....75% of it has been vacant over its its soccer 9 games in the
                main league in the last 3 years.
              </p>
            </div>
          </div>
        </Step>
        <Step
          data={2}
          key={2}
        >
          <div className="w-1/2 z-10 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8  border-black ">
                And, of those seats, over 40% of the tickets are free.
              </p>
            </div>
          </div>
        </Step>
        <Step
          data={3}
          key={4}
        >
          <div className=" w-1/2 z-10 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8  border-black ">
                This happens in other arenas as well.
              </p>
            </div>
          </div>
        </Step>
      </Scrollama>
    </div>
  );
};

export default ScrollyChart;
