import "./styles/landingPageHeader.css"
import "./styles/font-classes.css"

const LandingPageHeader = () => {
    return (
        <>
            <div id="LP-header-container">
                <div className="Avenir-700-20" id="LP-header-left-col">
                    LAUNDRY
                </div>
                <div id="LP-header-right-col">
                    <div className="Avenir-14">
                        Home
                    </div>
                    <div className="Avenir-14">
                        Pricing
                    </div>
                    <div className="Avenir-14">
                        Career
                    </div>
                    <div className="Avenir-14">
                        Sign In
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPageHeader;