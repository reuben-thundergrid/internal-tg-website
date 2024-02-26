import React from "react";
import "./App.css"

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';

import {useWizard} from "use-wizard";
import WizardSteps from './WizardSteps.tsx';

const App = () => {
  const path = ["create", "invoice", "sale", {
    "st1": ["st1step0", "D", "E"],
    "st2": ["st2step1", "st2step2", { 
      "err": ["err"], 
      "st2step3": ["st2step3"]
    }, "test"],
    "st3": ["st3step0"]
  }, "shipping", "finish"]

  const [step, wizard] = useWizard(path);
  // console.log(path);
  //Find current position in arrary based on step
  //If next item in array is an object hide button

  function findPositionAndCheckNext<T>(arr: T[], value: T): boolean {
    const position = arr.indexOf(value);
    if (position !== -1 && position + 1 < arr.length) {
      return typeof arr[position + 1] === 'object';
    }
    return false;
  }

  return (
    <>
      <div style={{display: "grid"}}>
        <WizardSteps {...{ step, wizard}}/>
      </div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "center", position: "fixed", bottom: 0}}>
        {step !== "create" ? <Button variant="outlined" endIcon={<KeyboardBackspaceIcon />} style={{margin: "1em"}} onClick={() => wizard.previousStep()}>Back Step</Button> : <></>}
        {!["create", "invoice"].includes(step.toString()) ? <Button variant="outlined" endIcon={<HomeIcon />} style={{margin: "1em"}} onClick={() => wizard.initialize()}>Home</Button> : <></>}
        {!findPositionAndCheckNext(path, step.toString()) ? <Button variant="outlined" endIcon={<ArrowForwardIcon />} style={{margin: "1em"}} onClick={() => wizard.nextStep()}>Next Step</Button> : <></>}
        {/* {step !== "finish" ? <Button variant="outlined" endIcon={<ArrowForwardIcon />} style={{margin: "1em"}} onClick={() => wizard.nextStep()}>Next Step</Button> : <></>} */}
      </div>
    </>
  );
};

export default App;