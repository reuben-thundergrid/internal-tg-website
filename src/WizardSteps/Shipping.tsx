import React from "react";

import StepHeader from "../Components/StepHeader.tsx";

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

export default (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
    <>
    <StepHeader>specify shipping</StepHeader>
    <div style={{display: "flex", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
      {/* <img style={{gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 2, gridColumnEnd: 3, margin: "1em"}} src={createGif}/> */}
    </div>
    <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}> {/*info*/}
      <ul style={{color: "white", fontSize: "4em", marginLeft: "0.4em"}}>
        <li>Step 1</li>
        <li>Step 2</li>
        <li style={{border: "1px solid red", borderRadius: "15px", paddingLeft: "1em", paddingBottom: "0.2em"}}>Important Step</li>
      </ul>
    </div>
  </>
  );
};

