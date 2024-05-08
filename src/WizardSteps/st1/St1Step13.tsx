import React from "react";
import st1step13Gif from "../../Gif/st1step13.gif";

import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import StepHeader from "../../Components/StepHeader.tsx"

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

export default (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
    <>
      <StepHeader>specify installer</StepHeader>
      <div style={{display: "flex", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
        <img style={{gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 2, gridColumnEnd: 3, margin: "1em", borderRadius: "1em"}} src={st1step13Gif} />
      </div>
      <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}>
        <ul style={{color: "white", fontSize: "4em", marginLeft: "0.4em"}}>
          <li>Select the installer from the custom field installer dropdown</li>
          <li>Place any contact details in the description under "Installer Contact Details"</li>
          <li style={{border: "1px solid red", borderRadius: "15px", paddingLeft: "1em", paddingBottom: "0.2em"}}>If the installer is not in the list, select "To Be Added" and mention @Fulfilment in the comments with the name of the installer</li>
        </ul>
      </div>
    </>
  );
};

