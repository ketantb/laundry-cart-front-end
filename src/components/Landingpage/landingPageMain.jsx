import "./styles/landingPageMain.css"
import { useState } from "react"
import SigninForm from "./signinForm"
import RegistrationForm from "./registrationForm"

const LandingPageMain = (props) => {
    const [showRegForm, setShowRegForm] = useState(false)
    const [size, setSize] = useState("Big")
    const handleRegisterBtnOne = () => {
        !showRegForm ? setShowRegForm(true) : setShowRegForm(false)
        size == "Big" ? setSize("Small") : setSize("Big")
    }
    return (
        <>
            <div id="LP-main-container">
                <section id={size == "Big" ? "LP-main-block-1-Big" : "LP-main-block-1-Small"}>
                    <div id={size == "Big" ? "LP-main-block-1-container-Big" : "LP-main-block-1-container-Small"}>
                        <div>
                            <h1 id={size == "Big" ? "ls-h1-Big" : "ls-h1-Small"}>Laundry Service</h1>
                            <h2 id={size == "Big" ? "ls-h2-Big" : "ls-h2-Small"}>Doorstep Wash & Dryclean Service</h2>
                        </div>
                        <div>
                            <p id={size == "Big" ? "ls-p-Big" : "ls-p-Small"}>{size === "Big" ? "Don't Have An Account?" : "Already Have Account"}</p>
                            <button onClick={handleRegisterBtnOne} id={size === "Big" ? "register-btn-1-Big" : "register-btn-1-Small"}>{size == "Big" ? "Register" : "Sign in"}</button>
                        </div>
                    </div>
                    <div id={size=="Big"?"short-border-design-Big":"short-border-design-Small"}></div>
                </section>
                <section id={size=="Big"?"LP-main-block-2-Big":"LP-main-block-2-Small"}>
                    {showRegForm?<RegistrationForm showRegForm={showRegForm} setShowRegForm={setShowRegForm} size={size} setSize={setSize}/>:<SigninForm/>}
                </section>
            </div>
        </>
    )
}

export default LandingPageMain;