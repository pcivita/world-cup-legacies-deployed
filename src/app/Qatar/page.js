"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Slider } from "../components/Slider";
import ScrollyTelling from "../components/ScrollyTelling/QatarScrolly";
import { FlipCard } from "../components/FlipCard";
import Header from "../components/Header";
import backgroundImage from "../../../public/QatarHeader.jpeg";
import ridershipTimeline from "./images/ridership.png";
import people from "./images/people.png";
import plane from "./images/airplane.png";
import money from "./images/money.png";
import beforeImage from "./images/al_bayt_oct_2014.jpg";
import afterImage from "./images/al_bayt_may_2023.jpg";
import BackToTop from "../components/ToTop";
import Footer from "../components/Footer";
import Link from "next/link";

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
            <h1 className="text-white text-left">Sustainability and Sportswashing</h1>
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
        <h2 className="font-bold text-left text-[#8A1538]">
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
        </p>
      </div>

      {/* Statistics */}
      <div className="max-w-7xl self-center">
        <div className="float-left w-1/3 max-h-200 text-center p-10">
          <div className="flex justify-center items-center">
            <Image
              src={people}
              width={150}
              height={150}
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
              width={150}
              height={150}
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
              width={150}
              height={150}
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
          Qatar hoped to use the World Cup to bolster their reputation worldwide, to 
          achieve global recognition, and to bridge the gap between the West and the Middle East.
          In their <Link className="text-blue-600 dark:text-blue-500 hover:underline" 
          href="https://digitalhub.fifa.com/m/3041e390c9c0afea/original/fd4w8qgexnrxmquwsb7h-pdf.pdf">winning bid</Link> to 
          host the 2022 FIFA World Cup, the Qatar 2022 Bid 
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
        <br/> <br />
          Did FIFA and Qatar follow through on their promises? Click the cards below to find out.
        </p>
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
        <p className="text-lg">
          Winning the World Cup bid served as the catalyst for Qatar&apos;s <Link className="text-blue-600 dark:text-blue-500 hover:underline"
          href="https://www.gco.gov.qa/en/about-qatar/national-vision2030/">National Vision 2030</Link>, an
          ambitious initiative to diversify the country&apos;s economy and usher it into the modern age. 
          The plan centers human, social, environmental, and economic development, and Qatar used the 
          National Vision to argue that they would host the World Cup with the future in mind. Their preparations, 
          they claimed, would be sustainable, and would benefit the country long after the end of the tournament.
        <br /> <br/>
          More or less, Qatar followed through with their infrastructure projects. In addition to building 
          seven new stadiums and renovating an eighth, Qatar revolutionized the country&apos;s public transportation 
          with the construction of Doha Metro, a 47-mile network of automated electric trains that can 
          travel up to sixty miles per hour. They built at least one hundred new hotels, expanded Hamad 
          International Airport, and overhauled the sewage system. They built new roads, highways, and bridges, 
          and even lined roads with new plants and trees. In total, they spent at least $200 billion USD on 
          infrastructure projects, and are slated to spend more as 2030 approaches.
        </p>
        <br/> <br/>
      </div>

      <div className="max-w-3xl self-center">
        <Image
          src={ridershipTimeline}
          alt="Doha Metro ridership data 2019-2024"
          width={2000}
          heihgt={800}
        />
        <br/>
        <p className="text-md italic">
          Ridership numbers for Doha Metro since it opened in May 2019. While numbers spiked during the World Cup, 
          ridership has grown steadily over the past several years.
        </p>
        <br/> <br/>
      </div>

      <div className="max-w-3xl self-center"> 
        <p className="text-lg">    
          But that construction came at a cost. Critics have accused FIFA of commercializing 
          the sport by accepting Qatar&apos;s bid, and Qatar has been accused of exaggerating their technological 
          and environmental innovations at the World Cup to distract from their human rights abuses.
          The gulf country has a population of three million people, and two million 
          of those people are migrant workers. These workers have made the World Cup and Qatar&apos;s National Vision 2030 
          possible, but have been reportedly subject to several human rights violations in the process.
        </p>
        <br/> <br/>
        <p className="text-2xl text-[#8A1538] font-bold">
          The Life of a World Cup Migrant Worker
        </p>
        <br />
        <p className="text-lg">
          Scroll to learn about how migrant workers fared before, during, and after the World Cup in Qatar.
        </p>
        <br/> <br/>
      </div>

      <ScrollyTelling className="max-w-3xl align-center" />

      <div className="max-w-3xl self-center">
        <br/> <br/> <br/> <br/>
        <p className="text-lg mb-10">
          The plight of workers in countries hosting World Cups is not unique to Qatar.
          Brazil and Russia have also been accused of mistreating the workers they employed to prepare
          for the 2014 and 2018 World Cups, among other issues. The New York  
          Times <Link className="text-blue-600 dark:text-blue-500 hover:underline" 
          href="https://www.nytimes.com/2022/11/25/world/middleeast/qatar-world-cup-criticism.html">reported</Link> that
          many Qataris felt that the world employed a double standard when scrutinizing Qatar&apos;s preparations
          for the tournament, and media coverage of the country&apos;s approach to the World Cup often
          included what many viewed as Orientalist stereotypes about Qataris, Arabs, and Muslims.
        </p>
      </div>

      <div className="max-w-3xl self-center">
        <div className="flex justify-center">
          <Slider beforeImage={beforeImage} afterImage={afterImage} />
        </div>      
        <p className="p-5 italic">
          Pre- and post-construction aerial views of Al Bayt Stadium in Al Khor, Qatar.
          Al Bayt was constructed between 2015 and 2018 and cost an estimated $847 million USD. Qatar 
          markets it as a desert oasis, and temperatures can reach as high as 110&deg;F.
        </p>
      </div>

      <div className="max-w-3xl self-center">
        <p className="text-2xl text-[#8A1538] font-bold">
          Qatar&apos;s World Cup Legacy
        </p>
        <br/>

        <p className="text-lg mb-10">
          Qatar succeeded at achieving global—though not necessarily wholly positive—recognition, and the World Cup 
          helped them take steps to diversify their fossil-fuel-dominated economy into the tourism and sports industries. 
          They used the World Cup to catalyze investments into their public infrastructure, which has led to large-scale 
          improvements in the country&apos;s roadways, public transportation, and waste management. 
          However, they did so with little regard to the rights of their migrant workers, and thousands suffered
          in difficult working conditions with very little compensation.
        </p>
        <p className="text-lg mb-10">
          As a result, Qatar&apos;s World Cup legacy is mixed. Future host countries will have to contend
          with making their tournaments sustainable, ethically deploying their labor force, and ensuring that
          the costs are worth the investment.
        </p>
      </div>
      <Footer />
    </div>
  );
}
