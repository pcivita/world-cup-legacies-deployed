"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Slider } from "../components/Slider";
import Header from "../components/Header";
import backgroundImage from "../../../public/RussiaHeader.jpeg";
import BackToTop from "../components/ToTop";
import Footer from "../components/Footer";
import beforeImage from "./images/kaliningrad_oct_2011.jpg";
import afterImage from "./images/kaliningrad_oct_2018.jpg";


export default function Page() {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <div className="flex flex-col gap-10">
      <Header />
      <BackToTop className="fixed w-full h-20 cursor-pointer border-5 border-black" />
      <div className="flex justify-start items-end relative w-full max-h-screen">
        <div className="absolute">
          <div className="relative z-10 p-4 m-12">
            <h1 className="text-white text-left">Insert Title Here</h1>
            <h2 className="text-white text-left">Russia, 2018</h2>
          </div>
        </div>
        <div className="relative inline-block">
          <Image src={backgroundImage} alt="" className="block w-full h-auto" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>
        </div>
      </div>
      {/* Intro Text */}
      <div className="max-w-3xl self-center">
        <h2 className="font-bold text-left text-[#8A1538]">
          Russia&apos;s World Cup Legacy: Environmental Issues, Corruption, and Workers&apos; Rights
        </h2>
      </div>

      <div className="max-w-3xl self-center">
        <p className="text-lg">
          Nestled between Poland, Lithuania, and the Baltic Sea, Kaliningrad Oblast is the westernmost 
          part of Russia, and is home to one former World Cup venue—Kaliningrad Stadium. The stadium was 
          built in the three years preceding the tournament for an estimated cost of $200 million USD. It 
          has been plagued with difficulties since.
        </p>
        <br/>
        <p className="text-lg">
          The stadium was constructed on Oktyabrsky Island, an area surrounded by the Pregolya River in 
          Kaliningrad. It was also the last natural wetland in the city, a marshy region that protected 
          water-bird colonies from human development and helped filter pollution from the river. Over a 
          million tons of sand were poured over the swamp to stabilize the foundation for the construction 
          of the stadium, which has a capacity of 33,973 seats. 
        </p>
        <br/>
        <p className="text-lg">
          But if the stadium transformed the island for the worst, the island retaliated: not even a 
          year after the World Cup ended, the stadium was reportedly in danger of sinking due to the 
          unstable ground. After the Russian National Team played a match against Kazakhstan at Kaliningrad 
          Stadium towards the end of 2020, the sewage and drainage systems were found to be in poor condition, 
          leading to <a className="text-blue-600 dark:text-blue-500 hover:underline" 
          href="https://www.sport-express.ru/football/euro/2020/reviews/rossiya-kazahstan-stadion-v-kaliningrade-gde-sygraet-sbornaya-provalivaetsya-1584215/?fbclid=IwAR24ZurgbdCarfBFephwJKvXs0jDRDgbK0XSzKK9IcHV-egcMX2cDcIv5vQ">cracks and bumps</a> in 
          the ground where water had pushed up against the asphalt. The Moscow Times reported that the 
          government set aside 40 million rubles, or around $440,000 USD, to renovate the stadium in 2019, 
          but there is no record of that renovation occurring.
        </p>
        <br />
        <p className="text-lg">
         Some blame the poor construction of the stadium on corruption. Financial troubles led the company 
         responsible for designing the stadium to declare bankruptcy, forcing the Russian government to step 
         in. Several high-ranking officials were arrested and charged with embezzling money from the stadium, 
         according to Sky News. 
        </p>
      </div>

      <div className="max-w-3xl self-center">
        <div className="flex justify-center">
          <Slider beforeImage={beforeImage} afterImage={afterImage} />
        </div>      
        <p className="p-5 italic text-center">
          Views of Oktyabrsky Island before and after Kaliningrad Stadium was built.
        </p>
      </div>

      <div className="max-w-3xl self-center">
        <p className="text-lg">
          More text!
        </p>
      </div>

      <div className="max-w-3xl self-center">
        <p className="text-lg mb-10">
          Concluding paragraphs.
        </p>
      </div>
      <Footer />
    </div>
  );
}
