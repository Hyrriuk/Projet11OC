import React from "react";
import "./FeatureItem.css";

function FeatureItem({state}) {
    return (
        <div className="feature-item">
            <img src={state.logo} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{state.title}</h3>
            <p>{state.description}</p>
        </div>
    );
}
export default FeatureItem;
