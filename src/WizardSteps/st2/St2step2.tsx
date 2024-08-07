import React from "react";

import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import StepHeader from "../../Components/StepHeader.tsx"

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

const St2step2 = (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
  <>
    <StepHeader>is the load management solution changing?</StepHeader>
    <h2 style={{color: "white", gridRowStart: 3, gridColumnStart: 1, gridColumnEnd: 3, textAlign: "center"}}>If Unsure Select Yes</h2>
    <h3 style={{color: "white", gridRowStart: 4, gridColumnStart: 1, gridColumnEnd: 3, textAlign: "center"}}>Click Yes or No to Continue</h3>
    <div style={{color: "white", gridRowStart: 5, gridColumnStart: 1, gridColumnEnd: 3, display: "flex", flexDirection: "row", justifyContent: "center", textAlign: "center"}}>
      <div>
        <Button variant="contained" endIcon={<ArrowForwardIcon />} style={{width: "auto", margin: "1em", fontSize: "1.5em", fontWeight: "700"}} onClick={() => props.wizard.goToStep("err")}>Yes</Button>
      </div>
      <div>
        <Button variant="contained" endIcon={<ArrowForwardIcon />} style={{width: "auto", margin: "1em", fontSize: "1.5em", fontWeight: "700"}} onClick={() => props.wizard.goToStep("st2step3")}>No</Button>
      </div>
    </div>
  </>
  );
};

export default St2step2;