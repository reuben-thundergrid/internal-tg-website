import React from "react";
import { CSSProperties } from 'react';
import st1step8Gif from "../../Gif/st1step8.gif"

import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import StepHeader from "../../Components/StepHeader.tsx"

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

const St1step8 = (props: {
  step: TStep;
  wizard: IWizard;
}) => {

  const containerStyles: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gridRowStart: 5,
    gridColumn: "1/3"
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
    <StepHeader>specify charger connetivity method</StepHeader>
    <h2 style={{color: "white", gridRowStart: 3, gridColumnStart: 1, gridColumnEnd: 3, textAlign: "center"}}>Specify in Custom Field "Charger Connectivity"</h2>  
    <div style={{gridArea: "2/1/3/3", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <img style={{margin: "1em", borderRadius: "1em"}} src={st1step8Gif} alt="ClickUp GIF" />
    </div>
    <h3 style={{color: "white", gridRowStart: 4, gridColumnStart: 1, gridColumnEnd: 3, textAlign: "center"}}>Select Option to Continue</h3>

    <div style={containerStyles}>
      <div style={innerContainerStyles}>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          style={{ ...buttonStyles, backgroundColor: "#7C4DFF", gridArea: "1/1/2/2" }}
          onClick={() => props.wizard.goToStep("sim1step1")}
        >
          SIM in charger
        </Button>
        <p style={{ ...paragraphStyles, gridArea: "2/1/3/2" }}>a lte capable charger with a sim inside</p>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          style={{ ...buttonStyles, backgroundColor: "#BF55EC", gridArea: "1/2/2/3" }}
          onClick={() => props.wizard.goToStep("sim1step1")}
        >
          Wifi Existing
        </Button>
        <p style={{ ...paragraphStyles, gridArea: "2/2/3/3" }}>
          connecting to an exisitng wifi network not managed by Thundergrid
        </p>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          style={{ ...buttonStyles, backgroundColor: "#3397DD", gridArea: "1/3/2/4" }}
          onClick={() => props.wizard.goToStep("del1step1")}
        >
          Multiple
        </Button>
        <p style={{ ...paragraphStyles, gridArea: "2/3/3/4" }}>
          multiple options selected
        </p>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          style={{ ...buttonStyles, backgroundColor: "#2ECD6F", gridArea: "1/4/2/5" }}
          onClick={() => props.wizard.goToStep("con1step1")}
        >
          WIFI Thundergrid
        </Button>
        <p style={{ ...paragraphStyles, gridArea: "2/4/3/5" }}>
          a wifi network managed by thundergrid
        </p>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          style={{ ...buttonStyles, backgroundColor: "#04A9F4", gridArea: "1/5/2/6" }}
          onClick={() => props.wizard.goToStep("con1step1")}
        >
          Gateway/Etherent
        </Button>
        <p style={{ ...paragraphStyles, gridArea: "2/5/3/6" }}>
          charger is connected with a network cable
        </p>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          style={{ ...buttonStyles, backgroundColor: "#E50000", gridArea: "1/6/2/7" }}
          onClick={() => props.wizard.goToStep("con1step1")}
        >
          Bespoke
        </Button>
        <p style={{ ...paragraphStyles, gridArea: "2/6/3/7" }}>
          a bespoke solution
        </p>
      </div>
    </div>;
  </>
  );
};

export default St1step8;