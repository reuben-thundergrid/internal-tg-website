import React from "react";
import st1step3Gif from "../../Gif/st1step3.gif";

import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import StepHeader from "../../Components/StepHeader.tsx"

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

export default (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
    <>
      <StepHeader>specify cluster limit / ev-db rating</StepHeader>
      <div style={{display: "flex", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
        <img style={{gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 2, gridColumnEnd: 3, margin: "1em", borderRadius: "1em"}} src={st1step3Gif} />
      </div>
      <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}>
        <ul style={{color: "white", fontSize: "4em", marginLeft: "0.4em"}}>
          <li>Enter cluster limit into custom field "Cluster Limit"</li>
          <li>This will be the chargers direct upstream distribution board rating in amps</li>
        </ul>
      </div>
    </>
  );
};

