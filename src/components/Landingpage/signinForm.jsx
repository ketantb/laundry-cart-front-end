
import "./styles/landingPageMain.css"
import "./styles/signinForm.css"
import "./styles/font-classes.css"
import { useEffect, useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const SigninForm = () => {
    const navigate = useNavigate()
    const [signInData, setSignInData] = useState({email: "", password: ""})
    const [error, setError] = useState({email: null, password: null, both: null})
    const handleSignInForm = (params) => (e) => {
        setSignInData({...signInData, [params]: e.target.value})
        error.email = null
        error.password = null
        error.both = null
        // console.log(e.target.value)
    }
    const handleSignIn = async (e) => {
        e.preventDefault()
        const signInPostData = {
            email: signInData
                           .email
                           .split(" ")
                           .filter((i) => i!="")
                           .join("")
                           .toLowerCase(),
            password: signInData
                      .password
                      .split(" ")
                      .filter((i) => i!="")
                      .join("")
        }
        // await axios.post('http://localhost:8080/signin', signInPostData )
        await axios.post('https://lc-backend.onrender.com/signin', signInPostData )
        .then((res) => {
            // setSignSuccess(res)
                // console.log(res.data.data.token);
                // console.log(res.data.data.userName);
                localStorage.setItem("token", res.data.data.token)
                localStorage.setItem('userName', res.data.data.userName)
                navigate('/order')
          })
          .catch((err) => {
            console.log(err.response.data);
            if(err.response.data == "Invalid Email or Password"){{setError({both: "Email or Password Invalid"})}}
            else if(err.response.data == "Invalid Email"){setError({email: "Please enter a valid email/phone number"})}
            else if(err.response.data == "Invalid Password"){setError({password: "Password Invalid"})}
          });
          
        // console.log(signInData)
    }
    return (
        <>
            <div id="LP-main-block-2-container">
                <h1 className="Avenir-32">SIGN IN</h1>
                <div>
                    <label className="OpenSans-15-R" htmlFor="signin-email-mobile">Email</label>
                    <div>
                        <input className={!error.email?"signin-inputs":"signin-inputs-error"} type="text" id="signin-email-mobile" 
                        onChange={handleSignInForm("email")}/>
                    </div>
                    <div className="input-error">{error.email}</div>
                </div>
                <div>
                    <label className="OpenSans-15-R" htmlFor="signin-password">Password</label>
                    <div>
                        <input className={!error.password?"signin-inputs":"signin-inputs-error"} type="password" id="signin-password"
                        onChange={handleSignInForm("password")}/>
                    </div>
                    <div className="input-error">{error.password}</div>
                    <div id="both-input-error">{error.both}</div>
                </div>
                <p className="Avenir-16">Forget Password?</p>
                <button className="Avenir-15" id="form-sign-in-btn" onClick={handleSignIn}>Sign In</button>
            </div>
        </>
    )
}

export default SigninForm