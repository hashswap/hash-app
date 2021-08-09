import React,{useState} from 'react';
import LoginForm from './LoginForm';
import './Login.css';


function Login (){
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");

    const Login = (details:any) => {
        console.log(details);

    }

    const Logout = () => {
        console.log("Logout");
    }

    return(
        <div className="Login">
            {(username != "") ? (
                <div className="Home">
                    <h2>Welcome, <span>{username}</span></h2>
                    <button>Logout</button>
                </div>
            ) : <LoginForm /*Login={Login} Error={error}*//>}
        </div>
    );
}

export default Login;