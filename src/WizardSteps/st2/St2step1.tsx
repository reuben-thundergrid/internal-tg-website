import React from "react";
import st2step1Gif from "../../Gif/st2step1.gif";

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
      <StepHeader>find & link existing ocean connection task(s)</StepHeader>
      <div style={{display: "flex", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
        <img style={{gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 2, gridColumnEnd: 3, margin: "1em", borderRadius: "1em"}} src={st2step1Gif} />
      </div>
      <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}>
        <ul style={{color: "white", fontSize: "4em", marginLeft: "0.4em"}}>
          <li>Mention exisitng Ocean connection in Sales task description</li>
          <li>Set Ocean connection task back to first status</li>
          <li style={{border: "1px solid green", borderRadius: "15px", padding: "0.2em"}}>When mentioning a task, type to search. You can search by a task's custom ID</li>
        </ul>
        <Button variant="contained" endIcon={<OpenInNewIcon />} style={{width: "auto", margin: "1em", fontSize: "1.5em", fontWeight: "700"}} onClick={() => window.open("https://youtube.com")}>GUIDE: How To Mention A Task</Button>
      </div>
    </>
  );
};

