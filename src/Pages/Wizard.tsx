import React from "react";
// eslint-disable-next-line
import { useNavigate } from "react-router-dom";
import "../App.css"

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Button from '@mui/material/Button';

import {useWizard} from "use-wizard";
import WizardSteps from '../WizardSteps.tsx';

const Wizard = () => {
  //Tree structure
  //Note: There always must be a step between two objects
  const path = ["create", "invoice", "sale", {
    //Sale Type 1
    "st1": ["st1step0", "st1step69", "st1step1", "st1step12", "st1step13", "st1step2", {
      "cld1step1": ["cld1step1", "lm1step1"],
      "loc1step1": ["loc1step1", "lm1step1"],
      "non1step1": ["non1step1", "non1step2"],
      "mix1step1": ["mix1step1", "loc1step1", "lm1step1"],
      "mix2step1": ["mix2step1", "non1step2"]
    }, "st1step3", "st1step4", {
      "phz3step1": ["phz3step1"],
      "phz2step1": ["phz2step1"]
    }, "st1step5", {
      "pub1step1": ["pub1step1"],
      "prv1step1": ["prv1step1"]
    }, "st1step6", "st1step7", "st1step8", {
      "sim1step1": ["sim1step1"],
      "con1step1": ["con1step1"],
      "del1step1": ["del1step1"]
    }, "st1step9"],

    //Sale Type 2
    "st2": ["st2step1", "st2step2", { 
      "err": ["err"], 
      "st2step3": ["st2step3"]
    }, "hop1"],

    //Sale Type 3
    "st3": ["st3step0"]
  }, "shipping", "priority", "finish"]

  const [step, wizard] = useWizard(path);

  //Depth first search
  //Returns path to current step
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

  //Returns parent array
  function getThing(arr, chain){
    if(chain.length === 0){
      return arr;
    }
    const i = chain[0];
    return getThing(arr[i], chain.slice(1));
  }

  //Function to decide if next button should be shown
  //Next button not shown if next step is an object (multichoice)
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

  // const navigate = useNavigate();

  return (
    <>
      {/* {navigate("/wizard/" + step)} */}
      {console.log(step)}
      <div style={{display: "grid"}}>
        <WizardSteps {...{ step, wizard}}/>
      </div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "center", width: "100%", position: "fixed", bottom: 0}}>
        {step !== "create" ? <Button variant="contained" endIcon={<KeyboardBackspaceIcon />} style={{margin: "1em", fontSize: "1.5em", transition: "transform 0.3s ease", backgroundColor: "#EFA00B"}} onClick={() => wizard.previousStep()}>Back Step</Button> : <></>}
        {!["create", "invoice"].includes(step.toString()) ? <Button variant="contained" endIcon={<RestartAltIcon />} style={{margin: "1em", fontSize: "1.5em", transition: "transform 0.3s ease", backgroundColor: "#EB5E55"}} onClick={() => wizard.initialize()}>Restart</Button> : <></>}
        {showNextButton() ? <Button variant="contained" color="success" endIcon={<ArrowForwardIcon />} style={{margin: "1em", fontSize: "1.5em", transition: "transform 0.3s ease"}} onClick={() => wizard.nextStep()}>Next Step</Button> : <></>}
      </div>
    </>
  );
};

export default Wizard;
