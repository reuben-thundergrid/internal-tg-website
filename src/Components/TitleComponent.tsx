import React from "react";
import "./Card.css"

export default (props) => {

    const styleH3 = {
        zIndex: 2,
        position: "relative",
        margin: "12px 0 4px 0",
        fontFamily: "inherit",
        fontWeight: 600,
        fontSize: "24px",
        lineHeight: 2,
        color: "#FFFFFF"
    };

    return (
        <div className="card" onClick={() => props.work}>
            <h3 style={styleH3}>{props.header}</h3>
            <div className="shine"></div>
            <div className="background">
            <div className="tiles">
                <div className="tile tile-1"></div>
                <div className="tile tile-2"></div>
                <div className="tile tile-3"></div>
                <div className="tile tile-4"></div>

                <div className="tile tile-5"></div>
                <div className="tile tile-6"></div>
                <div className="tile tile-7"></div>
                <div className="tile tile-8"></div>

                <div className="tile tile-9"></div>
                <div className="tile tile-10"></div>
            </div>

            <div className="line line-1"></div>
            <div className="line line-2"></div>
            <div className="line line-3"></div>
            </div>
        </div>
    );
}

