import React from "react"
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    function handleClick() {
      navigate("/wizard");
    }
  
    return (
        <>
            <h3 style={{color: "white"}}>Home</h3>
            <button type="button" onClick={handleClick} style={{color: "white"}}>Go Wizard</button>
            {/* <button type="button" onClick={handleClick} style={{color: "white"}}>Go FAQ</button> */}
        </>
    );

}

export default Home;