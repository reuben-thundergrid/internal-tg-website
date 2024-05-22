import React from "react"
import { useNavigate } from "react-router-dom";
import StepHeader from "../Components/StepHeader.tsx";
import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {

    const navigate = useNavigate();

    function handleWizardClick() { navigate("/wizard"); }
    function handleFAQClick() { navigate("/faq"); }
    function handleFeedback() { window.open("https://landisgyr.sharepoint.com/:w:/r/sites/ext-ws-Thundergrid/Shared%20Documents/Research%20and%20Development/Clickup%20Changes%20Feedback.docx?d=w58017d55a4e14271a08ac8288da2eb58&csf=1&web=1&e=gCjPXu")}
  
    return (
        <>
            <StepHeader>welcome</StepHeader>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "1em"}}>
                <div style={{border: "1px solid green", borderRadius: "1em", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <h3 style={{color: "white", padding: "1em"}}>Handing over a sale to fulfilment? Follow this wizard which will walk you through the steps.</h3>
                    <Button variant="contained" color="success" endIcon={<ArrowForwardIcon />} style={{margin: "1em", fontSize: "1.5em", transition: "transform 0.3s ease"}} onClick={handleWizardClick}>Go To Wizard</Button>
                </div>
                <div style={{border: "1px solid lightblue", borderRadius: "1em", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <h3 style={{color: "white", padding: "1em"}}>Learn more about commonly asked questions and edge cases</h3>
                    <Button variant="contained" color="primary" endIcon={<ArrowForwardIcon />} style={{margin: "1em", fontSize: "1.5em", transition: "transform 0.3s ease"}} onClick={handleFAQClick}>Go To FAQ</Button>
                </div>
                <div style={{border: "1px solid orange", borderRadius: "1em", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <h3 style={{color: "white", padding: "1em"}}>Place your feedback here</h3>
                    <Button variant="contained" color="primary" endIcon={<ArrowForwardIcon />} style={{margin: "1em", fontSize: "1.5em", transition: "transform 0.3s ease"}} onClick={handleFeedback}>Go To Feedback Form</Button>
                </div>
            </div>                     
        </>
    );

}

export default Home;