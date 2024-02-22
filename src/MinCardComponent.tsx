import React from "react";
import "./Card.css"

export default (props) => {
    return (
        <div className="card" onClick={() => props.work()}>
            <h4>{props.header}</h4>
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

