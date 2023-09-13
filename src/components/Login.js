import React, { useState } from "react";

export default function Login() {
    var [email, setEmail] = useState("");
    var [password, setPassword] = useState("");

    const onEmailChangeHandler = event => {
        setEmail(event.target.value);
        console.log(email);
     };

    const onPasswordChangeHandler = event => {
        setPassword(event.target.value);
     };

    return (
        <>
            <div className="container mt-4">
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                            onChange={onEmailChangeHandler} value={email}/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
                        onChange={onPasswordChangeHandler} value={password}/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
}