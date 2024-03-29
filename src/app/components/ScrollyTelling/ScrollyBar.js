import { useState, useEffect } from "react";
import { Scrollama, Step } from "react-scrollama";
import Image from "next/image";
import { motion } from "framer-motion";
import BarGraph from "../BarGraph";

const ScrollyBar = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [buttonBackground, setButtonBackground] = useState("bg-blue");

  const stepDataArray = [];

  const valueFormatter = (value) =>
    `R$ ${(value * 100000000).toLocaleString()}`;
  const dataDict = {
    RJ: { data: [8.2, 10.5, 1.8], valueFormatter },
    PE: { data: [4.9, 5.3, 1.5], valueFormatter },
    AZ: { data: [5.3, 6.6, 1.5], valueFormatter },
    PA: { data: [5.9, 5.9, 1.5], valueFormatter },
    SP: { data: [8.2, 10.5, 6.2], valueFormatter },
  };

  const [curData, setCurData] = useState({ data: [0, 0, 0], valueFormatter });
  const [selectedKey, setSelectedKey] = useState("SP");

  const onClick = (key) => {
    setSelectedKey(String(key));
    console.log("Clicked key:", key); // Debug log
    setCurData(dataDict[key]);
  };

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurData(data);
    setSelectedKey("SP");
  };

  return (
    <div className="relative mx-20">
      <div className="w-fit sticky top-1/3 left-1/2 z-0 text-center rounded-lg mx-10">
        <h3 className="font-bold ">
          The State of {selectedKey}&apos;s Extending Debt and Initial/Final
          Cost
        </h3>
        <BarGraph
          currentIndex={currentStepIndex}
          className=""
          data={curData}
        />
      </div>

      <Scrollama
        offset={0.65}
        onStepEnter={onStepEnter}
        className="z-10"
      >
        <Step
          data={{ data: [8.2, 0, 0], valueFormatter }}
          key={0}
        >
          <div className=" w-1/2 z-10 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8 border-black ">
                While some stadiums have completely paid off their portion of
                the debt, many lag significantly behind.
                {/* https://www.brasildefato.com.br/2021/04/19/oposicao-quer-r-1-bi-para-combate-a-fome-governo-usou-so-metade-do-previsto-em-2020 */}
              </p>
            </div>
          </div>
        </Step>
        <Step
          data={{ data: [8.2, 0, 0], valueFormatter }}
          key={1}
        >
          <div className=" w-1/2 z-10 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8 border-black ">
                Take for example Arena Corinthians, built in the major city of
                São Paulo and meant to be the home of one of its most popular
                teams.
              </p>
            </div>
          </div>
        </Step>
        <Step
          data={{ data: [8.2, 10.5, 0], valueFormatter }}
          key={2}
        >
          <div className=" w-1/2 z-10 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8 border-black ">
                While its final cost was &quot;only&quot; 260 million reais more
                than the original estimate...
              </p>
            </div>
          </div>
        </Step>
        <Step
          data={{ data: [8.2, 10.5, 6.2], valueFormatter }}
          key={3}
        >
          <div className=" w-1/2 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8  border-black ">
                the debt it still needs to pay is over 600 million reais.
              </p>
            </div>
          </div>
        </Step>

        <Step
          data={{ data: [8.2, 10.5, 6.2], valueFormatter }}
          key={4}
        >
          <div className=" w-1/2 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8  border-black ">
                That alone is almost as high as the original estimated cost of
                building the stadium.
              </p>
            </div>
          </div>
        </Step>

        <Step
          data={{ data: [8.2, 10.5, 6.2], valueFormatter }}
          key={5}
        >
          <div className=" w-1/2 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8  border-black ">
                While not all stadiums compared this badly, final costs were, on
                average, around 200 million reais more than the estimates.
              </p>
            </div>
          </div>
        </Step>
        <Step
          data={{ data: [8.2, 10.5, 6.2], valueFormatter }}
          key={6}
        >
          <div className=" w-1/2 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8  border-black ">
                Below are other stadium&apos;s financial situation according to
                our most recent data.
              </p>
            </div>
          </div>
        </Step>
        <Step
          data={{ data: [8.2, 10.5, 6.2], valueFormatter }}
          key={7}
        >
          <div className="w-1/2 z-10 flex justify-center">
            <div className="w-2/3 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center gap-4 px-4">
              {Object.keys(dataDict).map((key) => (
                <motion.button
                  whileHover={{ scale: 1.05, background: "white" }}
                  whileTap={{
                    scale: 0.95,
                    background: "white",
                  }}
                  key={String(key)}
                  onClick={() => onClick(key)}
                  // Use `w-full` to make each button take up the full width of its grid cell
                  // Adjust padding, background, margin, and rounded corners as needed
                  className={`p-4 border-2  ${
                    selectedKey === key ? "bg-white" : "bg-white"
                  } rounded-full w-full font-bold`}
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
