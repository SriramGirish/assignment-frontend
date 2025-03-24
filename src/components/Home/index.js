import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";


import './index.css'

const Home =()=>{
    const [isLoggedIn, setIsLoggedIn]=useState(false)
    const Navigate=useNavigate()
    const token=localStorage.getItem("token")

    const onLoginBtn=()=>{
        Navigate("/login")
    }

    const onLogoutBtn=()=>{
        localStorage.removeItem("token")
        setIsLoggedIn(prev=>!prev)
    }
    
    const renderLoggedInView=()=>(
        <div className="linksCon">
            <Link className="link" to="/dashboard">
                <p>Dashboard</p>
            </Link>
            <Link className="link" to="/map">
                <p>Maps</p>
            </Link>
            <button className="logoutBtn" onClick={onLogoutBtn}>Logout</button>
        </div>
    )

    const renderLoginBtn=()=>(
        <Link to="/login" className="link">
            <p>Login</p>
        </Link>
    )


    return (
        <div className="homeCon">
            <div className="header">
                <div className="logoCon">
                <img src="https://img.icons8.com/?size=100&id=63768&format=png&color=000000" alt="logo" className="logo" />
                <h1 className="name">Maps</h1>
                
                </div>
                <div className="linksCon">
                {token!==null ? renderLoggedInView() : renderLoginBtn()}
                </div>
                
            </div>
            <h1 className="heading">Welcome</h1>
            {token !== null ? <p className="para">Let's Explore The Earth</p> : (
                <>
                    <p className="para">Please Login To Explore The Earth</p>
                    <button type="button" className="btn" onClick={onLoginBtn}>Login</button>
                </>
            )}
            
        </div>
    )
    
}

export default Home