import React,{useState} from 'react';
import LoginForm from './LoginForm';
import './Login.css';
import Welcome from './../Welcome/Welcome';
//import Header from './../Header/Header';


function Login (){
    const adminUser = {
        user: "user@user.in",
        password: "password"
    }

    const [user, setUser] = useState("");
    const [Error, setError] = useState("");

    const Login = (details:any) => {
        console.log('Login.tsx1', details);

        if ((details.user === adminUser.user) && (details.password === adminUser.password)) {
        console.log('logged in');
        setUser(details.email);

        } else {
            console.log('details do not match');
            setError('details do not match');
        }

    }

    const Logout = () => {
        console.log("Logout");
        setUser("");
    }

    return(
        <div >
            {(user !== "") ? (
                <div className="Home" >
                    <Welcome Logout={Logout}/>
                </div >
            ) : 
            <div className="Login">
            <LoginForm Login={Login} Error={Error}/>
            </div>}
        </div>
    );
}

export default Login;