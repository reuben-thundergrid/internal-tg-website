import React from "react";
import phz3step1Gif from "../../../Gif/phz3step1.gif";
import phz2step1Gif from "../../../Gif/phz2step1.gif";
import StepHeader from "../../../Components/StepHeader.tsx"

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

const Phz2step1 = (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
    <>
      <StepHeader>specify amount of chargers single and three phase</StepHeader>
      <div style={{gridArea: "2/2/3/3", display: "flex", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center", flexDirection: "column"}}>
        <img style={{margin: "1em", borderRadius: "1em"}} src={phz3step1Gif} alt="ClickUp GIF" />
        <img style={{margin: "1em", borderRadius: "1em"}} src={phz2step1Gif} alt="ClickUp GIF" />
      </div>
      <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}>
        <ul style={{color: "white", marginLeft: "0.4em"}}>
          <li>Specify in the description under 'Other Notes' how many chargers will be single and three phase</li>
          <li>Check the Phase Rotations Required custom field box if the installer will be rotating the phases to the chargers</li>
        </ul>
      </div>
    </>
  );
};

export default Phz2step1;