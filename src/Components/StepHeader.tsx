import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import HouseIcon from '@mui/icons-material/House';
import { Button } from "@mui/material";

const StepHeader = ({children}) => {

    const navigate = useNavigate();
    function handleHome() { navigate("/home"); }

    const location = useLocation();

    return (
        <>
            {/* Duplicate element otherwise h1 will go to the left with the stlying it has if buttons are turned off */}
            { location.pathname !== "/wizard" ? <h1 className="StepHeader" style={{color: "white", textAlign: "center"}} >{children}</h1> : <></> }
            <div style={{gridRowStart: 1, gridColumnStart: 1, gridColumnEnd: 3, display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    {/* Hidden button to keep the h1 centered */}
                    { location.pathname === "/wizard" ? <Button variant="contained" endIcon={<HouseIcon />}style={{fontWeight:"600", marginLeft: "1em", visibility: "hidden"}}>Home</Button> : <></> }
                    { location.pathname === "/wizard" ? <h1 className="StepHeader" style={{color: "white", textAlign: "center"}} >{children}</h1> : <></> }
                    { location.pathname === "/wizard" ? <Button 
                        variant="contained" 
                        endIcon={<HouseIcon />} 
                        onClick={() => handleHome()}
                        style={{fontWeight:"600", height: "50%", marginRight: "1em"}}
                        >Home
                    </Button> : <></> }
            </div>
        </>
    );
}

export default StepHeader;