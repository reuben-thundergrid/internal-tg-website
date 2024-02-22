import React from "react";

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";
import Create from "./WizardSteps/Create.tsx";
import Invoice from "./WizardSteps/Invoice.tsx";
import Sale from "./WizardSteps/Sale.tsx";
import St3step0 from "./WizardSteps/st3/St3step0.tsx";
import St3step1 from "./WizardSteps/st3/St3step1.tsx";

export default (props: {
    step: TStep;
    wizard: IWizard;
  }) => {
    switch (props.step) {
        case "create":
          return <Create {...props} />;
        case "invoice":
            return <Invoice {...props} />;
        case "sale":
            return <Sale {...props} />;
        case "st3step0":
            return <St3step0 {...props} />;
        case "st3step1":
            return <St3step1 {...props} />;
        case "shipping":
            return <a>shipping</a>;
        default:
            return <>Step does not exist</>;
    }
};