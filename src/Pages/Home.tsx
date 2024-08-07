import React from "react"
import { useNavigate } from "react-router-dom";
import StepHeader from "../Components/StepHeader.tsx";
import { Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Home = () => {

    const navigate = useNavigate();

    function handleWizardClick() { navigate("/wizard"); }
    function handleFAQClick() { navigate("/faq"); }
    function handleFeedback() { window.open("https://landisgyr.sharepoint.com/:w:/r/sites/ext-ws-Thundergrid/Shared%20Documents/Research%20and%20Development/Clickup%20Changes%20Feedback%20V2.docx?d=wce5c5ac4796848e6b78d46b3d8633c29&csf=1&web=1&e=yubbCs")}
    function handleRules() { navigate("/rules"); }
    function handleSlack() { window.open("https://app.slack.com/client/TQP8NMMTJ/C079KM70X50")}
    function handleClickup() { window.open("https://app.clickup.com/6958308/v/g/6mb74-15616")}

    return (
        <>
            <StepHeader>welcome</StepHeader>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1em"}}>
                <div style={{border: "1px solid green", borderRadius: "1em", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <h3 style={{color: "white", padding: "1em", margin: "0"}}>Handing over a sale to fulfilment? Follow this wizard which will walk you through the steps</h3>
                    <Button variant="contained" color="success" endIcon={<ArrowForwardIcon />} style={{margin: "1em", fontSize: "1.5em", transition: "transform 0.3s ease"}} onClick={handleWizardClick}>Go To Wizard</Button>
                </div>

                <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1em"}}>
                    <div style={{border: "1px solid pink", borderRadius: "1em", display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <h3 style={{color: "white", padding: "1em", margin: "0"}}>Slack Help & Support</h3>
                        <Button variant="contained" color="primary" endIcon={<ArrowForwardIcon />} style={{margin: "1em", fontSize: "1.5em", transition: "transform 0.3s ease"}} onClick={handleSlack}>Go To Slack Channel</Button>
                    </div>
                    <div style={{border: "1px solid pink", borderRadius: "1em", display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <h3 style={{color: "white", padding: "1em", margin: "0"}}>Read the space rules</h3>
                        <Button variant="contained" color="primary" endIcon={<ArrowForwardIcon />} style={{margin: "1em", fontSize: "1.5em", transition: "transform 0.3s ease"}} onClick={handleRules}>Go To Space Rules Here</Button>
                    </div>
                    <div style={{border: "1px solid lightblue", borderRadius: "1em", display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <h3 style={{color: "white", padding: "1em", margin: "0"}}>Learn more about commonly asked questions and edge cases</h3>
                        <Button variant="contained" color="primary" endIcon={<ArrowForwardIcon />} style={{margin: "1em", fontSize: "1.5em", transition: "transform 0.3s ease"}} onClick={handleFAQClick}>Go To FAQ</Button>
                    </div>
                    <div style={{border: "1px solid orange", borderRadius: "1em", display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <h3 style={{color: "white", padding: "1em", margin: "0"}}>Place your feedback here</h3>
                        <Button variant="contained" color="primary" endIcon={<ArrowForwardIcon />} style={{margin: "1em", fontSize: "1.5em", transition: "transform 0.3s ease"}} onClick={handleFeedback}>Go To Feedback Form</Button>
                    </div>
                </div>
                <div style={{border: "1px solid green", borderRadius: "1em", display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <h3 style={{color: "white", padding: "1em", margin: "0"}}>View fulfilment's pipeline</h3>
                    <Button variant="contained" color="success" endIcon={<ArrowForwardIcon />} style={{margin: "1em", fontSize: "1.5em", transition: "transform 0.3s ease"}} onClick={handleClickup}>Go To ClickUp</Button>
                </div>
                <div style={{paddingBottom: "1em"}}></div>
            </div>                     
        </>
    );

}

export default Home;