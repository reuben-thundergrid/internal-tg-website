import React from "react";
import st1step13Gif from "../../Gif/st1step13.gif";

import StepHeader from "../../Components/StepHeader.tsx"

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

const St1step13 = (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
    <>
      <StepHeader>specify installer</StepHeader>
      <div style={{display: "flex", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
        <img style={{gridArea: "2/2/3/3", margin: "1em", borderRadius: "1em"}} src={st1step13Gif} />
      </div>
      <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}>
        <ul style={{color: "white", marginLeft: "0.4em"}}>
          <li>Select the installer from the custom field installer dropdown</li>
          <li>Place any contact details in the description under "Installer Contact Details"</li>
          <li style={{backgroundColor: "rgba(226,60,71,0.3)", borderRadius: "0.2em"}}>If the installer is not in the list, select "To Be Added" and mention @Fulfilment in the comments with the name of the installer</li>
        </ul>
      </div>
    </>
  );
};

export default St1step13;