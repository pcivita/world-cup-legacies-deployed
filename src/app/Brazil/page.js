"use client";
import { useState } from "react";
import ScrollyNumber from "../components/ScrollyTelling/ScrollyNumber";
import ScrollyBar from "../components/ScrollyTelling/ScrollyBar";
//import useMeasure from "react-use-measure";
import Image from "next/image";
import backgroundImage from "../../../public/BrazilHeader.webp";
import Header from "../components/Header";
import InteractiveBar from "../components/InteractiveBar";
import ScrollyChart from "../components/ScrollyTelling/ScrollyChart";
import { PieChart } from "@mui/x-charts/PieChart";
import BackToTop from "../components/ToTop";
import Footer from "../components/Footer";

export default function Page() {
  const [imageLoaded, setImageLoaded] = useState(false);
  // const [currentStepIndex, setCurrentStepIndex] = useState(null);
  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  // const onStepEnter = ({ data }) => {
  //   setCurrentStepIndex(data);
  //   setCounter(50);
  // };
  // const [counter, setCounter] = useState(0);
  // This hook allows us to dynamically measure our components
  //let [ref, bounds] = useMeasure(); ref={ref}
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <BackToTop className="fixed w-full h-20 cursor-pointer border-5 border-black" />
      <div className="flex justify-start items-end relative w-full max-h-screen">
        <div className="absolute">
          <div className="relative z-10 p-4 m-12">
            <h1 className="text-white text-left font-crimson">
              Abandoned Stadiums
            </h1>
            <h2 className="text-white text-left">Brazil, 2014</h2>
          </div>
        </div>

        <div className="relative inline-block">
          <Image
            src={backgroundImage}
            alt=""
            className="block w-full h-auto"
            onLoadingComplete={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>
        </div>
      </div>
      {imageLoaded && (
        <>
          {/* Intro Text */}
          <div className="w-3xl self-center">
            <h2 className="text-black font-bold text-center">
              Brazil&apos;s World Cup Legacy: A False Promise of Growth
            </h2>
          </div>
          <div className="max-w-3xl self-center">
            <p className="text-xl mb-10 ">
              When Brazil won the bid for the 2014 World Cup back in 2007, it
              was experiencing historic highs in its economy. With low
              inflation, lower inequality, and better living standards, the
              country was poised to become one of the key global players in the
              coming decades. And hosting the World Cup was the perfect way to
              demonstrate it. Spending an estimated 31.2 billion reais (around
              6.3 billion dollars) in preparation for the event, it seemed that
              Brazil was, as the Economist put it back in 2009, “taking off”.
            </p>
            <p className="text-xl mb-10 ">
              Now, 10 years after the event, Brazil is in a very different
              place. Still dealing with a recession that started in 2014 and the
              consequences of the largest corruption scandal in the world,
              Brazil never "took off" as it expected. The legacy of the World
              Cup also mirrors the country&apos;s new reality. Instead of
              heralding a new era, the 2014 World Cup is mainly remembered in
              Brazil for its massive spending on infrastructure. And, no other
              construction project captures that quite as well as the stadiums
              built and renovated in time for the event. With many still
              repaying their debts and some being completely underutilized, the
              stadiums are the most palpable reminder of Brazil&apos;s late
              2000s optimism, and what came of it.
            </p>

            <p className="text-xl mb-80 ">
              To build and renovate 13 stadiums by the time of the World Cup,
              the Brazilian government decided to step in and help finance this
              operation. Through a national bank called the National Bank for
              Economic and Social Development (shortened to BNDES in
              Portuguese), it loaned almost 4 billion reais (approximately 800
              thousand dollars in today&apos;s exchange) of public money to the
              stadiums. In its initial estimates, BNDES found all stadiums to be
              fit to pay back this debt in 15 years.
            </p>
          </div>
          <ScrollyNumber className="max-w-3xl align-center" />
          <ScrollyBar className="max-w-3xl align-center" />
          <div className="max-w-3xl self-center">
            <p className="text-xl mb-10 ">
              One of the reasons for this is due to final costs grossly
              surpassing the original estimates. For example, Beira-Rio stadium,
              built in the city of Porto Alegre, had an original estimated cost
              of 154 million reais. By the end, the actual construction cost was
              more than double, totaling 366.3 million reais. While not all
              stadiums compared this badly, final costs were, on average, around
              200 million reais more than the estimates. While they have
              recently demonstrated their intent to pay the debt in full, it has
              gotten to the point where it has been affecting the actual
              team&apos;s performance, as money that could have been spent
              bettering its roster has gone to paying off its debt.
            </p>
            <p className="text-xl mb-10 ">
              With all of these issues, many stadiums have resorted to
              renegotiating their original contracts, trying to move the
              deadline further to pay off their debt. In some cases, like with
              Arena das Dunas in Natal, they have taken other loans, both from
              BNDES and private banks, to help pay off the debt they accrued
              back in 2014. These renegotiated agreements set out stringent
              deadlines and “check-ins” to make sure that the stadiums are on
              track with their payment. Nonetheless, it still demonstrates that
              it will take much longer than expected for the publicly funded
              investments to see their return.
            </p>
            <p className="text-xl mb-10 ">USAGE</p>
            <p className="text-xl mb-10 ">
              While the preparation for the World Cup involved renovating many
              of Brazil&apos;s most famous stadiums, it also involved building
              new ones to accommodate FIFA&apos;s requirements and the massive
              influx of tourists. Many of these new stadiums were built in areas
              that previously had extremely small stadiums or none. However,
              instead of serving as an incentive to boost soccer matches and
              events in cities that previously could not hold them, many of
              these new stadiums now sit underutilized.
            </p>
            <p className="text-xl mb-10 ">
              One of the most significant examples of this is Arena Amazonas,
              built in Manaus, the 7th most populous city in Brazil. With a
              maximum capacity of over 44 thousand people, the stadium seemed
              fit to bring in a new wave of soccer fervor to the city. However,
              since then, it has used only an average of 25% of its maximum
              capacity. Even when considering events not related to soccer, the
              stadium underperforms. In 2023, it hosted only four shows. As of
              this moment, there are no events currently scheduled to be held
              this year.
            </p>
            <p className="text-xl mb-10 ">
              Smaller cities also suffer from this same fate. Arena das Dunas
              only had 10 major soccer games in 2023, and most of those were
              from Série C, one of the least premier soccer leagues in the
              country. With a max capacity of just over 31 thousand people, it
              uses about 40% of the stadium for any given game. While these
              numbers may look impressive when compared to Arena Amazonas, about
              20% of the tickets are given away for free.
            </p>
            <p className="text-xl mb-10 ">
              Free tickets are yet another issue that plagues a lot of these
              stadiums. Due to the low number and quality of the matches played
              in these arenas, many resort to giving away significant amounts of
              tickets for free to fill up the already empty stadiums. In Arena
              Amazonas, an average of 40% of the tickets sold in 2023 were given
              away for free.
            </p>

            <p className="text-xl mb-10 ">
              The underutilization of stadiums has gotten so severe that some
              cities have begun trying to tax these stadiums as “shopping
              malls”, arguing that it is essentially what they serve. That is
              the case with Arena das Dunas, which is currently arguing in court
              against such a ruling.
            </p>

            <p className="text-xl mb-10 ">
              Other places are trying to combat this situation, especially Mané
              Garrincha stadium, located in the country&apos;s capital of
              Brasília. Although it only had one major soccer match in 2023, the
              local government is trying to bring more matches to the arena and
              host more events throughout the year as well.
            </p>
            <p className="text-xl mb-10 ">
              Still, most cases are not like this, and cities end up with huge
              stadiums and nothing to fill them with, a far cry from the
              original vision of 2014.
            </p>
          </div>

          <ScrollyChart className="max-w-3xl align-center" />
        </>
      )}
      <Footer />
    </div>
  );
}
