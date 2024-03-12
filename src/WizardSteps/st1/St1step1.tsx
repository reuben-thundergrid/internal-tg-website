import React from "react";
import st1step1Gif from "../../Gif/st1step1.gif";

import StepHeader from "../../Components/StepHeader.tsx"

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

export default (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
    <>
      <StepHeader>specify site address</StepHeader>
      <div style={{display: "flex", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
        <img style={{gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 2, gridColumnEnd: 3, margin: "1em", borderRadius: "1em"}} src={st1step1Gif} />
      </div>
      <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}>
        <ul style={{color: "white", fontSize: "4em", marginLeft: "0.4em"}}>
          <li>In the new Ocean connection task, fill out the custom field <b>Site Address</b></li>
          <li>This will go into Ocean and indicate where the chargers are installed</li>
          <li style={{border: "1px solid red", borderRadius: "15px", paddingLeft: "1em", paddingBottom: "0.2em"}}>If possible please specify a house number</li>
        </ul>
      </div>
    </>
  );
};

