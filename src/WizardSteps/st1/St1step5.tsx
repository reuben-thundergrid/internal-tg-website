import React, {CSSProperties} from "react";
import st1step5Gif from "../../Gif/st1step5.gif";

import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import StepHeader from "../../Components/StepHeader.tsx"

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

const St1step5 = (props: {
  step: TStep;
  wizard: IWizard;
}) => {

  const nextButtonBox : CSSProperties = {
    width: "100%",
    margin: "0",
    fontSize: "1.5em",
    fontWeight: "700"
  };

  const nextContainer : CSSProperties = {
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    width: "12%"
  };

  return (
    <>
    <StepHeader>specify public or private charger</StepHeader>
    <h2 style={{color: "white", gridRowStart: 3, gridColumnStart: 1, gridColumnEnd: 3, textAlign: "center"}}>Specify in Custom Field "Access Type"</h2>
    <div style={{gridArea: "2/1/3/3", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <img style={{margin: "1em", borderRadius: "1em"}} src={st1step5Gif} alt="ClickUp GIF" />
    </div>
    <h3 style={{color: "white", gridRowStart: 4, gridColumnStart: 1, gridColumnEnd: 3, textAlign: "center"}}>Select Option to Continue</h3>
    <div style={{paddingBottom: "5em", color: "white", gridRowStart: 5, gridColumnStart: 1, gridColumnEnd: 3, display: "flex", flexDirection: "row", justifyContent: "center", textAlign: "center", gap: "1em"}}>
      <div>
        <Button variant="contained" endIcon={<ArrowForwardIcon />} style={{...nextButtonBox, backgroundColor: "#18A98C"}} onClick={() => props.wizard.goToStep("pub1step1")}>Public</Button>
        <p>Public charger</p>
      </div>
      <div>
        <Button variant="contained" endIcon={<ArrowForwardIcon />} style={{...nextButtonBox, backgroundColor: "#E50000"}} onClick={() => props.wizard.goToStep("prv1step1")}>Private Office</Button>
        <p>All other commercial installs</p>
      </div>
      <div>
        <Button variant="contained" endIcon={<ArrowForwardIcon />} style={{...nextButtonBox, backgroundColor: "#FF7800"}} onClick={() => props.wizard.goToStep("prv1step1")}>Private Home</Button>
        <p>Client's home charging program or domestic install</p>
      </div>
    </div>
  </>
  );
};

export default St1step5;
