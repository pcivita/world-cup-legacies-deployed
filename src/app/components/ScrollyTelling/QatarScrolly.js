import { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import { Point, Line } from "../Points";
import Image from "next/image";

const ScrollyTelling = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  // TODO: Each card could be mapped intead, would look better.
  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  return (
    <div className="relative max-w-5xl mx-auto">
        
        <div className="sticky mt-20 top-80 z-0 float-right">
            <Point currentIndex={currentStepIndex} />
        </div>

      <Scrollama offset={0.5} onStepEnter={onStepEnter}>
        <Step data={0} key={0}>
          <div className="h-screen">
            <Line y1={200} y2={1000} />
            <div className="w-1/2 flex shadow-xl ml-10 border-2 border-[#478778]">
              <p className="p-8 text-lg">
                Around 95% of Qatar&apos;s workforce is made up of migrant workers, mostly from the 
                Philippines and South Asia, who go to Qatar in search of better job prospects. 
                In order to find jobs, many are forced to pay thousands 
                of dollars worth of recruitment fees. Workers report borrowing at high interest rates, 
                selling their assets, or using up their savings in order to gather the money to pay their fees.
              </p>
            </div>
          </div>
        </Step>
        <Step data={1} key={1}>
          <div className="h-screen">
              <Line y1={0} y2={1000} />
              <div className="w-1/2 flex shadow-xl ml-10 border-2 border-[#478778]">
              <p className="p-8 text-lg">
                In the decade leading up to the World Cup, there was an influx of work needed to prepare 
                for the tournament. Qatar raised the minimum wage to 1000 QAR ($274 USD) per month in 2020, but before 
                then, a temporary minimum wage of 750 QAR ($205 USD) per month was in place. With these wages, it would 
                take a migrant worker at least five months to pay off the average recruitment fee; in practice, 
                it takes much longer, since workers often send money home or have to pay for day-to-day expenses.
              </p>
            </div>
          </div>
        </Step>
        <Step data={2} key={2}>
          <div className="h-screen">
            <Line y1={0} y2={1000} />
            <div className="w-1/2 flex shadow-xl ml-10 border-2 border-[#478778]">
              <p className="p-8 text-lg">
                Migrant workers toiled year-round to construct stadiums, the metro system, accommodations, 
                and more for the World Cup, often in extreme heat with few breaks. Temperatures in Qatar can 
                reach as high as 120&deg;F. Between 2007 and 2021, Qatar prohibited outdoor work 
                from 11:00 to 13:00 over the summer, a measure that human rights groups
                called inaqeduate and often not enforced.
              </p>
            </div>
          </div>
        </Step>
        <Step data={3} key={3}>
          <div className="h-screen">
            <Line y1={0} y2={1000} />
            <div className="w-1/2 flex shadow-xl ml-10 border-2 border-[#478778]">
              <p className="p-8 text-lg">
                Hassan Al-Thawadi, Secretary General of the Supreme Committee for Delivery and Legacy, the 
                organization responsible for facilitating Qatar&apos;s preparations for the World Cup, estimates that 
                400-500 workers died due to their work on projects related to the tournament.
              <br/>
              <br/>
                The Guardian and Amnesty International put that number in the thousands. They cite as the main causes 
                of death the extreme desert climate and abusive working conditions.
              </p>
            </div>
          </div>
        </Step>
        <Step data={4} key={4}>
          <div className="h-screen">
            <Line y1={0} y2={1000} />
            <div className="w-1/2 flex shadow-xl ml-10 border-2 border-[#478778]">
              <p className="p-8 text-lg">
                As the tournament wrapped up, the labor market slowed down. Employers reacted to the slowdown by underpaying 
                their workers and denying them end-of-service benefits. Some workers report feeling trapped—leaving the country
                would mean losing the benefits owed to them, or their employers wouldn&apos;t give them permission to leave. 
                Many workers, fearing slow legal battles or employer retaliation, did not report the abuses. 
              </p>
            </div>
          </div>
        </Step>
        <Step data={5} key={5}>
          <div className="h-screen">
            <Line y1={0} y2={1000} />
            <div className="w-1/2 flex shadow-xl ml-10 border-2 border-[#478778]">
              <p className="p-8 text-lg">
                Qatar&apos;s Workers&apos; Support Fund has successfully paid some workers what they were owed, the 
                Supreme Committee&apos;s Universal Reimbursement Scheme reimbursed some workers for recruitment fees, 
                and nearly two dozen companies have created life insurance programs to compensate families of 
                deceased workers. However, for most workers, their compensation still hasn&apos;t materialized.
              </p>
            </div>
          </div>
        </Step>
        <Step data={6} key={6}>
          <div>
              <Line y1={0} y2={100} />
              <div className="w-1/2 flex shadow-xl ml-10 border-2 border-[#478778]">
              <p className="p-8 text-lg">
                As of November 20, 2023, Qatar and FIFA have failed to address these abuses meaningfully.
              </p>
            </div>
          </div>
        </Step>
      </Scrollama>
    </div>
  );
};

export default ScrollyTelling;
