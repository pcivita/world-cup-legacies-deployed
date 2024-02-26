"use client";
import { useState } from "react";
import ChartTest from "../components/ChartTest";
import ScrollyTelling from "../components/ScrollyTelling";
//import useMeasure from "react-use-measure";
import { Scrollama, Step } from "react-scrollama";

// TODO: Chart Loading is Weird Right Now

export default function Page() {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };
  // This hook allows us to dynamically measure our components
  //let [ref, bounds] = useMeasure(); ref={ref}
  return (
    // Header
    <div className="flex flex-col gap-10">
      <div className="flex justify-start items-end relative w-full max-h-screen">
        <div className="absolute">
          <div className="relative z-10 p-4">
            <h1 className="text-white text-left">Abandoned Stadiums</h1>
            <h2 className="text-white text-left">Brazil, 2014</h2>
          </div>
        </div>

        <div class="relative inline-block">
          <img
            src="/BrazilHeader.webp"
            alt=""
            className="block w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>
        </div>

        {/* <img
          src="/BrazilHeader.webp"
          className="w-full max-h-screen object-cover"
        /> */}
      </div>
      {/* Intro Text */}
      <div className="max-w-3xl self-center">
        <h2 className="text-black font-bold text-left">
          This would be a small summary of what we're going to talk about. I'm
          thinking of doing the styling similar to nyt, to support at least 2
          screen sizes.
        </h2>
      </div>
      <div className="max-w-3xl self-center">
        <p className="text-xl">
          Then, I'm thinking we have a bit more data before we reach any graph.
          I'm just filling in space for now and, of Course, any of this is
          subject to change. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </div>
      <ScrollyTelling />
    </div>
  );
}
