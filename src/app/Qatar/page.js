import React from "react";
import { Slider } from "../components/Slider";
import sad_messi from "./images/sad_messi.jpeg";
import happy_messi from "./images/happy_messi.jpeg";

export default function Page() {
  return (
    <div>
      <h1>I am in Qatar Update</h1>
      <div>
        <Slider beforeImage={sad_messi} afterImage={happy_messi} />
      </div>
    </div>
  );
}
