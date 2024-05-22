import React, {CSSProperties} from "react"
import StepHeader from "../Components/StepHeader.tsx";

const Rules = () => {

    const question : CSSProperties = {
        color: "white",
        textAlign: "center"
    }

    const answer : CSSProperties = {
        color: "white",
        textAlign: "center"
    }

    const faqBox : CSSProperties = {
        border: "1px solid lightblue", 
        borderRadius: "0.5em", 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        padding: "1em",
        width: "70%"
    }

    return(
    <>
        <StepHeader>Space Rules</StepHeader>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "1em", margin: "1em"}}>
            <div style={{ ...faqBox}}>
                <h3 style={{ ...question}}>Discontinue the use of the term 'Supply Only' </h3>
                <h4 style={{ ...answer}}>This leads to massive confusion as the term definition differs depending on the contexts it's used in.</h4>
            </div>
            <div style={{ ...faqBox}}>
                <h3 style={{ ...question}}>No changes are to be made without permission</h3>
                <h4 style={{ ...answer}}>This applys to the Ocean Plus, Fulfilment Plus & Sales Marina Spaces.</h4>
                <h4 style={{ ...answer}}>No modifying or adding custom fields. Be careful to not add items to dropdown custom fields.</h4>
                <h4 style={{ ...answer}}>No editing or making public views. Use the private views feature of ClickUp if you would like a custom view. Default views are protected.</h4>
                <h4 style={{ ...answer}}>No renaming of anything.</h4>
            </div>
            <div style={{ ...faqBox}}>
                <h3 style={{ ...question}}>No duplicating an existing task to make a new one</h3>
                <h4 style={{ ...answer}}>Use the template feature of ClickUp if you need an easily replicable format.</h4>
                <h4 style={{ ...answer}}>Duplicating tasks can cause confusion dependinging on what has been copied.</h4>
            </div>
        </div>
    </>
    );

}

export default Rules;
