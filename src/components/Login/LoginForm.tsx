import React , {useState} from 'react';
import './LoginForm.css';


function LoginForm(/*{Login, Error}*/) {
    const [details, setDetails] = useState({username:"username", password:"password"});

    const submitHandler = (e:any) => {
        e.preventDefault();
        /*Login(details);*/
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="form-inner">
            <a className="logo" ></a>
                <div className="form-group">
                    <input type="email" name="username" id ="username"
                    onChange={e => setDetails({...details, username: e.target.value})} value={details.username}></input>
                    <input type="password" name="password" id ="passwords"
                    onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
                    <button type="submit" >Log In</button>
                </div>
            </div>
            <div className="form-outer">
                <label> Don't have an account? <a className="color: blue;" href='/'>Sign up</a> </label>
            </div>
        </form>
    )
}

export default LoginForm;