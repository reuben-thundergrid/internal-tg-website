import React from "react";
import { useState, useEffect } from "react";
import "./App.css"

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HomeIcon from '@mui/icons-material/Home';
import Button from '@mui/material/Button';

import {useWizard} from "use-wizard";
import WizardSteps from './WizardSteps.tsx';

const App = () => {
  //Tree structure
  const path = ["create", "invoice", "sale", {
    "st1": ["st1step0", "D", "E"],
    "st2": ["st2step1", "st2step2", { 
      "err": ["err"], 
      "st2step3": ["st2step3"]
    }, "test"],
    "st3": ["st3step0"]
  }, "shipping", "priority", "finish"]

  const [step, wizard] = useWizard(path);

  //Depth first search
  function depthFistSearch(arr, item){
    for (let i = 0; i < arr.length; i++){
      if(arr[i] === item){
        return [i];
      }else if(typeof arr[i] === "object"){
        for (let key in arr[i]){
          const deeper = depthFistSearch(arr[i][key], item);
          if(deeper.length !== 0){
            return [i, key, ...deeper];
          }
        }
      }
    }
    return [];
  }

  function getThing(arr, chain){
    if(chain.length === 0){
      return arr;
    }
    const i = chain[0];
    return getThing(arr[i], chain.slice(1));
  }

  function showNextButton(){
    if(step === "finish"){
      return false;
    }
    const search = depthFistSearch(path, step);
    const parentArr = getThing(path, search.slice(0, search.length - 1));
    const currentIndex = search.at(-1);
    const nextItem = parentArr[currentIndex + 1];
    if(typeof nextItem === "object"){
      return false;
    }
    return true;
  }

  return (
    <>
      <div style={{display: "grid"}}>
        <WizardSteps {...{ step, wizard}}/>
      </div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "center", position: "fixed", bottom: 0}}>
        {step !== "create" ? <Button variant="outlined" endIcon={<KeyboardBackspaceIcon />} style={{margin: "1em"}} onClick={() => wizard.previousStep()}>Back Step</Button> : <></>}
        {!["create", "invoice"].includes(step.toString()) ? <Button variant="outlined" endIcon={<HomeIcon />} style={{margin: "1em"}} onClick={() => wizard.initialize()}>Home</Button> : <></>}
        {showNextButton() ? <Button variant="outlined" endIcon={<ArrowForwardIcon />} style={{margin: "1em"}} onClick={() => wizard.nextStep()}>Next Step</Button> : <></>}
      </div>
    </>
  );
};

export default App;
