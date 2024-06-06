import React from "react";
import { CSSProperties } from 'react';
import saleType from "../Gif/saleType.gif";
import StepHeader from "../Components/StepHeader.tsx";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

const Sale = (props: {
  step: TStep;
  wizard: IWizard;
}) => {

  const containerStyles: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gridRowStart: 5,
    gridColumn: "1/3",
  };
  
  const innerContainerStyles: CSSProperties = {
    color: "white",
    display: "grid",
    gap: "1em",
    marginLeft: "1em",
    marginRight: "1em",
    width: "70%",
    marginBottom: "7em"
  };
  
  const buttonStyles: CSSProperties = {
    width: "auto",
    fontSize: "1.5em",
    fontWeight: "700"
  };
  
  const paragraphStyles: CSSProperties = {
    width: "80%",
    margin: "auto",
    textAlign: "center"
  };
  

  return (
    <>
    <StepHeader>select sale type</StepHeader>
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", gridColumnStart: 1, gridColumnEnd: 3}}>
      <div style={{color: "white", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h3 style={{margin: "0.2em"}}>Q: What Defines a Ocean Connection?</h3>
        <h3 style={{backgroundColor: "rgba(0, 187, 20, 0.31)", borderRadius: "0.3em", margin: "0.2em", padding: "0.2em"}}>A: An Ocean Connection represents one power distribution</h3>
        <ul style={{textAlign: "center", listStyle: "none", gap: "0", fontSize: "1em"}}>
          <li>Each local load management cluster will have its own Ocean Connection</li>
          <li>DC Chargers can be added to existing Ocean Connections regardless of which power distribution they are on</li>
          <li>One Sales Marina task can have multiple Ocean Connections</li>
        </ul>
      </div>
        <img style={{borderRadius: "1em"}} src={saleType} alt="ClickUp GIF" />
    </div>

    <h2 style={{color: "white", gridRowStart: 3, gridColumnStart: 1, gridColumnEnd: 3, textAlign: "center", marginBottom: "0.5em"}}>Select Sale Type in Clickup Task Custom Field</h2>
    <h3 style={{color: "white", gridRowStart: 4, gridColumnStart: 1, gridColumnEnd: 3, textAlign: "center", marginTop: "0.1em"}}>Click Choosen Sale Type to Continue</h3>

<div style={containerStyles}>
  <div style={innerContainerStyles}>
    <Button
      variant="contained"
      endIcon={<ArrowForwardIcon />}
      style={{ ...buttonStyles, backgroundColor: "#1BBC9C", gridArea: "1/1/2/2" }}
      onClick={() => props.wizard.goToStep("st1step0")}
    >
      New Ocean Connection
    </Button>
    <p style={{ ...paragraphStyles, gridArea: "2/1/3/2" }}>
      for chargers that don't have an existing power distribution in Ocean
    </p>
    <Button
      variant="contained"
      endIcon={<ArrowForwardIcon />}
      style={{ ...buttonStyles, backgroundColor: "#7C4DFF", gridArea: "1/2/2/3" }}
      onClick={() => props.wizard.goToStep("st2step1")}
    >
      Modify Ocean Connection
    </Button>
    <p style={{ ...paragraphStyles, gridArea: "2/2/3/3" }}>
      for when adding chargers to an existing ocean connection
    </p>
    <Button
      variant="contained"
      endIcon={<ArrowForwardIcon />}
      style={{ ...buttonStyles, backgroundColor: "#3397DD", gridArea: "1/3/2/4" }}
      onClick={() => props.wizard.goToStep("st3step0")}
    >
      Future Ocean Connection
    </Button>
    <p style={{ ...paragraphStyles, gridArea: "2/3/3/4" }}>
      for chargers that there are currently no plans to connect to Ocean, Network Ops will not commission these
    </p>
    <Button
      variant="contained"
      endIcon={<ArrowForwardIcon />}
      style={{ ...buttonStyles, backgroundColor: "#5E3B23", gridArea: "1/4/2/5" }}
      onClick={() => props.wizard.goToStep("shipping")}
    >
      Simple Sale
    </Button>
    <p style={{ ...paragraphStyles, gridArea: "2/4/3/5" }}>
      not selling a charger and has nothing to do with Ocean
    </p>
  </div>
</div>;
    </>
  );
};

export default Sale;
