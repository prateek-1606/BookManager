import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { login } from '../api/index'

import "./styles.css"

const Signin = () => {

    const [data, setData] = useState({ email: '', password: '' });
    const [Error, setError] = useState(null)
    const history = useHistory()

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(data)
        login(data).then((res) => {
            localStorage.setItem('user', JSON.stringify({ ...res?.data }));
            history.push('/');
        })
            .catch((err) => {
                console.log(err.message);
                setError("Please Enter Correct Details")
            })
    }



    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        console.log([e.target.name])
    }

    return (
        <>
            <div class="container2">
                <h1 class="heading">SignIN</h1>
                <form onSubmit={handlesubmit} >
                    <label class="lbl" >Email</label><br />
                    <input type="text" name="email" class="username" placeholder="Enter Email" onChange={handleChange} />
                    <br />
                    <label class="lbl" onChange={handleChange}>Password</label><br />
                    <input type="password" class="pass" name="password" placeholder="Enter Password" onChange={handleChange} />
                    <br />
                    <br />
                    <br />
                    <button class="btn1">Sign In</button>
                </form>
            </div>
        </>
    )
}

export default Signin