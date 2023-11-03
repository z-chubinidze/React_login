import React, { Fragment, memo, useState } from 'react';
import { Link, Outlet } from "react-router-dom";

function Sign_in() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [psw, setPassword] = useState("");

    const shenaxva = () => {
        if (name === "") {
            window.alert("შეიყვანეთ სახელი");
        } else if (email === ""){
            window.alert("შეიყვანეთ იმეილი");
        } else if (psw === "") {
            window.alert("შეიყვანეთ პაროლი");
        } else {
            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("password", psw);
            window.location.href = "/DashBoard";
        }
    }

    return (
        <Fragment>
            <div className='mein-box ' style={{ height: "100vh", display: "flex", alignItems: "center" }}>
                <form  className='ms-5 p-5 form-control'>
                    <h1 className='text-center h1 mb-5 '>SIGN IN FORM</h1>
                    <input type="text" id='username' className='form-control inputs mb-4' placeholder='username'
                        onChange={(e) => setName(e.target.value)} />
                    <input type="email" id='email' className='form-control inputs mb-4' placeholder='email'
                        onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" id='password' className='form-control inputs mb-5' placeholder='password'
                        onChange={(e) => setPassword(e.target.value)} />
                    <Link className="nav-link active text-light w-100" aria-current="page" to="/Sign_in">
                        <input onClick={shenaxva} type="submit" className='btn btn-success w-100' value={"SIGN IN"} />
                    </Link>
                </form>
                <Outlet />
            </div>
        </Fragment>
    )
}

export default memo(Sign_in)
