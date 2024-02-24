import React from "react";

export default ({children}) => {
    return (
        <h1 style={{color: "white", gridRowStart: 1, gridColumnStart: 1, gridColumnEnd: 3, textAlign: "center"}} >{children}</h1>
    );
}

