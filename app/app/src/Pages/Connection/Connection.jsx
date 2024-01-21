import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setSignIn} from "../../Redux/Reducers/Signinreducer";
import {Apicalls} from "../../serverapi/serverapi";
import Cookies from "js-cookie";
import "./Connection.css";

function Connection() {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [checkRemember, setCheckRemember] = useState(false);
    const navigate = useNavigate();

    const handleCheckBox = () => {
        setCheckRemember(!checkRemember);
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const response = await Apicalls("login", null, {
                email: username,
                password: password,
            });
            const token = response.body.token;
            // Dispatch l'action setSignIn avec le token reçu de l'API
            dispatch(setSignIn({token}));
            // redirection vers son profil
            Cookies.set("accessToken", token, {secure: true, sameSite: "strict"});
            if (checkRemember) {
                Cookies.set("accessToken", token, {expires: 2});
            }
            navigate("/Connected");
        } catch (error) {
            // Gérer les erreurs de la requête API
            console.log(error);
        }
    };

    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form className="sign-in-form" onSubmit={handleSignIn}>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            autoComplete="username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            autoComplete="new-password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" checked={checkRemember} onChange={handleCheckBox} />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>

                    <button type="submit" className="sign-in-button">
                        Sign In
                    </button>
                    <Link className="sign-in-button" to="/Signup">
                        Sign Up
                    </Link>
                </form>
            </section>
        </main>
    );
}

export default Connection;
