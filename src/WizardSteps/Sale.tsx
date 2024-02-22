import React from "react";
import "../Card.css"
import saleType from "../Gif/saleType.gif";


import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";
import CardComponent from "../CardComponent.tsx";

export default (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
    <>
    <img src={saleType}/>
    <div className="grid">
      <CardComponent header="Seelct a Sale Type"/>
      <CardComponent header="New Ocean Connection" work={() => props.wizard.goToStep("st1")}/>
      <CardComponent header="Modify Ocean Connection" work={() => props.wizard.goToStep("st2step1")}/>
      <CardComponent header="Future Ocean Connection" work={() => props.wizard.goToStep("st3step0")}/>
      <CardComponent header="Simple Sale" work={() => props.wizard.goToStep("shipping")}/>
    </div>
    </>
  );
};

