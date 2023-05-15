import React from "react";
import { useNavigate } from "react-router-dom";
import bgImg from '../assets/img1.jpg'
import { Link } from "react-router-dom";
import '../styles/log.css'
import { useState } from "react";

const SignUp = () => {
    const [user_name, Setusername] = useState("");
    const [email, Setemail] = useState("");
    const [password, Setpassword] = useState("");
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

     const postuser = { email, user_name, password}
     
     fetch('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(postuser)
     }). then(()=>{
        console.log('new user created')
        setIsPending(false)
        navigate('/signin')
     })
    
   
      }
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
                        required
                        placeholder="Youremail@gmail.com"
                        id="email"
                        name="email"
                        />

                        <input 
                        value={user_name}
                        onChange={(e) => Setusername(e.target.value)}
                        type="text"
                        required 
                        placeholder="username"
                        id="username"
                        name="user_name"
                        />
 
                        <input 
                        value={password}
                        onChange={(e) => Setpassword(e.target.value)}
                        type="password"
                        required 
                        placeholder="password"
                        id="password"
                        name="password"
                        />

                       {!isPending && <button className="btn" onClick={handleSubmit} >Sign UP</button>}
                       {isPending && <button className="btn" disabled >Creating User....</button>}
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