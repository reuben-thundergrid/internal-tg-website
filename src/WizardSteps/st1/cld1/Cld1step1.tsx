import React from "react";
import lm1step0Gif from "../../../Gif/lm1step0.gif";

import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import StepHeader from "../../../Components/StepHeader.tsx"

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

export default (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
    <>
      <StepHeader>☁️ C L O U D ☁️</StepHeader>
      <div style={{display: "flex", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
        <img style={{gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 2, gridColumnEnd: 3, margin: "1em", borderRadius: "1em"}} src={lm1step0Gif} />
      </div>
      <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}>
        <ul style={{color: "white", marginLeft: "0.4em"}}>
          <li>Specify energy meter type</li>
          <li>Please note, not all energy meters are compatible with the virtual energy meter</li>
          <li style={{backgroundColor: "rgba(226,60,71,0.3)", borderRadius: "0.2em"}}>Talk to someone in Networks Ops to confirm this option is available</li>
        </ul>
      </div>
    </>
  );
};

