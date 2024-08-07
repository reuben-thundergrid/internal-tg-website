import React from "react";
import priorityGif from "../Gif/priority.gif";
import priorityPng from "../Gif/priority.png";

import StepHeader from "../Components/StepHeader.tsx"

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

const Priority = (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
    <>
      <StepHeader>specify priority</StepHeader>
      <div style={{display: "flex", flexDirection: "column", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
        <img style={{gridArea: "2/2/3/3", margin: "1em", borderRadius: "1em"}} src={priorityGif} alt="ClickUp GIF" />
        <img style={{gridArea: "2/2/3/3", margin: "1em", borderRadius: "1em", scale: "70%"}} src={priorityPng} alt="ClickUp GIF Two" />
      </div>
      <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}>
        <ul style={{color: "white", marginLeft: "0.4em"}}>
          <li>Set the Products & Services task priority to communicate the urgency of the sale</li>
          <li>These flags indicate the targeted <b style={{fontFamily:"Segoe UI"}}>dispatch date</b> and <b style={{fontFamily:"Segoe UI"}}>NOT</b> the delivery date</li>
          <li>The priority starts the date the task is moved into the 'Tender' status</li>
          <li>If not red or yellow, specify no flag and a due date that is a Friday. The order will be dispatched during that week</li>
        </ul>
      </div>
    </>
  );
};

export default Priority;
