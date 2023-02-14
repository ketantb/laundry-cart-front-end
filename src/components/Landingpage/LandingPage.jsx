import { useState } from "react";
import "./styles/landingPage.css"
import LandingPageFooter from "./landingPageFooter";
import LandingPageHeader from "./landingPageHeader";
import LandingPageMain from "./landingPageMain";
import RegistrationForm from "./registrationForm";

const LandingPage = () => {
    // const [showRegForm, setShowRegForm] = useState(false)
    return (
        <>
            <div id="LP-container">
                <section>
                    <LandingPageHeader />
                </section>
                <section>
                    <LandingPageMain />
                </section>
                <section>
                    <LandingPageFooter />
                </section>
            </div>
        </>
    )
}

export default LandingPage;