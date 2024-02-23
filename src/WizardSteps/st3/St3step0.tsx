import React from "react";
import St3step0 from "../../Gif/St3step0.gif";

import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

export default (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
    <div style={{
      display: "grid"
    }}>
    <h1 style={{color: "white", gridRowStart: 1, gridColumnStart: 1, gridColumnEnd: 3, textAlign: "center"}}>create a subtask inside <i>Dormant</i></h1>
    <div style={{display: "flex", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
      <img style={{gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 2, gridColumnEnd: 3, margin: "1em"}} src={St3step0}/>
    </div>
    <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}> {/*info*/}
      <ul style={{color: "white", fontSize: "4em", marginLeft: "0.4em"}}>
        <li>Create a subtask in the Network Ops Space under Ocean Connections</li>
        <li>The name of the task will be the name created in Ocean</li>
        <li>This task will be in the <i>Dormant</i> list</li>
        <li>OPTIONAL: Fill out as much info about the Ocean Connection as possible</li>
      </ul>
      <Button variant="contained" endIcon={<OpenInNewIcon />} style={{width: "auto", margin: "1em", fontSize: "1.5em", fontWeight: "700"}} onClick={() => props.wizard.goToStep("st1")}>Follow Steps for new Ocean Connection</Button>
    </div>
    //position: "fixed", bottom: 0, 
    <div style={{display: "flex", justifyContent: "center", gridRowStart: 3, gridColumnStart: 1, gridColumnEnd: 3}}>
      <Button variant="outlined" endIcon={<ArrowForwardIcon />} style={{margin: "1em"}} onClick={() => props.wizard.nextStep()}>Next Step</Button>
    </div>
  </div>
  );
};

