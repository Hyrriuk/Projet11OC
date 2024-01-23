import React from 'react';
import Account from '../../Components/Account/Account';
import EditName from '../../Components/EditName/EditName';
import {Apicalls} from '../../serverapi/serverapi';
import {setGetProfile} from '../../Redux/Reducers/ProfileUserReducer';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import './Connected.css';

function Connected() {
    const token = useSelector((state) => state.signIn.token);
    const dataUser = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    const [toggleEditName, setToggleEditName] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Vérifiez la présence du token dans les cookies
                const storedToken = Cookies.get('accessToken');

                if (!storedToken) {
                    // Si le token n'est pas présent, redirigez vers la page Connection
                    window.location.href = '/Connection';
                    return;
                }

                // Si le token est présent, effectuez l'appel API getProfile
                const data = await Apicalls('getProfile', storedToken, {});

                dispatch(setGetProfile({data}));
            } catch (error) {
                console.log(error, 'error');
                dispatch(setLogout());
                // Redirigez vers la page Connection en cas d'erreur
                window.location.href = '/Connection';
            }
        };

        fetchData();
    }, [dispatch, history]);

    const handleEditName = () => {
        setToggleEditName(!toggleEditName);
    };

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>
                    Welcome back
                    <br />
                    {dataUser.firstName + ' ' + dataUser.lastName + ' !'}
                </h1>
                <button className="edit-button" onClick={handleEditName}>
                    {!toggleEditName ? 'Edit name' : 'cancel'}
                </button>

                {toggleEditName && <EditName onSubmit={handleEditName} />}
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account
                props={{
                    accountNumber: 'Argent Bank Checking (x8349)',
                    balance: '$2,082.79',
                    status: 'Available Balance',
                }}
            />
            <Account
                props={{
                    accountNumber: 'Argent Bank Savings (x6712)',
                    balance: '$10,928.42',
                    status: 'Available Balance',
                }}
            />
            <Account
                props={{
                    accountNumber: 'Argent Bank Credit Card (x8349)',
                    balance: '$184.30',
                    status: 'Current Balance',
                }}
            />
        </main>
    );
}

export default Connected;
