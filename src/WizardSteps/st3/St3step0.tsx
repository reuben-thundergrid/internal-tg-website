import React from "react";

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

export default (props: {
  step: TStep;
  wizard: IWizard;
}) => {
  return (
    <>
        <h1>Create new Ocean connection in dormant</h1>
        <button onClick={() => props.wizard.nextStep()}>Next</button>
    </>
  );
};

