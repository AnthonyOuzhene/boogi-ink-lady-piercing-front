import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';
import axios from 'axios';
import { setUserIsConnected } from '../../actions/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const dispatch = useDispatch();
    const url = 'http://localhost:8000/api';

    const notifySuccessLogin = () => {
        toast.success('Connexion réussie !', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    };
    const notifyErrorLogin = () => {
        toast.error('Connexion échouée !', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        axios.post(url + "/login_check",
            {
                email: email,
                password: password
            },
            {
                headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/json',
                }
            }
        )
            .then(function (response) {

                //console.log(response);
                notifySuccessLogin();
                sessionStorage.setItem('token', response.data.token);
                dispatch(setUserIsConnected(true));

                axios.get(url + '/users',
                    {
                        headers: {
                            "Accept": "application/json",
                            'Content-Type': 'application/json',
                            "Authorization": "Bearer " + sessionStorage.getItem('token')
                        }
                    })
                    .then(function (response) {
                        const userInfos = response.data.find(user => user.email === email);
                        //console.log(userInfos.roles);
                        const roles = userInfos.roles;
                        //console.log(roles);
                        sessionStorage.setItem('userInfos', JSON.stringify(userInfos));
                        sessionStorage.setItem('roles', JSON.stringify(roles));

                        //window.location.href = '/';
                    })
                    .catch(function (error) {
                        console.log(error);
                        ;
                    });
            })

            .catch(function (error) {
                console.log(error);
                notifyErrorLogin()
            }
            );
    }


    return (

        <div className='toast'>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                limit={1}
            />

            <div className='container-login'>
                <h1>Connexion</h1>
                <form className="formContainer" onSubmit={handleSubmitLogin}>
                    <label className="emailAddress">E-mail</label>
                    <input
                        id="emailAddress"
                        type="email"
                        name="email"
                        placeholder="Votre email" required
                        onChange={(e) => setEmail(e.target.value)}></input>


                    <label className="password">Mot de passe</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Votre mot de passe" required
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>

                    <p className="forgotPassword">Mot de passe oublié ?</p>

                    <input className="send" type="submit" value="Envoyer"></input>

                    <div className="signUp">
                        <p>Vous voulez nous rejoindre ?</p>
                        <a className="go-to-signup" href="/inscription">Inscrivez-vous !</a>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Login