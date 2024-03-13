"use client";
import { useState } from "react";
import ScrollyNumber from "../components/ScrollyTelling/ScrollyNumber";
import ScrollyBar from "../components/ScrollyTelling/ScrollyBar";
//import useMeasure from "react-use-measure";
import Image from "next/image";
import backgroundImage from "../../../public/BrazilHeader.webp";
import Header from "../components/Header";
import InteractiveBar from "../components/InteractiveBar";
import ScrollyChart from "../components/ScrollyTelling/ScrollyChart";
import { PieChart } from "@mui/x-charts/PieChart";

// TODO: add more margin to Title
// TODO: PIE CHARTS https://mui.com/x/react-charts/pie/

export default function Page() {
  // useCountUp({
  //   ref: "counter",
  //   end: 1234567,

  //   enableScrollSpy: true,
  //   scrollSpyOnce: true,
  //   scrollSpyDelay: 5000,
  // });
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
    setCounter(50);
  };

  const [counter, setCounter] = useState(0);
  // This hook allows us to dynamically measure our components
  //let [ref, bounds] = useMeasure(); ref={ref}
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <div className="flex justify-start items-end relative w-full max-h-screen">
        <div className="absolute">
          <div className="relative z-10 p-4 m-12">
            <h1 className="text-white text-left font-crimson">
              Abandoned Stadiums
            </h1>
            <h2 className="text-white text-left">Brazil, 2014</h2>
          </div>
        </div>

        <div class="relative inline-block">
          <Image
            src={backgroundImage}
            alt=""
            className="block w-full h-auto"
            onLoadingComplete={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>
        </div>
      </div>
      {imageLoaded && (
        <>
          {/* Intro Text */}
          <div className="w-3xl self-center">
            <h2 className="text-black font-bold text-center">
              Brazil's World Cup Legacy: A False Promise of Growth
            </h2>
          </div>
          <div className="max-w-3xl self-center">
            <p className="text-xl mb-10 ">
              When Brazil won the bid for the 2014 World Cup back in 2007, it
              was experiencing historic highs in its economy. With low
              inflation, lower inequality, and better living standards, the
              country was poised to become one of the key global players in the
              coming decades. And hosting the World Cup was the perfect way to
              demonstrate it.
            </p>

            <p className="text-xl mb-10">
              Spending an estimated 31.2 billion reais (around 6.3 billion
              dollars) in preparation for the event, it seemed that Brazil was,
              as the Economist put it in 2009, “taking off”.
            </p>

            <p className="text-xl mb-10">
              Now, 10 years after the event, the country is in a very different
              place. Still dealing with a recession that started in 2014 and the
              consequences of the largest corruption scandal in the world,
              Brazil never took off as it expected. And, the legacy of the World
              Cup mirrors the country&apos;s new reality.
            </p>

            <p className="text-xl  mb-96">
              Instead of heralding a new era, the 2014 event is mainly
              remembered in Brazil for its massive spending on infrastructure.
              No other construction project captures that quite as well as the
              stadiums built and renovated in time for the event. With many
              still repaying their debts and some being completely
              underutilized, the stadiums are the most palpable reminder of
              Brazil&apos;s late 2000s optimism, and what came of it.
            </p>
          </div>

          <ScrollyNumber className="max-w-3xl align-center" />
          <div className="max-w-3xl self-center mt-36">
            <p className="text-xl mb-10 font-crimson">
              When Brazil won the bid for the 2014 World Cup back in 2007, it
              was experiencing historic highs in its economy. With low
              inflation, lower inequality, and better living standards, the
              country was poised to become one of the key global players in the
              coming decades. And hosting the World Cup was the perfect way to
              demonstrate it...
            </p>
            <p className="text-xl mb-10 font-crimson">
              Now, 10 years after the event, the country is in a very different
              place. Still dealing with a recession that started in 2014 and the
              consequences of the largest corruption scandal in the world,
              Brazil never took off as it expected. The legacy of the World Cup
              also mirrors the country&apos;s new reality. Instead of heralding
              a new era, the 2014 World Cup is mainly remembered in Brazil for
              its massive spending on infrastructure (Besides the 7x1). No other
              construction project captures that quite as well as the stadiums
              built and renovated in time for the event. With many still
              repaying their debts and some being completely underutilized, the
              stadiums are the most palpable reminder of Brazil&apos;s late
              2000s optimism, and what came of it.
            </p>
            <p className="text-xl mb-10 font-crimson">
              Now, 10 years after the event, the country is in a very different
              place. Still dealing with a recession that started in 2014 and the
              consequences of the largest corruption scandal in the world,
              Brazil never took off as it expected. The legacy of the World Cup
              also mirrors the country&apos;s new reality. Instead of heralding
              a new era, the 2014 World Cup is mainly remembered in Brazil for
              its massive spending on infrastructure (Besides the 7x1). No other
              construction project captures that quite as well as the stadiums
              built and renovated in time for the event. With many still
              repaying their debts and some being completely underutilized, the
              stadiums are the most palpable reminder of Brazil&apos;s late
              2000s optimism, and what came of it.
            </p>
          </div>
          <ScrollyChart className="max-w-3xl align-center" />

          <ScrollyBar className="max-w-3xl align-center" />
          <div className="max-w-3xl self-center">
            <p className="text-xl mb-10">
              Then, I&apos;m thinking we have a bit more data before we reach
              any graph. I&apos;m just filling in space for now and, of Course,
              any of this is subject to change. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>

            <p className="text-xl mb-10">
              Then, I&apos;m thinking we have a bit more data before we reach
              any graph. I&apos;m just filling in space for now and, of Course,
              any of this is subject to change. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
            <InteractiveBar />
          </div>
        </>
      )}
    </div>
  );
}
