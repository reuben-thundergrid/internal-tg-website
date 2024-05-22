import React from "react";
import st2step1Gif from "../../Gif/st2step1.gif";

import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import StepHeader from "../../Components/StepHeader.tsx"

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";
// import YoutubeEmbed from "../../Components/YoututbeEmbed.js";

const St2step1 = (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
    <>
      <StepHeader>find & link existing ocean connection task(s)</StepHeader>
      <div style={{display: "flex", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
        <img style={{gridArea: "2/2/3/3", margin: "1em", borderRadius: "1em"}} src={st2step1Gif} alt="ClickUp GIF" />
      </div>
      <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}>
        <ul style={{color: "white", marginLeft: "0.4em"}}>
          <li>Mention the exisitng Ocean connection task in Sales Marina task description</li>
          <li>Set the Ocean connection task back to first status</li>
          <li style={{backgroundColor: "rgba(0, 187, 20, 0.31)", borderRadius: "15px", padding: "0.2em"}}>When mentioning a task, type to search. You can search by a task's custom ID</li>
        </ul>
        <Button variant="contained" endIcon={<OpenInNewIcon />} style={{width: "auto", margin: "1em", fontSize: "1.5em", fontWeight: "700"}} onClick={() => window.open("https://youtu.be/s0c4SQmFQQE")}>GUIDE: How To Mention A Task</Button>
        {/* <YoutubeEmbed embedId="s0c4SQmFQQE?si=hWjzBMz-7NZEftLV" /> */}
      </div>
    </>
  );
};

export default St2step1;