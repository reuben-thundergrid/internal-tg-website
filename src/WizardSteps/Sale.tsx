import React from "react";
import saleType from "../Gif/saleType.gif";
import StepHeader from "../Components/StepHeader.tsx";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

export default (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
    <>
    <StepHeader>select sale type</StepHeader>
    <div style={{display: "flex", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center", gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 2, gridColumnEnd: 3}}>
        <img style={{margin: "1em", borderRadius: "1em"}} src={saleType}/>
    </div>
    <div style={{color: "white", marginLeft: "1em", display: "flex", flexDirection: "column", justifyContent: "center"}}>
      <h3>What Defines a New Ocean Connection?</h3>
      <h2><u>a ocean connection represents one power distribution</u></h2>
      <ul style={{}}>
        <li>Each local load management cluster will have its own Ocean Connection</li>
        <li>If two separate clusters share the same power distribution. You are doing it wrong, that should be one cluster</li>
        <li>DC Chargers can be added to existing Ocean Connections regardless of which power distribution they are on</li>
      </ul>
    </div>
    <h2 style={{color: "white", gridRowStart: 3, gridColumnStart: 1, gridColumnEnd: 3, textAlign: "center"}}>Select Sale Type in Clickup Task Custom Field</h2>
    <h3 style={{color: "white", gridRowStart: 4, gridColumnStart: 1, gridColumnEnd: 3, textAlign: "center"}}>Click Choosen Sale Type to Continue</h3>
    <div style={{color: "white", gridRowStart: 5, gridColumnStart: 1, gridColumnEnd: 3, display: "flex", flexDirection: "row", justifyContent: "center", textAlign: "center"}}>
      {/* Need to add hover effect to buttons */}
      <div>
        <Button variant="contained" endIcon={<ArrowForwardIcon />} style={{width: "auto", margin: "1em", fontSize: "1.5em", fontWeight: "700", backgroundColor: "#1BBC9C"}} onClick={() => props.wizard.goToStep("st1step0")}>New Ocean Connection</Button>
        <p>for chargers that don't have an existing power distribution in ocean</p>
      </div>
      <div>
        <Button variant="contained" endIcon={<ArrowForwardIcon />} style={{width: "auto", margin: "1em", fontSize: "1.5em", fontWeight: "700", backgroundColor: "#7C4DFF"}} onClick={() => props.wizard.goToStep("st2step1")}>Modify Ocean Connection</Button>
        <p>for when adding chargers to an existing ocean connection</p>
      </div>
      <div>
        <Button variant="contained" endIcon={<ArrowForwardIcon />} style={{width: "auto", margin: "1em", fontSize: "1.5em", fontWeight: "700", backgroundColor: "#3397DD"}} onClick={() => props.wizard.goToStep("st3step0")}>Future Ocean Connection</Button>
        <p>for chargers that there are currently no plans to connect to Ocean</p>
      </div>
      <div>
        <Button variant="contained" endIcon={<ArrowForwardIcon />} style={{width: "auto", margin: "1em", fontSize: "1.5em", fontWeight: "700", backgroundColor: "#5E3B23"}} onClick={() => props.wizard.goToStep("shipping")}>Simple Sale</Button>
        <p>nothing to do with ocean</p>
      </div>
    </div>
    </>
  );
};

