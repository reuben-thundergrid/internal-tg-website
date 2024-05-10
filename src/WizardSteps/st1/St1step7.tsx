import React from "react";
import st1step7Gif from "../../Gif/st1step7.gif";
import st1step7Gif2 from "../../Gif/2st1step7.gif";

import StepHeader from "../../Components/StepHeader.tsx"

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

const St1step7 = (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
    <>
      <StepHeader>specify land owner</StepHeader>
      <div style={{display: "flex", flexDirection: "column", gridRowStart: 2, gridColumnStart: 2, justifyContent: "center", gap: "1em"}}>
        <img style={{borderRadius: "1em"}} src={st1step7Gif} />
        <img style={{borderRadius: "1em"}} src={st1step7Gif2} />
      </div>
      <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}>
        <ul style={{color: "white", marginLeft: "0.4em"}}>
          <li>For commercial sites this is usually the same as the Station Owner or the entity responsible for the facility</li>
          <li>For home chargers this is usually the home owner</li>
          <li>Place any contact details in the description under "Land Owner Contact Details"</li>
        </ul>
      </div>
    </>
  );
};

export default St1step7;