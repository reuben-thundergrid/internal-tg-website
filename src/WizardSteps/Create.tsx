import React from "react";
import "../Card.css"
import createGif from "../Gif/create.gif";


import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";
import CardComponent from "../CardComponent.tsx";
import MinCardComponent from "../MinCardComponent.tsx";
import TitleComponent from "../TitleComponent.tsx";

export default (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  
  return (
    <>
      <img src={createGif}/>
      <div className="grid">
        <CardComponent 
          work={() => props.wizard.nextStep()}
          header="Create a Task in the Sales Pipeline"
          paragraph="Make the name the same as the task in Hubspot"
        /> 
        <CardComponent 
          work={() => window.open("https://app.clickup.com/6958308/v/l/6-901601362733-1")}
          header="Open Clickup List"
        />
        <MinCardComponent
          work={() => props.wizard.nextStep()}
          header="Next"
        />
      </div>
    </>
  );
};

