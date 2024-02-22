import React from "react";
import "../Card.css";
import invoiceGif from "../Gif/invoice.gif";

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";
import CardComponent from "../CardComponent.tsx";
import MinCardComponent from "../MinCardComponent.tsx";

export default (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
    <>
      <img src={invoiceGif}/>
      <div className="grid">
        <CardComponent 
          header="Specify Invoice"
          paragraph="Add the Xero invoice to the Clickup task. Place inside the dedicated custom field"
        />
        <MinCardComponent header="Next" work={() => props.wizard.nextStep()}/>
      </div>
    </>
  );
};

