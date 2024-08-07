import React from "react";
import del1step1Gif from "../../../Gif/del1step1.gif";

import StepHeader from "../../../Components/StepHeader.tsx"

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

const Del1step1 = (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
    <>
      <StepHeader>specify in description which chargers are what connectivity method</StepHeader>
      <div style={{display: "flex", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
        <img style={{gridArea: "2/2/3/3", margin: "1em", borderRadius: "1em"}} src={del1step1Gif} alt="ClickUp GIF" />
      </div>
      <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}>
        <ul style={{color: "white", marginLeft: "0.4em"}}>
          <li>Break down in a list which chargers are using what connectivity method</li>
          <li>Type this inside the description</li>
        </ul>
      </div>
    </>
  );
};

export default Del1step1;