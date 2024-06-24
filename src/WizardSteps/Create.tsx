import React from "react";
import createGif from "../Gif/create.gif";

import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import StepHeader from "../Components/StepHeader.tsx"

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

const Create = (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  
  return (
    <>
      <StepHeader>create a task</StepHeader>
      <div style={{display: "flex", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
        <img style={{gridArea: "2/2/3/3", margin: "1em", borderRadius: "1em"}} src={createGif} alt="ClickUp GIF" />
      </div>
      <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}>
        <ul style={{color: "white", marginLeft: "0.4em"}}>
          <li>Create a new task in the Products & Services ➡️ Sales Pipeline End list inside ClickUp</li>
          <li>Make the name of the task the same as the deal in Hubspot</li>
          <li>You will be the assignee of the task. This should be done automatically</li>
          <li>Make sure to use the default template when creating your task</li>
          <li>While the task sits in the draft status fulfilment will know not to touch the order</li>
        </ul>
        <Button variant="contained" endIcon={<OpenInNewIcon />} style={{width: "auto", margin: "1em", fontSize: "1.5em", fontWeight: "700"}} onClick={() => window.open("https://app.clickup.com/6958308/v/l/6-901601362733-1")}>Open Clickup</Button>
      </div>
    </>
  );
};

export default Create;
