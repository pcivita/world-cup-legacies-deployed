import { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import { Slider } from "./Slider";
import beforeImage from "../Qatar/images/al_bayt_oct_2014.jpg";
import afterImage from "../Qatar/images/al_bayt_may_2023.jpg";
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
    <div className="relative max-w-3xl mx-auto">
        <div className="sticky top-20 z-0 mb-96 self-center">
            <div className="max-w-3xl self-center">
                <p className="text-2xl text-[#8A1538] font-bold">
                    The Human Cost of Qatar&apos;s World Cup
                </p>
                <p className="italic mt-1 mb-2">
                    95% of Qatar&apos;s workforce is made up of migrant workers, largely from south and southeast Asia.
                </p>
            </div>
            <Slider beforeImage={beforeImage} afterImage={afterImage} />
            <p className="text-center p-5 italic">Pre- and post-construction aerial views of Al Bayt Stadium&apos;s build site.</p>
        </div>

      {/* w-1/3 relative bg-white align-left ml-20 mb-96 shadow-md rounded-sm */}

      <Scrollama offset={1} onStepEnter={onStepEnter}>
        <Step data={0} key={0}>
          <div className="w-1/2 relative bg-white align-center mx-auto mb-96 shadow-md rounded-lg">
            <p className="p-8">
                This is Al Bayt Stadium in Al Khor, Qatar. Al Bayt was constructed between 2015 and 2018 for the World Cup and cost an estimated $847 million. It&apos;s marketed as a desert oasis on Visit Qatar’s website.
            </p>
          </div>
        </Step>
        <Step data={1} key={1}>
          <div className="w-1/2 relative bg-white align-center mx-auto mb-96 shadow-md rounded-lg">
            <p className="p-8">
              Temperatures in Al Khor can reach as high as 110&deg;F during the summer. Between 2007 and 2021, Qatar prohibited outdoor work from 11:00 to 13:00 between June 15th and August 31st, a measure widely seen as not only loosely enforced, but inadequate.
            </p>
          </div>
        </Step>
        <Step data={2} key={2}>
          <div className="w-1/2 relative bg-white align-center mx-auto mb-96 shadow-md rounded-lg">
            <p className="p-8">
                Hassan Al-Thawadi, the leader of Qatar&apos;s preparations for the World Cup, estimates that 400-500 workers died due to their work on projects related to the tournament.
            </p>
          </div>
        </Step>
        <Step data={3} key={3}>
          <div className="w-1/2 relative bg-white align-center mx-auto mb-96 shadow-md rounded-lg">
            <p className="p-8">
                The Guardian and Amnesty International estimate the true number of migrant workers&apos; deaths to be in the thousands. They attribute the deaths to the extreme desert climate and abusive working conditions.
            </p>
          </div>
        </Step>
        <Step data={4} key={4}>
          <div className="w-1/2 relative bg-white align-center mx-auto mb-96 shadow-md rounded-lg">
            <p className="p-8">
                Tracking the true circumstances of these deaths is difficult. Qatar has come under fire from multiple human rights organizations for failing to adequately investigate, certify, and report migrant workers&apos; deaths.
            </p>
          </div>
        </Step>
      </Scrollama>
    </div>
  );
};

export default ScrollyTelling;
