import React from "react";

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";
import Create from "./WizardSteps/Create.tsx";
import Invoice from "./WizardSteps/Invoice.tsx";
import Sale from "./WizardSteps/Sale.tsx";
import St2step1 from "./WizardSteps/st2/St2step1.tsx";
import St2step2 from "./WizardSteps/st2/St2step2.tsx";
import St3step0 from "./WizardSteps/st3/St3step0.tsx";
import Shipping from "./WizardSteps/Shipping.tsx";
import Finish from "./WizardSteps/Finish.tsx";
import Priority from "./WizardSteps/Priority.tsx";

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

        case "st2step1":
            return <St2step1 {...props} />;
        case "st2step2":
            return <St2step2 {...props} />;


        case "st3step0":
            return <St3step0 {...props} />;


        case "shipping":
            return <Shipping {...props} />
        case "priority":
            return <Priority {...props} />
        case "finish":
            return <Finish {...props} />
        
        case  "err":
            return <p style={{color: "white"}}>Please talk to some in network ops</p>
        default:
            return <p style={{color: "white"}}>Step does not exist</p>;
    }
};