import React from "react";
import priorityGif from "../Gif/priority.gif";
import priorityPng from "../Gif/priority.png";

import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import StepHeader from "../Components/StepHeader.tsx"

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

export default (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
    <>
      <StepHeader>specify priority</StepHeader>
      <div style={{display: "flex", flexDirection: "column", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
        <img style={{gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 2, gridColumnEnd: 3, margin: "1em", borderRadius: "1em"}} src={priorityGif} />
        <img style={{gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 2, gridColumnEnd: 3, margin: "1em", borderRadius: "1em"}} src={priorityPng} />
      </div>
      <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}>
        <ul style={{color: "white", fontSize: "4em", marginLeft: "0.4em"}}>
          <li>Set the Sales Pipeline task priority to communicate the urgency of the sale</li>
          <li>These flags indicate the targeted <b>dispatch date</b> and <b>NOT</b> the delivery date</li>
        </ul>
      </div>
    </>
  );
};

