import React from "react";
import lm1step1Gif from "../../../Gif/lm1step1.gif";

import StepHeader from "../../../Components/StepHeader.tsx"

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

const Lm1step1 = (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
    <>
      <StepHeader>specify capacity of power source energy meter will monitor</StepHeader>
      <div style={{display: "flex", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
        <img style={{gridArea: "2/2/3/3", margin: "1em", borderRadius: "1em"}} src={lm1step1Gif} alt="ClickUp GIF" />
      </div>
      <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}>
        <ul style={{color: "white", marginLeft: "0.4em"}}>
          <li>Fill out the custom field "Building Limit"</li>
          <li>Specify the power source that the energy meter will monitor</li>
          <li>If unsure, specify a safe limit. Network Ops will confirm this information during commissioning with the installer</li>
        </ul>
      </div>
    </>
  );
};

export default Lm1step1;