"use client"
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Timeline } from "../components/Timeline";
import ScrollyTelling from "../components/ScrollyTelling";
import ScrollyChart from "../../../public/temp-chart.png";
import backgroundImage from "../../../public/QatarHeader.jpeg";

export default function Page() {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
      setCurrentStepIndex(data);
  };

  const items = [{
      date: "2019-5-8",
      cardTitle: "Doha Metro opens",
      url: "https://twitter.com/qatarrail/status/1126921619899858945",
      cardDetailedText: "37,451 people rode the metro on its first day of operation.",
  },
  {
      date: "2019-5-9",
      cardTitle: "Doha Metro's second day",
      url: "https://twitter.com/qatarrail/status/1126921619899858945",
      cardDetailedText: "49,036 people rode the metro on its second day of operation.",
  },
  {
      date: "2019-12-18",
      cardTitle: "Qatar National Day",
      url: "https://www.thalesgroup.com/en/countries/middle-east-africa/qatar/transportation-qatar#:~:text=Doha%20Metro&text=Public%20adoption%20has%20been%20immediate,Day%20peak%20of%20330%2C000%20passengers.",
      cardDetailedText: "333,000 people rode Doha Metro on National Day 2019."
  },
  {
      date: "2022-11-4",
      cardTitle: "Highest non-tournament ridership per hour",
      url: "https://twitter.com/QatarRail/status/1588935566405824512",
      cardDetailedText: "220,000 people rode Doha Metro within ten hours, its highest average ridership per hour so far."
  },
  {
      title: "November 20 - December 18, 2022",
      cardTitle: "World Cup 2022",
      cardDetailedText: "During the World Cup, 17,444,593 people rode Doha Metro."
  },
  {
      date: "2023-1-17",
      cardTitle: "100 million total passengers",
      url: "https://twitter.com/QatarRail/status/1615606340201680896?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1615606340201680896%7Ctwgr%5E0c378aed6733af174b30270b9fbf5a70f0e8610b%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.iloveqatar.net%2Fnews%2Ftravel%2Fdoha-metro-ridership-100-million-sets-record",
      cardDetailedText: "On this day, Doha Metro carried its one hundred millionth passenger."
  },
  {
      title: "April 19-29, 2023",
      cardTitle: "Eid-al-Fitr holiday",
      url: "https://twitter.com/QatarRail/status/1652969515943186433",
      cardDetailedText: "During the last few days of Ramadan and the Eid-al-Fitr holiday, Doha Metro carried 1,675,731 passengers."
  },
  {
      title: "June 28 - July 1, 2023",
      cardTitle: "Eid-al-Adha holiday",
      url: "https://www.zawya.com/en/business/travel-and-tourism/doha-metro-lusail-tram-transport-633-375-passengers-during-eid-qg88tjgm",
      cardDetailedText: "During the Eid-al-Adha holiday, Doha Metro carried 613,120 passengers."
  },
  {
      title: "January 12 - February 10, 2024",
      cardTitle: "Asian Cup 2024",
      url: "https://twitter.com/QatarRail/status/1756671385794166789",
      cardDetailedText: "During the Asian Cup, Doha Metro carried 6.22 million passengers."
  },
  ];


  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-start items-end relative w-full max-h-screen">
        <div className="absolute">
          <div className="relative z-10 p-4 m-12">
            <h1 className="text-white text-left">Russia World Cup</h1>
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
        <h2 className="text-black font-bold text-left">
          Quick hook to draw people in: What will we be talking about on this web page?
        </h2>
      </div>
      <div>
        <Timeline 
          items={items} 
          theme={{
              primary: '#8A1538',
              secondary: 'white',
              titleColor: 'green',
              titleColorActive: 'red',
              cardTitleColor: 'green'
          }}
        />
      </div>
      <div className="max-w-3xl self-center">
        <p className="text-xl">
          Then, I&apos;m thinking we have a bit more data before we reach any
          graph. I&apos;m just filling in space for now and, of Course, any of
          this is subject to change. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </div>
      <ScrollyTelling className="absolute max-w-3xl align-center" chart={ScrollyChart} />
      <div className="max-w-3xl self-center">
        <p className="text-xl mb-10">
          Then, I&apos;m thinking we have a bit more data before we reach any
          graph. I&apos;m just filling in space for now and, of Course, any of
          this is subject to change. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>

        <p className="text-xl mb-10">
          Then, I&apos;m thinking we have a bit more data before we reach any
          graph. I&apos;m just filling in space for now and, of Course, any of
          this is subject to change. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

