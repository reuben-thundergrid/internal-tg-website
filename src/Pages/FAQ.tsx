import React, {CSSProperties} from "react"
import StepHeader from "../Components/StepHeader.tsx";

const FAQ = () => {

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
        <StepHeader>FAQ</StepHeader>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "1em", margin: "1em"}}>
            <div style={{ ...faqBox}}>
                <h3 style={{ ...question}}>Question: How do I change the urgency of an order?</h3>
                <h4 style={{ ...answer}}>Answer: Mention @Fulfilment in the Sales Marina task. Mention the new date that the gear is needed by. If no reply is recieved DM someone in Fulfilment.</h4>
            </div>
            <div style={{ ...faqBox}}>
                <h3 style={{ ...question}}>Question: How do I request items to be sent before filling out all the information required?</h3>
                <h4 style={{ ...answer}}>Answer: In certain scenarios we may want to send gear as soon as possible to someone like the switchboard maker.</h4>
            </div>
            <div style={{ ...faqBox}}>
                <h3 style={{ ...question}}>Question: What happens if details change after the task is in progress?</h3>
                <h4 style={{ ...answer}}>Answer: Move the task back to the Tender status. Mention @Fulfilment in the Sales Marina task. Outline what has changed. Follow thundergrid.click/wizard as if it was a new order to ensure everything that needs to be filled out is.</h4>
            </div>
            <div style={{ ...faqBox}}>
                <h3 style={{ ...question}}>Question: What do I do if I have multiple invoice for one sale?</h3>
                <h4 style={{ ...answer}}>Answer: In the case of multiple invoices or split invoices. Enter thundergrid.click/split in the Invoice custom field. Link both invoices in the description under the Other Notes section.</h4>
            </div>
            <div style={{ ...faqBox}}>
                <h3 style={{ ...question}}>Question: What do I do if I have multiple 'Sale Types' for one Sales Marina task</h3>
                <h4 style={{ ...answer}}>Answer: If for example you have a New Ocean Connection and Modify Ocean Connection in one sale, you will have to create two Sales Marina tasks. This scenario is not support by the system.</h4>
            </div>
            <div style={{ ...faqBox}}>
                <h3 style={{ ...question}}>Question: How do I cancel a sale?</h3>
                <h4 style={{ ...answer}}>Answer: If there is justification to keep the task for historical purposes the archive feature of ClickUp can be used. Otherwise, it is encouraged to delete the task.</h4>
                <h4 style={{ ...answer}}>If an Ocean connection has already been created and linked you must archive the task. If the sales task needs to be deleted in this situation the linked Ocean connection and actual Ocean location need to be deleted.</h4>
                <h4 style={{ ...answer}}>If linked shipping tasks exist with information in them the sales task must be archived as we need to keep this information for historical purposes. If there are shipping tasks but no information inside them, make sure to delete them before deleting the sales task.</h4>
            </div>
        </div>
    </>
    );

}

export default FAQ;