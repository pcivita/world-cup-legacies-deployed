"use client";
import useMeasure from "react-use-measure";
import Link from "next/link";
import { motion } from "framer-motion";
import BrazilImage from "../../public/BrazilHeader.webp";
import RussiaImage from "../../public/RussiaHeader.jpeg";
import QatarImage from "../../public/QatarHeader.jpg";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";

export default function Home() {
  // This hook allows us to dynamically measure our components
  // Thus, d3 can redraw itself based on the current dimensions
  let [ref, bounds] = useMeasure();

  return (
    <main className={`flex min-h-screen flex-col items-center gap-4`}>
      <Header />
      <div className="h-screen self-center">
        <div className="max-w-3xl self-center mx-auto">
          <h1 className="flex mt-28 text-center">World Cup Legacies</h1>
          <p className="flex mt-4 mb-14 text-left items-center text-xl text-slate-700">
            As the most watched sporting event in the world, many countries can only dream of 
            hosting the World Cup. But to the few who did manage, its legacy is less glamorous 
            than promised. The last three host countries, Brazil, Russia, and Qatar, have all
            faced challenges in the aftermath of the tournament—choose one to learn more.
          </p>
        </div>
        <div className="flex flex-row h-screen w-screen">
          <Link
            href="/Brazil"
            className="h-1/2 bg-black w-1/3 m-5 overflow-hidden relative border-[#009739] border-4"
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
                fill
                style={{objectFit:"cover"}}
                className="relative z-0"
              />
              {/* Overlay text, centered with Tailwind CSS */}
              <h2 className="z-10 text-white p-6 bg-[#009739] shadow-2xl">
                Abandoned Stadiums <br /> Brazil, 2014
              </h2>
            </motion.div>
          </Link>

          <Link
            href="/Russia"
            className="h-1/2 bg-green-400 w-1/3 m-5 overflow-hidden relative border-[#1C3578] border-4"
          >
            <motion.div
              className="overflow-hidden h-full flex relative justify-center items-center"
              whileHover={{ scale: 1.1, opacity: 0.75 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={RussiaImage}
                alt=""
                fill
                style={{objectFit:"cover"}}
                className="relative z-0"
              />
              <h2 className="z-10 text-white p-6 bg-[#1C3578] shadow-2xl">
                A Corrupted Environment <br /> Russia, 2018
              </h2>
            </motion.div>
          </Link>
          <Link
            href="/Qatar"
            className="h-1/2 bg-red-400 w-1/3 m-5 overflow-hidden relative border-[#8A1538] border-4"
          >
            <motion.div
              className="overflow-hidden h-full flex relative justify-center items-center"
              whileHover={{ scale: 1.1, opacity: 0.75 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={QatarImage}
                alt=""
                fill
                style={{objectFit:"cover"}}
                className="relative z-0"
              />
              <h2 className="z-10 text-white p-6 bg-[#8A1538] shadow-2xl">
                Sustainability & Sportswashing <br /> Qatar, 2022
              </h2>
            </motion.div>
          </Link>          
        </div>


      </div>
      <div className="w-screen">
        <p className="max-w-3xl items-center mx-auto text-slate-700 text-xl pb-10 pt-10">
          Since the FIFA World Cup&apos;s inception, twenty-two tournaments have been held by 
          eighteen unique host countries.
        </p>
        <Timeline />
      </div>
      <Footer />
    </main>
  );
}
