import React, {CSSProperties} from "react";
import st1step2Gif from "../../Gif/st1step2.gif";

import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import StepHeader from "../../Components/StepHeader.tsx"

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

const St1step2 = (props: {
  step: TStep;
  wizard: IWizard;
}) => {

  const nextButtonBox : CSSProperties = {
    width: "auto",
    margin: "1em",
    fontSize: "1.5em",
    fontWeight: "700"
  };

  const firstP : CSSProperties = {
    fontWeight: 800
  }

  return (
    <>
    <StepHeader>is load management required?</StepHeader>
    <h2 style={{color: "white", gridRowStart: 3, gridColumnStart: 1, gridColumnEnd: 3, textAlign: "center"}}>Specify in Custom Field "Load Management Type"</h2>
    <div style={{gridArea: "2/1/3/3", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <img style={{margin: "1em", borderRadius: "1em"}} src={st1step2Gif} alt="ClickUp GIF" />
    </div>
    <h3 style={{color: "white", gridRowStart: 4, gridColumnStart: 1, gridColumnEnd: 3, textAlign: "center"}}>Select Option to Continue</h3>
    <div style={{color: "white", gridRowStart: 5, gridColumnStart: 1, gridColumnEnd: 3, display: "flex", flexDirection: "row", justifyContent: "center", textAlign: "center", gap: "1em"}}>
      <div>
        <Button variant="contained" endIcon={<ArrowForwardIcon />} 
          style={{...nextButtonBox, backgroundColor: "#3397DD"}} 
          onClick={() => props.wizard.goToStep("non1step2")}>LDC
        </Button>
        <p style={{...firstP}}>Local Dynamic Cluster</p>
        <p>no energy meter, chargers are networked together</p>
      </div>
      <div>
        <Button variant="contained" endIcon={<ArrowForwardIcon />} 
          style={{...nextButtonBox, backgroundColor: "#7045E6"}} 
          onClick={() => props.wizard.goToStep("loc1step1")}>LEM
        </Button>
        <p style={{...firstP}}>Local Energy Meter</p>
        <p>energy meter installed at switchboard</p>
      </div>
      <div>
        <Button variant="contained" endIcon={<ArrowForwardIcon />} 
          style={{...nextButtonBox, backgroundColor: "#D373E3"}} 
          onClick={() => props.wizard.goToStep("non1step1")}>LDC Combo
        </Button>
        <p style={{...firstP}}>Local Dynamic Cluster + Static</p>
        <p>no energy meter, mixture of chargers networked together with ones that are not</p>
      </div>
      <div>
        <Button variant="contained" endIcon={<ArrowForwardIcon />} 
          style={{...nextButtonBox, backgroundColor: "#749FE6"}} 
          onClick={() => props.wizard.goToStep("mix1step1")}>LEM Combo
        </Button>
        <p style={{...firstP}}>Local Energy Meter + Static</p>
        <p>energy meter installed at switchboard & mixture of chargers networked together with ones that are not</p>
      </div>
      <div>
        <Button variant="contained" endIcon={<ArrowForwardIcon />} 
          style={{...nextButtonBox, backgroundColor: "#667684"}} 
          onClick={() => props.wizard.goToStep("non1step1")}>Static
        </Button>
        <p style={{...firstP}}>Static Limit</p>
        <p>chargers are not networked together, no dynamic flexing</p>
      </div>
      <div>
        <Button variant="contained" endIcon={<ArrowForwardIcon />} 
          style={{...nextButtonBox, backgroundColor: "#29B964"}} 
          onClick={() => props.wizard.goToStep("cld1step1")}>CEM
        </Button>
        <p style={{...firstP}}>Cloud Energy Meter</p>
      </div>
      <div>
        <Button variant="contained" endIcon={<ArrowForwardIcon />} 
          style={{...nextButtonBox, backgroundColor: "#CF4900"}} 
          onClick={() => props.wizard.goToStep("cld1step1")}>EVLM2
        </Button>
        <p style={{...firstP}}>NHP EVLM2</p>
      </div>
    </div>
  </>
  );
};

export default St1step2;