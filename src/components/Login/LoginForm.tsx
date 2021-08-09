import React , {useState} from 'react';
import './LoginForm.css';

interface Props {
    Login: any;
    Error: any;
}

function LoginForm ({Login,Error}:Props) {
    const [details, setDetails] = useState({user:"user", password:"password"});

    const submitHandler = (e:any) => {
        e.preventDefault();
        Login(details);
    }

    return(
        <div>
        <form onSubmit={submitHandler}>
            <div className="form-inner">
            <span className="logo"> </span>
                <div className="form-group">
                    <input type="email" name="user" id ="username"
                    onChange={e => setDetails({...details, user: e.target.value})} value={details.user}></input>
                    <input type="password" name="password" id ="password"
                    onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                    <button type="submit" >Log In</button>
                </div>
            </div>
        </form>
            <div className="form-outer">
                <label> Don't have an account? <a className="color: blue;" href="!#">Sign up</a> </label>
            </div>
        </div>
    )
}

export default LoginForm;