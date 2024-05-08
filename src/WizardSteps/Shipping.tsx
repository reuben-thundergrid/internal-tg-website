import React from "react";
import shippingGif from "../Gif/shipping.gif";
import shipping2Gif from "../Gif/shipping2.gif";


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
    <div style={{display: "flex", flexDirection: "column", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
      <img style={{gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 2, gridColumnEnd: 3, margin: "1em", borderRadius: "1em"}} src={shippingGif}/>
      <img style={{gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 2, gridColumnEnd: 3, margin: "1em", borderRadius: "1em"}} src={shipping2Gif}/>
    </div>
    <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}> {/*info*/}
      <ul style={{color: "white", fontSize: "4em", marginLeft: "0.4em"}}>
        <li>Specify the <b>Delivery Address</b> in description of the Sales Marina task</li>
        <li>If shipping to the installer & they are specified in the Ocean connection. Simply put "Shipping to installer"</li>
      </ul>
    </div>
  </>
  );
};

