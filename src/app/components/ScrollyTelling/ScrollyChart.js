import { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import Image from "next/image";
import BarGraph from "../BarGraph";
import PieChartCustom from "../PieChartCustom";

const ScrollyChart = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [stadiumName, setStadiumName] = useState("Arena Amazonas");

  // TODO: Each card could be mapped intead, would look better.
  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
    if (data === 3) {
      setStadiumName("Arena das Dunas");
    } else {
      setStadiumName("Arena Amazonas");
    }
  };

  return (
    <div className="relative mx-20">
      <div className="w-fit sticky top-1/3 left-1/2 z-0 text-center rounded-lg mx-10">
        <h3 className="font-bold mb-10">{stadiumName} Stadium Usage</h3>
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
                With a maximum capacity of over 44 thousand people...
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
                ....75% of the stadium has been vacant over its 9 main soccer
                games.
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
          data={2}
          key={4}
        >
          <div className=" w-1/2 z-10 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8  border-black ">
                Even when considering events not related to soccer, the stadium
                underperforms.
              </p>
            </div>
          </div>
        </Step>
        <Step
          data={2}
          key={4}
        >
          <div className=" w-1/2 z-10 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8  border-black ">
                In 2023, it hosted only four shows. And as of this moment, there
                are no events currently scheduled to be held this year.
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
                Other stadiums in smaller cities, such as Arena das Dunas, also
                suffer from this same fate.
              </p>
            </div>
          </div>
        </Step>
      </Scrollama>
    </div>
  );
};

export default ScrollyChart;
