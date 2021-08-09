import React,{useState} from 'react';
import LoginForm from './LoginForm';
import './Login.css';


type creds = {
    email:string,
    password:string,
}

function Login (){
    const adminUser = {
        email: "log@me.in",
        password: "please"
    }

    const [user, setUser] = useState("");
    const [Error, setError] = useState("");

    const Login = (details:creds) => {
        console.log('Login.tsx1', details);

        if ((details.email === adminUser.email) && (details.password === adminUser.password)) {
        console.log('logged in',details, adminUser,(details.email === adminUser.email),(details.password === adminUser.password));
        setUser(details.email);

        } else {
            console.log('details do not match', details,adminUser,(details.email === adminUser.email),(details.password === adminUser.password));
            setError('details do not match');
        }

    }

    const Logout = () => {
        console.log("Logout");
        setUser("");
    }

    return(
        <div className="Login">
            {(user !== "") ? (
                <div className="Home">
                    <h2>Welcome, <span>{user}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ) : <LoginForm Login={Login} Error={Error}/>}
        </div>
    );
}

export default Login;