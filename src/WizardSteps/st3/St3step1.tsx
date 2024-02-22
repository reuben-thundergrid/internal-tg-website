import React from "react";

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

export default (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
    <>
        <h1>OPTIONAL: Follow sale type 1 steps and do as many as possible</h1>
        <button onClick={() => props.wizard.nextStep()}>Skip</button>
        <button onClick={() => props.wizard.goToStep("st1step0")}>New Ocean Connection</button>
    </>
  );
};

