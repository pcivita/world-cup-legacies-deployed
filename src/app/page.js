"use client";
import ChartTest from "./components/ChartTest";
import useMeasure from "react-use-measure";
import Link from "next/link";
import { motion } from "framer-motion";
import BrazilImage from "../../public/BrazilHeader.webp";
import Image from "next/image";
export default function Home() {
  // This hook allows us to dynamically measure our components
  // Thus, d3 can redraw itself based on the current dimensions
  let [ref, bounds] = useMeasure();

  // TODO: Three columns covering the screen for each country.
  return (
    <main className={`flex min-h-screen flex-col items-center gap-4`}>
      <div className="flex-col p-24 h-min">
        <h1 className="max-w-3xl font-crimson">World Cup Legacies</h1>
        <h2 className="max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
      </div>

      <div className="flex w-screen bg-white flex-row justify-between h-screen">
        <Link
          href="/Brazil"
          className="h-1/2 bg-black w-1/3 m-0 overflow-hidden relative"
        >
          <motion.div
            className="overflow-hidden h-full flex relative justify-center items-center"
            whileHover={{ scale: 1.1, opacity: 0.75 }}
            transition={{ duration: 0.4 }}
          >
            {/* Ensure the image covers the entire container without losing its aspect ratio */}
            <Image
              src={BrazilImage}
              alt=""
              layout="fill"
              objectFit="cover"
              className="absolute z-0"
            />
            {/* Overlay text, centered with Tailwind CSS */}
            <h2 className="z-10 text-white text-center font-bold p-4 bg-black bg-opacity-50">
              Abandoned Stadiums <br /> in <br /> BRAZIL
            </h2>
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
    </main>
  );
}
