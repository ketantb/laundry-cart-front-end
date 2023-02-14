// import "../../styles/landingPage.css"
import "./styles/font-classes.css"
import "./styles/registrationForm.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const RegistrationForm = (props) => {
    // console.log(props.showRegForm)
    // console.log(props.setShowRegForm)
    // console.log(props.size)
    // console.log(props.setSize)
    const navigate = useNavigate()
    const [regFormData, setRegFormData] = useState({ Name: "", Email: "", Phone: "", State: "", District: "", Address: "", Pincode: "", Password: "", ConfirmPassword: "", TermsNConditions: false})
    const [registerSuccess, setRegisterSuccess] = useState("")
    const [err, setErr] = useState({AllFields: "", Email: "", Phone: "", Password: "", TnC: ""})
    // const [flag, setFlag] = useState(false)
    const handleRegFormData = (params) => (e) => {
        setRegFormData({ ...regFormData, [params]: e.target.value })
        setErr({AllFields: "", Email: "", Phone: "",Password: "", TnC: ""})
    }
    // console.log(regFormData)
    let confirmPassInput = true;
    if (!regFormData.Password) { confirmPassInput = true }
    else { confirmPassInput = false }
    let confirmPassError = false
    const handleConfirmPassErr = () => {
        if (regFormData.ConfirmPassword && regFormData.ConfirmPassword != regFormData.Password) {
            confirmPassError = true
        }
    }

    const postRegForm = async (e) => {
        e.preventDefault()
        await axios.post('/register', regFormData)
            .then((res) => {
                // console.log(res)
                setRegisterSuccess(true)
                props.setSize("Big")
                props.setShowRegForm(false)
                //setRegFormData({Name: "", Email: "", Phone: "", State: "", District: "", Address: "", Pincode: "", Password: "", ConfirmPassword: "" , TermsNConditions: ""})
            })
            .catch((err) => {
                if(err.response.data == "please fill all field"){
                    setErr({AllFields: "All the Fields are Mandatory"})
                }
                if(err.response.data == "Email Already in Use"){
                    setErr({Email: "Email Already in Use"})
                }
                else if(err.response.data == "Phone Already in Use"){
                    setErr({Phone: "Phone Number Already in Use"})
                }
                else if(err.response.data == "Passwords do NOT Match"){
                    setErr({Password: "Passwords do NOT Match"})
                }
                else if(err.response.data == "Agree all T & C"){
                    setErr({TnC: "You must Agree All the TERM & CONDITIONS"})
                }
            })
            // console.log(regFormData)
            //setRegFormData({Name: "", Email: "", Phone: "", State: "", District: "", Address: "", Pincode: "", Password: "", ConfirmPassword: "" , TermsNConditions: ""})
    }
    // useEffect(() => {
    //    if(registerSuccess){
        
    //    }
    // }, [registerSuccess])
    return (
        <>
            <section id="regForm">
                <div id="regForm-container">
                    <h1 className="Avenir-32">Registration</h1>
                    <form>
                        <div id="input-field-block">
                            <div>
                                <label className="OpenSans-15-R" htmlFor="Name">Name</label>
                                <div>
                                    <input className="regForm-inputs" id="Name" type="text" onChange={handleRegFormData('Name')} value={regFormData.Name}/>
                                </div>
                            </div>
                            <div>
                                <label className="OpenSans-15-R" htmlFor="Email">Email</label>
                                <div>
                                    <input className="regForm-inputs" id="Email" type="Email" onChange={handleRegFormData('Email')} value={regFormData.Email}/>
                                </div>
                            </div>
                            <div>
                                <label className="OpenSans-15-R" htmlFor="Phone">Phone</label>
                                <div>
                                    <input className="regForm-inputs" id="Phone" type="number" onChange={handleRegFormData('Phone')} value={regFormData.Phone}/>
                                </div>
                            </div>
                            <div>
                                <label className="OpenSans-15-R" htmlFor="State">State</label>
                                <div>
                                    <input className="regForm-inputs" id="State" type="text" onChange={handleRegFormData('State')} value={regFormData.State}/>
                                </div>
                            </div>
                            <div>
                                <label className="OpenSans-15-R" htmlFor="District">District</label>
                                <div>
                                    <input className="regForm-inputs" id="District" type="text" onChange={handleRegFormData('District')} value={regFormData.District}/>
                                </div>
                            </div>
                            <div>
                                <label className="OpenSans-15-R" htmlFor="Address">Address</label>
                                <div>
                                    <input className="regForm-inputs" id="Address" type="text" onChange={handleRegFormData('Address')} value={regFormData.Address}/>
                                </div>
                            </div>
                            <div>
                                <label className="OpenSans-15-R" htmlFor="Pincode">Pincode</label>
                                <div>
                                    <input className="regForm-inputs" id="Pincode" type="number" onChange={handleRegFormData('Pincode')} value={regFormData.Pincode}/>
                                </div>
                            </div>
                            <div>
                                <label className="OpenSans-15-R" htmlFor="Password">Password</label>
                                <div>
                                    <input className="regForm-inputs" id="Password" type="Password" onChange={handleRegFormData('Password')} value={regFormData.Password}/>
                                </div>
                            </div>
                            <div>
                                <label className="OpenSans-15-R" htmlFor="ConfirmPassword">Confirm Password</label>
                                <div>
                                    <input className="regForm-inputs" id="ConfirmPassword" disabled={confirmPassInput} type="Password" onChange={handleRegFormData('ConfirmPassword')} onBlur={handleConfirmPassErr()} value={regFormData.ConfirmPassword}/>
                                </div>
                                {confirmPassError ? <p id="confirmPasswordErr">Passwords do NOT match</p> : null}
                            </div>
                            <div id="validationErr">
                                {<p className="confirmPasswordErr">{err.AllFields || err.Email|| err.Phone || err.Password || err.TnC}</p>}
                            </div>
                        </div>
                        <div id="agreement-block">
                            <input htmlFor="agreement" type="checkbox" onChange={(e) => setRegFormData({...regFormData, TermsNConditions: e.target.checked})}/>
                            <p className="OpenSans-15-R" id="agreement">I agree to TermsNConditions & Condition receiving marketing and promotional materials</p>
                        </div>
                        <div>
                            <button type="submit" onClick={postRegForm} id="regForm-Btn-2">Register</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default RegistrationForm;