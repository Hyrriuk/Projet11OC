import React from 'react';
import logo from '../../assets/img/argentBankLogo.webp';
import {Link} from 'react-router-dom';
import {setLogout} from '../../Redux/Reducers/Signinreducer';
import {useDispatch, useSelector} from 'react-redux';
import Cookies from 'js-cookie';
import './Header.css';

function Header() {
    const token = useSelector((state) => state.signIn.token);

    const dataUser = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const handleLogout = () => {
        // si l'utilisateur est connecté, suppression du token pour se deconnecter
        if (token) {
            Cookies.remove('accessToken');
            dispatch(setLogout({}));
        }
    };

    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="./">
                <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {token && (
                    <Link className="main-nav-item" to="/Connected">
                        <i className="fa fa-user-circle"></i>
                        {dataUser.userName}
                    </Link>
                )}
                <Link className="main-nav-item" to={token ? '/' : './Connection'} onClick={handleLogout}>
                    {token ? <i className="fa fa-arrow-right fa-lg"></i> : <i className="fa fa-user-circle"></i>}
                    {token ? 'Sign Out' : 'Sign-in'}
                </Link>
            </div>
        </nav>
    );
}

export default Header;
