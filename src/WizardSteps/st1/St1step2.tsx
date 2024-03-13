import React from "react";
import st1step2Gif from "../../Gif/st1step2.gif";

import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import StepHeader from "../../Components/StepHeader.tsx"

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

export default (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
    <>
    <StepHeader>is load management required?</StepHeader>
    <h2 style={{color: "white", gridRowStart: 3, gridColumnStart: 1, gridColumnEnd: 3, textAlign: "center"}}>Specify in Custom Field "Load Management Type"</h2>
    <img style={{gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 2, gridColumnEnd: 3, margin: "1em", borderRadius: "1em"}} src={st1step2Gif} />
    <h3 style={{color: "white", gridRowStart: 4, gridColumnStart: 1, gridColumnEnd: 3, textAlign: "center"}}>Select Option to Continue</h3>
    <div style={{color: "white", gridRowStart: 5, gridColumnStart: 1, gridColumnEnd: 3, display: "flex", flexDirection: "row", justifyContent: "center", textAlign: "center"}}>
      <div>
        <Button variant="contained" endIcon={<ArrowForwardIcon />} style={{width: "auto", margin: "1em", fontSize: "1.5em", fontWeight: "700", backgroundColor: "#29B964"}} onClick={() => props.wizard.goToStep("cld1step1")}>Cloud</Button>
      </div>
      <div>
        <Button variant="contained" endIcon={<ArrowForwardIcon />} style={{width: "auto", margin: "1em", fontSize: "1.5em", fontWeight: "700", backgroundColor: "#9E7129"}} onClick={() => props.wizard.goToStep("loc1step1")}>Local</Button>
      </div>
      <div>
        <Button variant="contained" endIcon={<ArrowForwardIcon />} style={{width: "auto", margin: "1em", fontSize: "1.5em", fontWeight: "700", backgroundColor: "#2A2E34"}} onClick={() => props.wizard.goToStep("non1step1")}>None</Button>
      </div>
    </div>
  </>
  );
};

