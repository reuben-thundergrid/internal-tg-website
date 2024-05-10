import React from "react";

const StepHeader = ({children}) => {
    return (
        <h1 className="StepHeader" style={{color: "white", gridRowStart: 1, gridColumnStart: 1, gridColumnEnd: 3, textAlign: "center"}} >{children}</h1>
    );
}

export default StepHeader;