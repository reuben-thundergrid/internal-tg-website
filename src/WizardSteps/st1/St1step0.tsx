import React from "react";
import st1step0Gif from "../../Gif/st1step0.gif";

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
      <StepHeader>create new ocean connection in main and link the task</StepHeader>
      <div style={{display: "flex", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
        <img style={{gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 2, gridColumnEnd: 3, margin: "1em", borderRadius: "1em"}} src={st1step0Gif} />
      </div>
      <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}>
        <ul style={{color: "white", fontSize: "3.5em", marginLeft: "0.4em"}}>
          <li>Create a new task inside Network Ops ➡️ Ocean Connections ➡️ Main</li>
          <li>Mention this task inside the Sales task description under the "Ocean Connection(s)" text</li>
          <li style={{border: "1px solid red", borderRadius: "15px", paddingLeft: "1em", paddingBottom: "0.2em"}}>Create a separate ocean connection for each cluster</li>
          <li>The name of the task will become the name in Ocean</li>
        </ul>
        <Button variant="contained" endIcon={<OpenInNewIcon />} style={{width: "auto", margin: "1em", fontSize: "1.5em", fontWeight: "700"}} onClick={() => window.open("https://youtube.com")}>HOW TO CREATE A LINKED TASK</Button>
      </div>
    </>
  );
};

