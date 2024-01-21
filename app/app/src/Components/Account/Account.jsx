import React from "react";
import "./Account.css";

function Account({props}) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{props.account}</h3>
                <p className="account-amount">{props.balance}</p>
                <p className="account-amount-description">{props.status}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    );
}

export default Account;
