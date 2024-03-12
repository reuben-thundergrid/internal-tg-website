import React from "react";
import St3step0 from "../../Gif/st3step0.gif";
import StepHeader from "../../Components/StepHeader.tsx";

import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

export default (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
    <>
    <StepHeader>create a subtask inside <i>Dormant</i></StepHeader>
    <div style={{display: "flex", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
      <img style={{gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 2, gridColumnEnd: 3, margin: "1em", borderRadius: "1em"}} src={St3step0}/>
    </div>
    <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}> {/*info*/}
      <ul style={{color: "white", fontSize: "3em", marginLeft: "0.4em"}}>
        <li>Create a task in the Network Ops Space under Ocean Connections</li>
        <li>The name of the task will be the name created in Ocean</li>
        <li>This task will be in the <i>Dormant</i> list</li>
        <li>Mention this task under "Ocean Connection(s)" in the Sales task</li>
        <li>OPTIONAL: Fill out as much info about the Ocean Connection as possible</li>
      </ul>
      <Button variant="contained" endIcon={<OpenInNewIcon />} style={{width: "auto", margin: "1em", fontSize: "1.5em", fontWeight: "700"}} onClick={() => props.wizard.goToStep("st1step0")}>Follow Steps for new Ocean Connection</Button>
    </div>
  </>
  );
};

