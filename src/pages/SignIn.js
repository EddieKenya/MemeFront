import React from "react";
import bgImg from '../assets/img1.jpg';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import axiosInstance from "../axios";

const SignIn = () => {

    const [email, Setemail] = useState("");
    const [password, Setpassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        axiosInstance
          .post("token/", {
            email: email,
            password: password,
          })
          .then((res) => {
            localStorage.setItem('access_token', res.data.access);
            localStorage.setItem('refresh_token', res.data.refresh);
            axiosInstance.defaults.headers['Authorization'] = 
                'JWT ' + localStorage.getItem('access_token');
            navigate('/')
          });
      };
    return ( 
        <div className="App">
            <div className="register">
                <div className="col-1">
                    <h2>Sign In</h2>

                    <form action="" id="form" onSubmit={handleSubmit} className="flex flex-col">
                        <input
                         type="email" 
                         placeholder="email"
                         value={email}
                         onChange={(e) => Setemail(e.target.value)}  
                         id="email"
                         name="email"
                         />

                        <input 
                        value={password}
                        onChange={(e) => Setpassword(e.target.value)}
                        type="password" 
                        placeholder="password"
                        id="password" 
                        name="password"
                        />

                        <button type="submit" className="btn">Sign In</button>
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
