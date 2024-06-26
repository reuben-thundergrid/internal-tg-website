import React from "react";
import { useNavigate } from "react-router-dom";

import HouseIcon from '@mui/icons-material/House';
import { Button } from "@mui/material";

const StepHeader = ({children}) => {

    const navigate = useNavigate();
    function handleHome() { navigate("/home"); }

    return (
        <div style={{gridRowStart: 1, gridColumnStart: 1, gridColumnEnd: 3, display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                {/* Hidden button to keep the h1 centered */}
                <Button variant="contained" endIcon={<HouseIcon />}style={{fontWeight:"600", marginLeft: "1em", visibility: "hidden"}}>Home</Button>
                <h1 className="StepHeader" style={{color: "white", textAlign: "center"}} >{children}</h1>
                <Button 
                    variant="contained" 
                    endIcon={<HouseIcon />} 
                    onClick={() => handleHome()}
                    style={{fontWeight:"600", height: "50%", marginRight: "1em"}}
                    >Home
                </Button>
        </div>
    );
}

export default StepHeader;