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
        <p className="text-lg">
	        The 2022 FIFA World Cup is largely regarded as one of the most striking in history. 
          Lionel Messi, one of the greatest players the sport has ever seen, led Argentina to 
          victory in thrilling fashion against the reigning world champions, France. It was the first 
          World Cup to take place in the Middle East, and perhaps the most technologically innovative 
          in history. It was also hugely controversial: Qatar won the bid to host the tournament amid 
          calls of corruption within the Fédération Internationale de Football Association (FIFA) and 
          has been accused of committing several human rights violations against their migrant workers. 
          Read on to learn more about Qatar&apos;s World Cup legacy.
        </p>
      </div>

      {/* Statistics */}
      <div className="max-w-7xl self-center">
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
        <p className="text-2xl text-[#8A1538] font-bold">
          Qatar&apos;s World Cup Proposal
        </p>
        <br />
        <p className="text-lg">
          In their winning bid to host the 2022 FIFA World Cup, the Qatar 2022 Bid 
          Committee proposed that they would host the first completely carbon-neutral 
          World Cup; they would embark on large-scale infrastructure projects to revamp 
          their public transport, hospitality, and telecommunications systems to prepare 
          for the influx of fans; and they would use the momentum from the tournament to 
          develop football initiatives around the Middle East. To ensure that their stadiums 
          wouldn&apos;t go to waste after the end of the tournament—a fate suffered by many of the 
          facilities constructed for World Cups in past host countries—the Bid Committee 
          asserted that they would repurpose them. Many of the stadiums that Qatar built for 
          the World Cup would be downsized or renovated into shops, health clinics, schools, 
          and other public buildings. Additionally, the committee said that Qatar would 
          repurpose parts of their stadiums to help construct twenty-two modular stadiums in 
          developing countries around the world.
        </p>
      </div>

      <div className="max-w-3xl self-center">
        <p className="text-2xl text-[#8A1538] font-bold">Over a year after the 2022 World Cup, have FIFA and Qatar followed through on these promises?</p>
        <p className="italic mt-2">Click the cards below to find out.</p>
      </div>

      {/* Flip cards */}
      
      <div className="max-w-5xl self-center">
        <div className="float-left w-1/3 h-500 p-10">
          <FlipCard
            frontText="Was it the first carbon-neutral World Cup?"
            backText="It&apos;s unlikely. On June 7, 2023, the Swiss Fairness Commission found that FIFA made false and misleading statements about the environmental impact of the tournament. FIFA had no definitive methods for measuring the sustainability of the tournament, and therefore cannot know that it was carbon-neutral."
          />
        </div>
        <div className="float-left w-1/3 h-500 p-10">
          <FlipCard
            frontText="Has Qatar dismantled and/or repurposed any of their stadiums since the World Cup ended?"
            backText="Not yet, but they have an excuse: Qatar recently hosted another major football tournament, the AFC Asian Cup, in January and February of 2024. Presumably, they will begin renovating and repurposing their stadiums now that the tournament is over."
          />
        </div>
        <div className="float-right w-1/3 h-500 p-10">
          <FlipCard
            frontText="Did Qatar develop its planned public infrastructure projects in advance of the World Cup?"
            backText="Yes. The newly built Doha Metro opened in May 2019 and has been a huge success. The government also built new accomodations, improved the telecommunications network, and bolstered their tourism industry."
          />
        </div>
      </div>

      <div className="max-w-3xl self-center">
        <p className="text-xl">
          Insert text here to talk about Qatar&apos;s infrastructure projects!
        </p>
      </div>

      <ScrollyTelling className="absolute max-w-3xl align-center" />

      <div className="max-w-3xl self-center">
        <p className="text-lg mb-10">
          Migrant workers who helped develop Qatari infrastructure in advance of the World Cup 
          were subject to wage theft, exploitation, and a lack of compensation for abuses during 
          and after the tournament, according to the Human Rights Watch. As of November 20, 2023, 
          Qatar and FIFA have failed to address these abuses meaningfully.
        </p>
        <p className="text-lg mb-10">
          Qatar&apos;s economy spiked during the World Cup, but in the aftermath, as tournament fans 
          left and the country returned to its normal operations, the labor market slowed down. 
          Employers of migrant workers, primarily labor supply companies and construction subcontractors, 
          reacted to the slowdown by underpaying their workers and denying them end-of-service benefits. 
          Some workers report feeling trapped—they did not feel free to leave the country because that 
          would mean they would lose the benefits owed to them, or their employers told them to wait, 
          often for months without pay, until new projects came up. Many workers, fearing slow, taxing 
          legal battles or employer retaliation, did not report the abuses. The Human Rights Watch documented 
          five cases in which employers refused to grant permission to their workers to switch jobs, despite 
          Qatar outlawing that practice in 2020. And while Qatar&apos;s government claimed that they would provide 
          appropriate compensation to their workers, in many cases, that compensation never materialized. 
        </p>
        <p className="text-lg mb-10">
         Qatar&apos;s Workers&apos; Support Fund has successfully paid some workers what they were owed, 
         the Supreme Committee&apos;s Universal Reimbursement Scheme reimbursed some workers for recruitment fees, 
         and nearly two dozen companies created life insurance programs to compensate families of deceased 
         workers. However, for many other workers, their compensation never materialized. Some workers paid 
         high recruitment fees in order to land their jobs in the first place, yet their wages were unable 
         to make up the difference to what they originally paid.
        </p>
      </div>
    </div>
  );
}
