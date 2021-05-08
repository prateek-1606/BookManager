import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import "./styles.css"

const Nav = () => {

    const [user, setuser] = useState(JSON.parse(localStorage.getItem('user')))

    const history = useHistory()
    useEffect(() => {
        setuser(JSON.parse(localStorage.getItem('user')))
    }, [])

    const logout = () => {
        setuser(null);
        localStorage.clear();
        history.push('/signin');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="brand" >
                <a className="navbar-brand" href="https://bookmanager.netlify.app/" >Book list Application</a>
            </div>
            {!user ? (
                <div className="auth" >
                    <a className="navbar-brand" href="https://bookmanager.netlify.app/signin" >SignIn</a>
                    <a className="navbar-brand" href="https://bookmanager.netlify.app/signup" >Signup</a>
                </div>
            ) : (
                <div className="auth" >
                    <a className="navbar-brand" onClick={logout} href="https://bookmanager.netlify.app/" >Logout</a>
                </div>
            )}
        </nav>
    )
}
export default Nav;