import "./styles/landingPageFooter.css"
import "./styles/font-classes.css"
import F3 from "./footer3";
const insta =require('./Assets/instagram.jpg')
const facebook =require('./Assets/facebook.jpg')
const linkedin=require('./Assets/linkedin.jpg')

const LandingPageFooter = () => {
    return (
        <>
            <section id="LP-footer-container">
                <div id="footer-1">
                    <p id="footer-1-line-1">Now Refer & Earn ₹500 for every referral*</p>
                    <p id="footer-1-line-2">* Terms and conditions will be applied</p>
                </div>
                <div id="footer-2">
                    <div>
                        <h2 className="Avenir-M-18">ABOUT US</h2>
                        <p className="Avenir-15">Doorstep Wash & Dryclean Service</p>
                    </div>
                    <div>
                        <h2 className="Avenir-M-16">HOME</h2>
                        <p className="Avenir-14">Sign In</p>
                        <p className="Avenir-14">Register</p>
                    </div>
                    <div>
                        <h2 className="Avenir-M-16">Pricing</h2>
                    </div>
                    <div>
                        <h2 className="Avenir-M-16">Career</h2>
                        <p className="Avenir-14">Blogs</p>
                        <p className="Avenir-14">Create</p>
                    </div>
                    <div className="f3-contact">
                        <h2 className="Avenir-M-16">Contact</h2>
                    </div>
                    <div>
                        <h2 className="Avenir-M-18">Social Media</h2>
                        <div id="social-icons-container">
                            <div>
                                <img className="fb-icon" src={facebook} alt="Avatar"/>
                            </div>
                            <div>
                                <img className="insta-icon" src={insta} alt="Avatar"/>
                            </div>
                            <div>
                                <img className="linkedin-icon" src={linkedin} alt="Avatar"/>
                            </div>
                        </div>
                    </div>
                </div>
            <F3/>
            </section>
        </>
    )
}

export default LandingPageFooter;