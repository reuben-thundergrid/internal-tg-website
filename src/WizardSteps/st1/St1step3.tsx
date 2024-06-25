import React from "react";
import st1step3Gif from "../../Gif/st1step3.gif";

import StepHeader from "../../Components/StepHeader.tsx"

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

const St1step3 = (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
    <>
      <StepHeader>specify cluster limit / ev-db rating</StepHeader>
      <div style={{display: "flex", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
        <img style={{gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 2, gridColumnEnd: 3, margin: "1em", borderRadius: "1em"}} src={st1step3Gif} alt="ClickUp GIF" />
      </div>
      <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}>
        <ul style={{color: "white", marginLeft: "0.4em"}}>
          <li>Enter cluster limit into custom field "Cluster Limit"</li>
          <li>This will be the chargers direct upstream distribution board rating in amps</li>
          <li>For home chargers this is often the same as the building limit</li>
          <li>If unsure, specify a safe limit. Network Ops will confirm this information during commissioning with the installer</li>
        </ul>
      </div>
    </>
  );
};

export default St1step3;