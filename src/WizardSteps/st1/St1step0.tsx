import React from "react";
import oceanLocationNaming from "../../Gif/ocean-location-naming.png";

import YoutubeEmbed from "../../Components/YoututbeEmbed.js";

import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import StepHeader from "../../Components/StepHeader.tsx"

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

const St1step0 = (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
    <>
      <StepHeader>create new ocean connection in main and link the task</StepHeader>
      <div style={{display: "flex", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center", flexDirection: "column"}}>
        {/* <img style={{gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 2, gridColumnEnd: 3, margin: "1em", borderRadius: "1em"}} src={st1step0Gif} alt="ClickUp GIF" /> */}
        <YoutubeEmbed embedId="s0c4SQmFQQE?si=hWjzBMz-7NZEftLV" />
        <img style={{borderRadius: "1em"}} src={oceanLocationNaming} alt="Naming PNG" />
      </div>
      <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column", paddingBottom: "40em"}}>
        <ul style={{color: "white", marginLeft: "0.4em", display: "flex", flexDirection: "column"}}>
          <li>Create a new task inside Ocean Plus ➡️ Ocean Connections ➡️ Main</li>
          <li>Mention this task inside the Sales task description under the "Ocean Connection(s)" text</li>
          <li style={{backgroundColor: "rgba(226,60,71,0.3)", borderRadius: "0.2em"}}>Create a separate ocean connection for each cluster</li>
          <li>The name of the task will become the name in Ocean</li>
        </ul>
          <Button variant="contained" endIcon={<OpenInNewIcon />} style={{width: "auto", margin: "1em", fontSize: "1.5em", fontWeight: "700"}} onClick={() => window.open("https://app.clickup.com/6958308/v/l/6-901601362630-1")}>Open Ocean Plus</Button>
      </div>
    </>
  );
};

export default St1step0;
