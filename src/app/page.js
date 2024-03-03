"use client";
import ChartTest from "./components/ChartTest";
import useMeasure from "react-use-measure";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Home() {
  // This hook allows us to dynamically measure our components
  // Thus, d3 can redraw itself based on the current dimensions
  let [ref, bounds] = useMeasure();

  // TODO: Three columns covering the screen for each country.
  return (
    <main className={`flex min-h-screen flex-col items-center gap-4`}>
      <div className="flex-col p-24 h-min border-2">
        <h1 className="">World Cup Project Update</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
      </div>

      <div className="flex w-screen bg-slate-400 flex-row justify-between h-screen">
        <Link
          href="/Brazil"
          className="h-1/2  bg-blue-400 w-1/3 m-0 overflow-hidden relative"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="overflow-hidden h-full flex flex-col justify-end"
          >
            <h2 className="border-2">BRAZIL </h2>
          </motion.div>
        </Link>
        <Link
          href="/Russia"
          className="h-1/2  bg-green-400 w-1/3 m-0 overflow-hidden relative"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="overflow-hidden h-full flex flex-col justify-end"
          >
            <h2 className="border-2">RUSSIA </h2>
          </motion.div>
        </Link>
        <Link
          href="/Qatar"
          className="h-1/2  bg-red-400 w-1/3 m-0 overflow-hidden relative"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            className="overflow-hidden h-full flex flex-col justify-end"
          >
            <h2 className="border-2">QATAR </h2>
          </motion.div>
        </Link>
      </div>

      {/* <Link href="/Brazil" className="bg-green-200 rounded-md p-4">
        <h2> Go to Brazil! </h2>
      </Link>
      <Link href="/Russia" className="bg-blue-200 rounded-md p-4">
        <h2> Go to Russia! </h2>
      </Link>
      <Link href="/Qatar" className="bg-red-200 rounded-md p-4">
        <h2> Go to Qatar! </h2>
      </Link> */}
    </main>
  );
}
