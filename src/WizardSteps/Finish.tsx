import React from 'react';
import finishGif from "../Gif/finish.gif";

import useWindowSize from "react-use/lib/useWindowSize"
import Confetti from "react-confetti"

import StepHeader from "../Components/StepHeader.tsx"

import { IWizard } from "use-wizard/lib/cjs/useWizard/types/IWizard";
import { TStep } from "use-wizard/lib/cjs/useWizard/types/TStep";

const Finish = (props: {
  step: TStep;
  wizard: IWizard;
}) => {

  const { width, height } = useWindowSize();

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
      <Confetti width={width} height={height}/>
      <StepHeader>{randomWord}</StepHeader>
      <div style={{display: "flex", marginLeft: "auto", alignContent: "center", justifyContent: "center", alignSelf: "center"}}>
        <img style={{gridRowStart: 2, gridRowEnd: 3, gridColumnStart: 2, gridColumnEnd: 3, margin: "1em", borderRadius: "1em"}} src={finishGif} alt="ClickUp GIF" />
      </div>
      <div style={{gridRowStart: 2, gridColumnStart: 1, display: "flex", flexDirection: "column"}}>
        <ul style={{color: "white", marginLeft: "0.4em"}}>
          <li>Move the Products & Services task into the <b>Tender</b> status</li>
          <li>Sit back and relax! You're all done!</li>
        </ul>
      </div>
    </>
  );
};

export default Finish;