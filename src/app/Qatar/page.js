"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Slider } from "../components/Slider";
import ScrollyTelling from "../components/ScrollyTelling/ScrollyNumber";
import { FlipCard } from "../components/FlipCard";
import beforeImage from "./images/al_bayt_oct_2014.jpg";
import afterImage from "./images/al_bayt_may_2023.jpg";
import backgroundImage from "../../../public/QatarHeader.jpeg";
import ridershipTimeline from "./images/ridership.png";
import people from "./images/people.png";
import plane from "./images/airplane.png";
import money from "./images/money.png";

export default function Page() {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-start items-end relative w-full max-h-screen">
        <div className="absolute">
          <div className="relative z-10 p-4 m-12">
            <h1 className="text-white text-left">Sustainable Sportswashing</h1>
            <h2 className="text-white text-left">Qatar, 2022</h2>
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
          Qatar&apos;s World Cup Legacy: Innovation at the Expense of
          Workers&apos; Rights
        </h2>
      </div>
      <div className="max-w-3xl self-center">
        <p className="text-xl">
          The 2022 FIFA World Cup is largely regarded as one of the most
          striking in history. Lionel Messi, one of the greatest players the
          sport has ever seen, led Argentina to victory in thrilling fashion
          against the reigning world champions, France. Typically a summer
          event, the 2022 tournament was held in November and December to avoid
          the worst of Qatar&apos;s desert heat. It was the first World Cup to
          take place in the Middle East, and perhaps the most technologically
          innovative in history. It was also hugely controversial: Qatar won the
          bid to host the tournament amid calls of corruption within the
          Fédération Internationale de Football Association (FIFA) and has been
          accused of committing several human rights violations against their
          migrant workers. Read on to learn more about Qatar&apos;s World Cup
          legacy.
        </p>
      </div>

      {/* Statistics */}
      <div>
        <div className="float-left w-1/3 max-h-200 text-center p-10">
          <div className="flex justify-center items-center">
            <Image
              src={people}
              width={200}
              height={200}
              alt="Three figures graphic"
            />
          </div>
          <p className="text-[#478778] text-5xl font-bold">3.4 million</p>
          <p className="text-[#36454F] italic">
            people attended World Cup events in Qatar
          </p>
        </div>
        <div className="float-left w-1/3 max-h-200 text-center p-10">
          <div className="flex justify-center items-center">
            <Image
              src={money}
              width={200}
              height={200}
              alt="Money bag graphic"
            />
          </div>
          <p className="text-[#478778] text-5xl font-bold">$7.5 billion</p>
          <p className="text-[#36454F] italic">
            earned by FIFA in revenue (USD)
          </p>
        </div>
        <div className="float-right w-1/3 max-h-200 text-center p-10">
          <div className="flex justify-center items-center">
            <Image
              src={plane}
              width={200}
              height={200}
              alt="Airplane graphic"
            />
          </div>
          <p className="text-[#478778] text-5xl font-bold">1.4 million</p>
          <p className="text-[#36454F] italic">
            people traveled to Qatar for the tournament
          </p>
        </div>
      </div>

      <div className="max-w-3xl self-center">
        <p className="text-xl">
          In their winning bid to host the 2022 FIFA World Cup, the Qatar 2022
          Bid Committee proposed that they would host the first completely
          carbon-neutral World Cup; they would embark on large-scale
          infrastructure projects to revamp their public transport, hospitality,
          and telecommunications systems to prepare for the influx of fans; and
          they would use the momentum from the tournament to develop football
          initiatives around the Middle East. To ensure that their stadiums
          wouldn&apos;t go to waste after the end of the tournament—a fate
          suffered by many of the facilities constructed for World Cups in past
          host countries—the Bid Committee asserted that they would repurpose
          them. Many of the stadiums that Qatar built for the World Cup would be
          downsized or renovated into shops, health clinics, schools, and other
          public buildings. Additionally, the committee said that Qatar would
          repurpose parts of their stadiums to help construct twenty-two modular
          stadiums in developing countries around the world.
        </p>
      </div>

      <div className="max-w-3xl self-center">
        <p className="text-2xl text-black font-bold text-center">
          Over a year after the 2022 World Cup, have FIFA and Qatar followed
          through on these promises?
        </p>
        <br />
        <p className="text-center italic">Click the cards below to find out.</p>
      </div>

      {/* Flip cards */}

      <div>
        <div className="float-left w-1/3 h-400 p-10">
          <FlipCard
            frontText="Was the 2022 World Cup the first carbon-neutral World Cup?"
            backText="It's unlikely. On June 7, 2023, the Swiss Fairness Commission found that FIFA made false and misleading statements about the environmental impact of the tournament. FIFA had no definitive methods for measuring the sustainability of the tournament, and therefore cannot know that it was carbon-neutral."
          />
        </div>
        <div className="float-left w-1/3 h-400 p-10">
          <FlipCard
            frontText="Has Qatar dismantled and repurposed any of their stadiums since the World Cup ended?"
            backText="Not yet, but they have an excuse: Qatar recently hosted another major football tournament, the AFC Asian Cup, in January and February of 2024. Presumably, they will begin renovating and repurposing their stadiums now that the tournament is over."
          />
        </div>
        <div className="float-right w-1/3 h-400 p-10">
          <FlipCard
            frontText="Did Qatar develop its planned public infrastructure projects in advance of the World Cup?"
            backText="Yes. The newly built Doha Metro opened in May 2019 and has been a huge success. The government also built new accomodations, improved the telecommunications network, and bolstered their tourism industry."
          />
        </div>
      </div>

      <ScrollyTelling
        className="absolute max-w-3xl align-center"
        chart={ridershipTimeline}
      />
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
        {/* Slider comparing images. */}
        <div>
          <Slider beforeImage={beforeImage} afterImage={afterImage} />
          <p className="text-center p-5 italic">
            Pre- and post-construction aerial views of Al Bayt Stadium&apos;s
            build site.
          </p>
        </div>
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
