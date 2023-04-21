import React from "react";
import bgImg from '../assets/img1.jpg'
import { Link } from "react-router-dom";
import '../styles/log.css'

const SignUp = () => {
    return ( 
        <div className="App">
            <div className="register">
                <div className="col-1">
                    <h2>Sign In</h2>
                    <span>Register and make sure to laugh..</span>

                    <form id="form" className="flex flex-col">
                        <input type="text" placeholder="username"/>
                        <input type="email" placeholder="email"/>
                        <input type="password" placeholder="password"/>
                        <input type="password" placeholder="confirm password"/>

                        <button className="btn">Sign In</button>
                    </form>
                    <span>Already have an account? <Link to='/signin'>SignIn</Link> </span>
                </div>
                <div className="col-2">
                    <img src={bgImg}/>
                </div>
            </div>
        </div>
     );
}
 
export default SignUp;