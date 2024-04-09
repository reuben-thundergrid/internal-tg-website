import React from "react";
import invoiceGif from "../Gif/invoice.gif";
import StepHeader from "../Components/StepHeader.tsx"

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

export default (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
  <>
    <StepHeader>specify invoice</StepHeader>
    <div style={{display: "flex", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
        <img style={{gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 2, gridColumnEnd: 3, margin: "1em", borderRadius: "1em"}} src={invoiceGif}/>
      </div>
    <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}> {/*info*/}
      <ul style={{color: "white", fontSize: "4em", marginLeft: "0.4em"}}>
        <li>Paste the URL or the invoice into the invoice custom field</li>
        <li>Make sure the invoice is accurate as this will determine what items are shipped</li>
        <li>For home charging programs use the format <i>thundergrid.click/ko</i> in the invoice custom field</li>
      </ul>
    </div>
  </>
  );
};

