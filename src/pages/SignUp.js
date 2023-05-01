import React from "react";
import axiosInstance from "../axios";
import { useNavigate } from "react-router-dom";
import bgImg from '../assets/img1.jpg'
import { Link } from "react-router-dom";
import '../styles/log.css'
import { useState } from "react";

const SignUp = () => {
    const [username, Setusername] = useState("");
    const [email, Setemail] = useState("");
    const [password, Setpassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        axiosInstance
          .post("register/", {
            email: email,
            user_name: username ,       
            password: password,
          })
          .then((res) => {
            console.log(res);
            console.log(res.data)
            navigate('/')
          });
      };
    return ( 
        <div className="App">
            <div className="register">
                <div className="col-1">
                    <h2>Sign Up</h2>
                    <span>Register and make sure to laugh..</span>

                    <form id="form" action="" onSubmit={handleSubmit}   className="flex flex-col">
                        <input 
                        value={email}
                        onChange={(e) => Setemail(e.target.value)}
                        type="email"
                        placeholder="Youremail@gmail.com"
                        id="email"
                        name="email"
                        />

                        <input 
                        value={username}
                        onChange={(e) => Setusername(e.target.value)}
                        type="text" 
                        placeholder="username"
                        id="username"
                        name="user_name"
                        />
 
                        <input 
                        value={password}
                        onChange={(e) => Setpassword(e.target.value)}
                        type="password" 
                        placeholder="password"
                        id="password"
                        name="password"
                        />

                        <button className="btn" type="submit" >Sign UP</button>
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