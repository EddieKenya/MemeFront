import React from "react";
import bgImg from '../assets/img1.jpg';
import { Link } from "react-router-dom";

const SignIn = () => {
    return ( 
        <div className="App">
            <div className="register">
                <div className="col-1">
                    <h2>Sign In</h2>

                    <form id="form" className="flex flex-col">
                        <input type="text" placeholder="email"/>
                        <input type="password" placeholder="password"/>

                        <button className="btn">Sign In</button>
                    </form>
                    <span>Don't have an account? <Link to='/signup'>SignUp</Link> </span>
                </div>
                <div className="col-2">
                    <img src={bgImg}/>
                </div>
            </div>
        </div>
     );
}

export default SignIn