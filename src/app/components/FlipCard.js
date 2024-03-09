import Image from "next/image";
import flip_image from "../../../public/flip.png";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

export function FlipCard( { frontText, backText } ) {
    const [flip, setFlip] = useState(false);
    return (
        <ReactCardFlip 
            isFlipped={flip}
            flipDirection="vertical"
            flipSpeedBackToFront="2.0"
            flipSpeedFrontToBack="2.0"
        >
            <div className="text-lg p-10 h-[350px] text-xl border-4 border-[#8A1538] bg-[#fcfcff] text-bold inset-x-0 top-8 text-center shadow-2xl flex items-center hover:bg-[#fad9e2]">
                {frontText}
                <div className="bottom-0 mr-2 right-0 absolute">
                  <button 
                    onClick={() => setFlip(!flip)}>
                      <Image src={flip_image} width={50} height={50} alt=""></Image>
                  </button>
                </div>
            </div>
            <div className="text-s p-5 h-[350px] border-4 border-[#8A1538] bg-[#fcfcff] text-bold inset-x-0 top-8 text-center items-center shadow-2xl flex hover:bg-[#fad9e2]">
                {backText}
                <div className="bottom-0 mr-2 right-0 absolute">
                  <button 
                    onClick={() => setFlip(!flip)}>
                      <Image src={flip_image} width={50} height={50} alt=""></Image>
                  </button>
                </div>
            </div>
        </ReactCardFlip>
    );
};
