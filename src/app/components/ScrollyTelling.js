import { useState } from "react";
import { Scrollama, Step } from "react-scrollama";

const ScrollyTelling = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <div className="relative">
      <div className="sticky top-20 z-0">
        <img src="/test.png" />
      </div>
      <Scrollama>
        <Step>
          <div className="border-white border-2 h-96 z-40 relative">
            Hello World
          </div>
        </Step>
        <Step>
          <div className="border-white border-2 h-96 z-40 relative">
            Hello World
          </div>
        </Step>
        <Step>
          <div className="border-white border-2 h-96 z-40 relative">
            Hello World
          </div>
        </Step>
      </Scrollama>
    </div>
  );
};

export default ScrollyTelling;
