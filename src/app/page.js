"use client";
import useMeasure from "react-use-measure";
import Link from "next/link";
import { motion } from "framer-motion";
import BrazilImage from "../../public/BrazilHeader.jpg";
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
      <Header home={true} />
      <div className="h-screen self-center">
        <div className="max-w-3xl self-center mx-auto">
          <h1 className="flex mt-28 text-center font-crimson">
            World Cup Legacies
          </h1>
          <p className="flex mt-10 text-left items-center text-xl text-slate-700">
            As the most watched sporting event in the world, many countries can
            only dream of hosting the World Cup. But to the few who did manage,
            its legacy is less glamorous than promised. The last three host
            countries, Brazil, Russia, and Qatar, have all faced challenges in
            the aftermath of the tournament—choose one to learn more.
          </p>
          <p className="text-lg pt-4 pb-10 italic text-slate-700">
            Scroll down to view a timeline of which countries have hosted the
            FIFA World Cup.
          </p>
        </div>
        <div className="flex flex-row h-screen w-screen">
          <Link
            href="/Brazil"
            className="h-1/2 bg-brazil-green w-1/3 overflow-hidden relative"
          >
            <motion.div
              className="overflow-hidden h-full flex relative justify-center items-center "
              whileHover={{ scale: 1.1, opacity: 0.75 }}
              transition={{ duration: 0.4 }}
            >
              {/* Ensure the image covers the entire container without losing its aspect ratio */}
              <Image
                src={BrazilImage}
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className="relative z-0"
              />
              {/* Overlay text, centered with Tailwind CSS */}
              <h2 className="z-10 text-white p-6 bg-brazil-green shadow-2xl font-crimson">
                Abandoned Stadiums <br /> Brazil, 2014
              </h2>
            </motion.div>
          </Link>

          <Link
            href="/Russia"
            className="h-1/2 bg-russia-blue w-1/3 overflow-hidden relative"
          >
            <motion.div
              className="overflow-hidden h-full flex relative justify-center items-center "
              whileHover={{ scale: 1.1, opacity: 0.75 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={RussiaImage}
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className="relative z-0"
              />
              <h2 className="z-10 text-white p-6 bg-russia-blue shadow-2xl font-crimson">
                A Corrupted Environment <br /> Russia, 2018
              </h2>
            </motion.div>
          </Link>
          <Link
            href="/Qatar"
            className="h-1/2 bg-qatar-red w-1/3 overflow-hidden relative"
          >
            <motion.div
              className="overflow-hidden h-full flex relative justify-center items-center "
              whileHover={{ scale: 1.1, opacity: 0.75 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={QatarImage}
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className="relative z-0"
              />
              <h2 className="z-10 text-white p-6 bg-qatar-red shadow-2xl font-crimson">
                Sustainability & Sportswashing <br /> Qatar, 2022
              </h2>
            </motion.div>
          </Link>
        </div>
      </div>
      <div className="w-screen">
        <p className="max-w-3xl items-center mx-auto text-slate-700 text-xl pb-16 pt-10">
          Since the World Cup&apos;s inception, twenty-two tournaments have been
          held by eighteen unique hosts.
        </p>
        <Timeline />
      </div>
      <Footer />
    </main>
  );
}
