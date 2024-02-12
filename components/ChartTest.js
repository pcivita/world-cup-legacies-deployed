"use client";
import * as d3 from "d3";
import { motion } from "framer-motion";

export default function ChartTest({ width, height }) {
  let dummyData = [
    [0, 10],
    [5, 75],
    [15, 50],
    [55, 100],
    [75, 20],
    [100, 40],
    [150, 70],
  ];

  let margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 40,
  };
  // d3 extent calculates min max of data
  let xScale = d3
    .scaleLinear()
    .domain(d3.extent(dummyData.map((d) => d[0])))
    .range([margin.left, width - margin.right]);

  let yScale = d3
    .scaleLinear()
    .domain(d3.extent(dummyData.map((d) => d[1])))
    .range([height - margin.bottom, margin.top]); // inverted here to switch chart axes

  let line = d3
    .line()
    .x((d) => xScale(d[0])) // scale x of each datapoint
    .y((d) => yScale(d[1])); // inverts the chart
  let result = line(dummyData);

  return (
    <>
      <svg
        className=""
        style={{ backgroundColor: "lightgray" }}
        viewBox={`0 0 ${width} ${height}`} // ? do we need viewBox?
      >
        {/* {Y Axis} */}
        {yScale.ticks(4).map((max) => (
          <g
            transform={`translate(0, ${yScale(max)})`}
            className="text-gray-400"
            key={max}
          >
            {/* {Dotted Lines} */}
            <line
              x1={margin.left}
              x2={width - margin.right}
              stroke="currentColor"
              strokeWidth={0.5}
              strokeDasharray="5,8" // 5 = line length, 8 = space between each stroke
            />

            {/* {Numbers in Axis} */}
            <text
              alignmentBaseline="middle"
              style={{ fontSize: "10px", fill: "#718096" }}
            >
              {max}
            </text>
          </g>
        ))}

        {/* {Line} */}
        <motion.path
          d={result}
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          animate={{ pathLength: 1 }}
          initial={{ pathLength: 0 }}
          transition={{ duration: 1.5, type: "spring" }}
        />

        {/* {Circles} */}
        {dummyData.map((d, i) => (
          <motion.circle
            key={i}
            // initial={{ scale: 0, opacity: 0 }}
            // animate={{ scale: 1, opacity: 1 }}
            // transition={{ type: "spring", duration: 0.7, delay: 0.2 * i }}
            r="5"
            cx={xScale(d[0])}
            cy={yScale(d[1])}
            fill="currentColor"
            stroke="lightgray"
            strokeWidth={3}
          />
        ))}
      </svg>
    </>
  );
}
