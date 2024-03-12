import { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import { motion } from "framer-motion";
import CountUp, { useCountUp } from "react-countup";
const ScrollyNumber = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // TODO: Each card could be mapped intead, would look better.
  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };
  // <motion.div
  //   className="sticky top-1/2 z-0 mb-96 border-2 w-5/6 text-center"
  //   initial="hidden"
  //   whileInView="visible"
  //   viewport={{ once: true }}
  //   transition={{ duration: 2 }}
  //   variants={{
  //     visible: { opacity: 1, scale: 1 },
  //     hidden: { opacity: 0 },
  //   }}
  // >
  //   {/* <BarGraph currentIndex={currentStepIndex} /> */}

  //   <p>{currentStepIndex}</p>
  // </motion.div>;

  return (
    <div className="relative mx-20">
      <motion.div
        className="w-fit sticky top-1/2 left-1/2 z-0 text-center rounded-lg mx-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0 },
        }}
      >
        <CountUp
          end={1000000000}
          duration={3}
          enableScrollSpy={true}
          scrollSpyOnce={true}
          className="text-5xl"
        />
      </motion.div>

      <Scrollama offset={0.5} onStepEnter={onStepEnter} className=" z-10">
        <Step data={0} key={0}>
          <div className=" w-1/2 z-10 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8  border-black ">
                Over 1 billion reais (~$300 million dollars) of debt remain.
              </p>
            </div>
          </div>
        </Step>
        <Step data={1} key={1}>
          <div className="w-1/2 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8 border-black ">
                Hello, I would be the second card: Step of index {1}{" "}
              </p>
            </div>
          </div>
        </Step>
      </Scrollama>
    </div>
  );
};

export default ScrollyNumber;
