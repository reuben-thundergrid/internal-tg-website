import React from "react";
import invoiceGif from "../Gif/invoice.gif";


import Button from '@mui/material/Button';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";
export default (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
    <div style={{
      display: "grid", 
      gridTemplateColumns: "auto, auto",
      gridTemplateRows: "auto, auto, auto, 1em"
    }}>
    <h1 style={{color: "white", gridRowStart: 1, gridColumnStart: 1, gridColumnEnd: 3, textAlign: "center"}}>specify invoice</h1>
    <div style={{display: "flex", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
        <img style={{gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 2, gridColumnEnd: 3, margin: "1em"}} src={invoiceGif}/>
      </div>
    <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}> {/*info*/}
      <ol style={{color: "white", fontSize: "5em"}}>
        <li>Paste the URL to the invoice in the custom field</li>
        <li>Make sure the invoice is accurate as this will determine what items are shipped</li>
        <li>For home charging programs use the format ```thundergrid.click/ko``` in the invoice custom field</li>
      </ol>
    </div>
    <div style={{display: "flex", justifyContent: "center", gridRowStart: 4, gridColumnStart: 1, gridColumnEnd: 3}}>
      <Button variant="outlined" endIcon={<KeyboardBackspaceIcon />} style={{margin: "1em"}} onClick={() => props.wizard.previousStep()}>Back Step</Button>
      <Button variant="outlined" endIcon={<ArrowForwardIcon />} style={{margin: "1em"}} onClick={() => props.wizard.nextStep()}>Next Step</Button>
    </div>
  </div>
  );
};

