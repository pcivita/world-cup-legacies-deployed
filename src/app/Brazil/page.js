//"use client";
import React from "react";
import ChartTest from "../../../components/ChartTest";
//import useMeasure from "react-use-measure";

// TODO: Chart Loading is Weird Right Now

export default function Page() {
  // This hook allows us to dynamically measure our components
  //let [ref, bounds] = useMeasure(); ref={ref}
  return (
    <div>
      <h1>Brazil Page</h1>
      <div className="text-blue-400 border-2 max-h-40">
        {/* ref is used for the useMeasure Hook to measure the size of component */}
        <ChartTest height={100} width={200} />
      </div>
    </div>
  );
}
