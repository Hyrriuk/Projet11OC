import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import Header from "./Layouts/Header/Header.jsx";
import Footer from "./Layouts/Footer/Footer.jsx";
import App from "./App.jsx";
import {Provider} from "react-redux";
import store from "./Redux/Reducers/Store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Header />
                <App />
                <Footer />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
