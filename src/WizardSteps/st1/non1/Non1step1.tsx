import React from "react";
import lm1step2Gif from "../../../Gif/lm1step2.gif";

import StepHeader from "../../../Components/StepHeader.tsx"

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

const Non1step1 = (props: {
  step: TStep;
  wizard: IWizard;
}) => {

  

  return (
    <>
      <StepHeader>specify type of energy meter as none</StepHeader>
      <div style={{display: "flex", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
        <img style={{gridArea: "2/2/3/3", margin: "1em", borderRadius: "1em"}} src={lm1step2Gif} alt="ClickUp GIF" />
      </div>
      <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}>
        <ul style={{color: "white", marginLeft: "0.4em"}}>
          <li>Select energy meter type for the custom field and choose "None"</li>
          <li>If selecting a static load management type: If you are wanting a lower static limit than the default specify this in the description</li>
        </ul>
      </div>
    </>
  );
};

export default Non1step1;