import React from "react";

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

//Steps
import Create from "./WizardSteps/Create.tsx";
import Invoice from "./WizardSteps/Invoice.tsx";
import Sale from "./WizardSteps/Sale.tsx";
import St2step1 from "./WizardSteps/st2/St2step1.tsx";
import St2step2 from "./WizardSteps/st2/St2step2.tsx";
import St3step0 from "./WizardSteps/st3/St3step0.tsx";
import Shipping from "./WizardSteps/Shipping.tsx";
import Finish from "./WizardSteps/Finish.tsx";
import Priority from "./WizardSteps/Priority.tsx";
import St2step3 from "./WizardSteps/st2/St2step3.tsx";
import St1step0 from "./WizardSteps/st1/St1step0.tsx";
import St1step1 from "./WizardSteps/st1/St1step1.tsx";
import St1step2 from "./WizardSteps/st1/St1step2.tsx";
import Lm1step0 from "./WizardSteps/st1/lm1/Lm1step0.tsx";
import Lm1step1 from "./WizardSteps/st1/lm1/Lm1step1.tsx";
import Lm1step2 from "./WizardSteps/st1/lm1/Lm1step2.tsx";
import St1step3 from "./WizardSteps/st1/St1step3.tsx";
import St1step4 from "./WizardSteps/st1/St1step4.tsx";
import Phz3step1 from "./WizardSteps/st1/phz3/Phz3step1.tsx";
import St1step5 from "./WizardSteps/st1/St1step5.tsx";

export default (props: {
    step: TStep;
    wizard: IWizard;
  }) => {
    switch (props.step) {
        //Start
        case "create":
          return <Create {...props} />;
        case "invoice":
            return <Invoice {...props} />;
        case "sale":
            return <Sale {...props} />;
        
        //Sale Type 1
        case "st1step0":
            return <St1step0 {...props}/>;
        case "st1step1":
            return <St1step1 {...props}/>;
        case "st1step2":
            return <St1step2 {...props}/>;

            //Load management 1
            case "lm1step0":
                return <Lm1step0 {...props}/>;
            case "lm1step1":
                return <Lm1step1 {...props}/>;
            case "lm1step2":
                return <Lm1step2 {...props}/>;
        
        case "st1step3":
            return <St1step3 {...props}/>;
        case "st1step4":
            return <St1step4 {...props}/>;

            //Phase Rotations
            case "phz3step1":
                return <Phz3step1 {...props}/>

        case "st1step5":
            return <St1step5 {...props} />

        //Sale Type 2
        case "st2step1":
            return <St2step1 {...props} />;
        case "st2step2":
            return <St2step2 {...props} />;
        case "st2step3":
            return <St2step3 {...props} />;

        //Salte Type 3
        case "st3step0":
            return <St3step0 {...props} />;

        //End
        case "shipping":
            return <Shipping {...props} />
        case "priority":
            return <Priority {...props} />
        case "finish":
            return <Finish {...props} />
        
        //Edge Cases
        case "hop1":
            return <>{
                // console.log(props.wizard.history)
                props.wizard.goToStep("shipping")
            }</>
        case  "err":
            return <h1 style={{color: "white", display: "flex", justifyContent: "center", alignItems: "center"}}>please talk to some in network ops before proceeding</h1>
        default:
            return <p style={{color: "white"}}>Step does not exist</p>;
    }
};