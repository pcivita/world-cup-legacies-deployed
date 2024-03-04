import { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import Image from "next/image";

const ScrollyTelling = ( { chart } ) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  // TODO: Each card could be mapped intead, would look better.
  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <div className="relative  max-w-3xl mx-auto">
      <div className="sticky top-20 z-0 mb-96">
        <Image src={chart} alt="test" />
      </div>

      <Scrollama>
        <Step>
          <div className=" w-1/4 h-40 relative bg-gray-200 align-center mx-auto mb-96 shadow-md rounded-lg">
            <p className="p-8">Hello, I would be the first card </p>
          </div>
        </Step>
        <Step>
          <div className=" w-1/4 h-40 relative bg-gray-200 align-center mx-auto mb-96 shadow-md rounded-lg">
            <p className="p-8">Hello, I would be the second card </p>
          </div>
        </Step>
        <Step>
          <div className=" w-1/4 h-40 relative bg-gray-200 align-center mx-auto mb-96 shadow-md rounded-lg">
            <p className="p-8">Hello, I would be the third card </p>
          </div>
        </Step>
      </Scrollama>
    </div>
  );
};

export default ScrollyTelling;
