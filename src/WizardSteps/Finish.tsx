import React from "react";
import finishGif from "../Gif/finish.gif";

import Button from '@mui/material/Button';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import StepHeader from "../Components/StepHeader.tsx"

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

export default (props: {
  step: TStep;
  wizard: IWizard;
}) => {

  const finishWords = [
    "finish",         // English
    "terminar",       // Spanish
    "finir",          // French
    "beenden",        // German
    "finire",         // Italian
    "terminar",       // Portuguese
    "закончить",      // Russian
    "完成",           // Chinese (Mandarin)
    "終わる",         // Japanese
    "انتهى",         // Arabic
    "समाप्त",        // Hindi
    "끝내다",         // Korean
    "bitirmek",       // Turkish
    "afronden",       // Dutch
    "avsluta",         // Swedish
    "mutu"          //Maori
  ];

  function getRandomWord(wordsArray: string[]): string {
    const randomIndex: number = Math.floor(Math.random() * wordsArray.length);
    return wordsArray[randomIndex];
  }
  const randomWord: string = getRandomWord(finishWords);


  return (
    <>
      <StepHeader>{randomWord}</StepHeader>
      <div style={{display: "flex", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
        <img style={{gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 2, gridColumnEnd: 3, margin: "1em", borderRadius: "1em"}} src={finishGif} />
      </div>
      <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}>
        <ul style={{color: "white", fontSize: "4em", marginLeft: "0.4em"}}>
          <li>Move the Sales Pipeline task into the <b>Tender</b> status</li>
          <li>Sit Back and Relax! You're all done!</li>
        </ul>
      </div>
    </>
  );
};

