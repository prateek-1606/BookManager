import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { register } from '../api/index'
import "./styles.css"

const Signup = () => {
    const [data, setData] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState(null)

    const history = useHistory()
    const handlesubmit = (e) => {
        e.preventDefault();
        register(data).then((res) => {
            history.push('/signin');
        })
            .catch((err) => {
                console.log(err);
                setError("Please Enter Correct Details")
            })
        console.log(data)
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
            <div class="container1">
                <h1 class="heading">SignUp</h1>
                <form onSubmit={handlesubmit} >
                    <label class="lbl">Name</label><br />
                    <input type="text" class="username" name="name" placeholder="Enter Name" onChange={handleChange} />
                    <br />
                    <label class="lbl">Email</label><br />
                    <input type="email" class="email" placeholder="Enter your email" name="email" onChange={handleChange} />
                    <br />
                    <label class="lbl">Password</label><br />
                    <input type="password" class="pass" placeholder="Enter Password" name="password" onChange={handleChange} />
                    <br />
                    <br />
                    <br />
                    <button class="btn1">Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default Signup
