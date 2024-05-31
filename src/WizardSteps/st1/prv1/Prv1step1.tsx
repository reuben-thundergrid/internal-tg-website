import React from "react";
import prv1step1Gif from "../../../Gif/prv1step1.gif";

import StepHeader from "../../../Components/StepHeader.tsx"

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

const Prv1step1 = (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
    <>
      <StepHeader>specify authentication type</StepHeader>
      <div style={{display: "flex", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
        <img style={{gridArea: "2/2/3/3", margin: "1em", borderRadius: "1em"}} src={prv1step1Gif} alt="ClickUp GIF" />
      </div>
      <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}>
        <ul style={{color: "white", marginLeft: "0.4em"}}>
          <li>Specify the authentication type that the client has requested</li>
          <li>If this is still being discussed with the client select "Plug & Charge"</li>
        </ul>      
      </div>
    </>
  );
};

export default Prv1step1;
