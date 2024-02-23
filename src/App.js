import "./App.css"

import {useWizard} from "use-wizard";
import WizardSteps from './WizardSteps.tsx';
import CardComponent from './CardComponent.tsx';

const App = () => {
  const path = ["create", "invoice", "sale", {
    "st1": ["st1step0", "D", "E"],
    "st2": ["st2step1", "st2step2"],
    "st3": ["st3step0", "st3step1"]
  }, "shipping", "finish"]

  const [step, wizard] = useWizard(path); 
  
  return (
    <>
      {/* <p>Hello</p> */}
      <WizardSteps {...{ step, wizard}}/>
      {/* {step !== "create" ? <CardComponent header="Back" work={() => wizard.previousStep()} /> : <></>}
      {!["create", "invoice"].includes(step) ? <CardComponent header="Restart" work={() => wizard.initialize()} /> : <></>} */}
      {/* <label className="day-night">
        <input type="checkbox" checked />
        <div></div>
      </label> */}
    </>
  );
};

export default App;
