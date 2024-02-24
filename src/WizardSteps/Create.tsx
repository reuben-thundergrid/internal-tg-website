import React from "react";
import createGif from "../Gif/create.gif";

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
      <h1 style={{color: "white", gridRowStart: 1, gridColumnStart: 1, gridColumnEnd: 3, textAlign: "center"}}>create a task</h1>
      <div style={{display: "flex", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
        <img style={{gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 2, gridColumnEnd: 3, margin: "1em"}} src={createGif}/>
      </div>
      <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}> {/*info*/}
        <ul style={{color: "white", fontSize: "4em", marginLeft: "0.4em"}}>
          <li>Create a new task in the sales pipeline</li>
          <li>Make the name of the task the same as the deal in Hubspot</li>
          <li style={{border: "1px solid red", borderRadius: "15px", paddingLeft: "1em", paddingBottom: "0.2em"}}>Assign yourself to the task</li>
        </ul>
        <Button variant="contained" endIcon={<OpenInNewIcon />} style={{width: "auto", margin: "1em", fontSize: "1.5em", fontWeight: "700"}} onClick={() => window.open("https://app.clickup.com/6958308/v/l/6-901601362733-1")}>Open Clickup</Button>
      </div>
    </>
  );
};

