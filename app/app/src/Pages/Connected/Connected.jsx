import React from "react";
import Account from "../../Components/Account/Account";
import EditName from "../../Components/EditName/EditName";
import {Apicalls} from "../../serverapi/serverapi";
import {setGetProfile} from "../../Redux/Reducers/ProfileUserReducer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import "./Connected.css";

function Connected() {
    const token = useSelector((state) => state.signIn.token);
    const dataUser = useSelector((state) => state.profile);

    const dispatch = useDispatch();
    const [toggleEditName, setToggleEditName] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            //recuperation de la data utilisateur
            try {
                const data = await Apicalls("getProfile", token, {});

                dispatch(setGetProfile({data}));
            } catch (error) {
                console.log(error, "error");
                // Gère les erreurs de l'appel API
            }
        };

        fetchData();
    }, []);

    const handleEditName = () => {
        setToggleEditName(!toggleEditName);
    };

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>
                    Welcome back
                    <br />
                    {dataUser.firstName + " " + dataUser.lastName + " !"}
                </h1>
                <button className="edit-button" onClick={handleEditName}>
                    {!toggleEditName ? "Edit name" : "cancel"}
                </button>

                {toggleEditName && <EditName onSubmit={handleEditName} />}
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account
                props={{
                    accountNumber: "Argent Bank Checking (x8349)",
                    balance: "$2,082.79",
                    status: "Available Balance",
                }}
            />
            <Account
                props={{
                    accountNumber: "Argent Bank Savings (x6712)",
                    balance: "$10,928.42",
                    status: "Available Balance",
                }}
            />
            <Account
                props={{
                    accountNumber: "Argent Bank Credit Card (x8349)",
                    balance: "$184.30",
                    status: "Current Balance",
                }}
            />
        </main>
    );
}

export default Connected;
