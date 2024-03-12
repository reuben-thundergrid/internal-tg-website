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
import Pub1step1 from "./WizardSteps/st1/pub1/Pub1step1.tsx";
import Pub1step2 from "./WizardSteps/st1/pub1/Pub1step2.tsx";
import Prv1step1 from "./WizardSteps/st1/prv1/Prv1step1.tsx";
import Prv1step2 from "./WizardSteps/st1/prv1/Prv1step2.tsx";
import Con1step1 from "./WizardSteps/st1/con1/Con1step1.tsx";
import Sim1step1 from "./WizardSteps/st1/sim1/Sim1step1.tsx";
import Del1step1 from "./WizardSteps/st1/del1/Del1step1.tsx";
import St1step6 from "./WizardSteps/st1/St1step6.tsx";
import St1step7 from "./WizardSteps/st1/St1step7.tsx";
import St1step8 from "./WizardSteps/st1/St1step8.tsx";
import St1step9 from "./WizardSteps/st1/St1step9.tsx";

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

            //Access Type
            case "pub1step1":
                return <Pub1step1 {...props}/>
            case "pub1step2":
                return <Pub1step2 {...props}/>
            case "prv1step1":
                return <Prv1step1 {...props}/>
            case "prv1step2":
                return <Prv1step2 {...props}/>
        
        case "st1step6":
            return <St1step6 {...props} />
        case "st1step7":
            return <St1step7 {...props} />
        case "st1step8":
            return <St1step8 {...props} />

            //con, sim, del
            case "con1step1":
                return <Con1step1 {...props} />
            case "sim1step1":
                return <Sim1step1 {...props} />
            case "del1step1":
                return <Del1step1 {...props} />

        case "st1step9":
            return <St1step9 {...props} />

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
            return <>
                {/* {console.log(props.wizard.history)} */}
                {props.wizard.goToStep("shipping")}
            </>
        case  "err":
            return <h1 style={{color: "white", display: "flex", justifyContent: "center", alignItems: "center"}}>please talk to some in network ops before proceeding</h1>
        default:
            return <p style={{color: "white"}}>Step does not exist</p>;
    }
};