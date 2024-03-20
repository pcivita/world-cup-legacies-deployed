import { useState } from "react";
import { Scrollama, Step } from "react-scrollama";
import { motion, useAnimationControls } from "framer-motion";
import CountUp, { useCountUp, update } from "react-countup";
import Link from "next/link";
const ScrollyNumber = () => {
  const controls = useAnimationControls();

  const [counterNum, setCounterNum] = useState({
    number: 1000000000,
    caption: "Of Debt Remains",
    duration: 3,
  });

  // receives the data prop of the step, which stores its index.
  const onStepEnter = ({ data }) => {
    console.log("Step");
    if (counterNum.number !== data.number) {
      controls.set({ opacity: 0 });
      controls.start({
        opacity: 0.75,
        transition: { duration: 0.75 },
      });
      setCounterNum(data);
    }
  };

  return (
    <div className="relative mx-20">
      <motion.div
        className="w-fit sticky top-1/2 left-1/2 z-0 text-center rounded-lg mx-10"
        initial="hidden"
        animate={controls}
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0 },
        }}
      >
        <CountUp
          end={counterNum.number}
          duration={counterNum.duration}
          enableScrollSpy={true}
          scrollSpyOnce={true}
          suffix="+"
          prefix="R$"
          className="text-5xl"
        />
        <p className="mt-4">{counterNum.caption}</p>
      </motion.div>

      <Scrollama
        offset={0.5}
        onStepEnter={onStepEnter}
        className=" z-10"
      >
        <Step
          data={{ number: 1000000000, caption: "Of Debt Remains", duration: 3 }}
          key={0}
        >
          <div className="w-1/2 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8 border-black ">
                To build and renovate 13 stadiums by the time of the World Cup,
                the Brazilian government decided to step in and help finance
                this operation.
                {/* https://www.brasildefato.com.br/2021/04/19/oposicao-quer-r-1-bi-para-combate-a-fome-governo-usou-so-metade-do-previsto-em-2020 */}
              </p>
            </div>
          </div>
        </Step>

        <Step
          data={{ number: 1000000000, caption: "Of Debt Remains", duration: 3 }}
          key={1}
        >
          <div className="w-1/2 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8 border-black ">
                Through a national bank called BNDES, it loaned almost 4 billion
                reais (~2 billion dollars at the time) of public money to the
                stadiums.
                {/* https://www.brasildefato.com.br/2021/04/19/oposicao-quer-r-1-bi-para-combate-a-fome-governo-usou-so-metade-do-previsto-em-2020 */}
              </p>
            </div>
          </div>
        </Step>

        <Step
          data={{
            number: 350000000,
            caption: "Loaned to the State of Bahia",
            duration: 2,
          }}
          key={2}
        >
          <div className="w-1/2 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8 border-black ">
                Amongst its loans, BNDES loaned over R$350 million to the State
                of Bahia&apos;s stadium construction.
                {/* https://www.brasildefato.com.br/2021/04/19/oposicao-quer-r-1-bi-para-combate-a-fome-governo-usou-so-metade-do-previsto-em-2020 */}
              </p>
            </div>
          </div>
        </Step>

        <Step
          data={{
            number: 760000000,
            caption: "Plan to end hunger in Bahia (Inflation Adjusted)",
            duration: 2,
          }}
          key={3}
        >
          <div className="w-1/2 flex justify-center">
            <div className="w-1/2 h-40 bg-gray-200 mb-96 shadow-md rounded-lg text-center flex items-center justify-center">
              <p className="p-8 border-black ">
                Which is{" "}
                <Link
                  className="text-blue-600 dark:text-blue-500 hover:underline"
                  href="https://www.brasildefato.com.br/2021/04/19/oposicao-quer-r-1-bi-para-combate-a-fome-governo-usou-so-metade-do-previsto-em-2020"
                  target="_blank"
                >
                  almost half
                </Link>{" "}
                of the money the Government asks in order to combat hunger in
                the State.
                {/* https://www.brasildefato.com.br/2021/04/19/oposicao-quer-r-1-bi-para-combate-a-fome-governo-usou-so-metade-do-previsto-em-2020 */}
              </p>
            </div>
          </div>
        </Step>
      </Scrollama>
    </div>
  );
};

export default ScrollyNumber;
