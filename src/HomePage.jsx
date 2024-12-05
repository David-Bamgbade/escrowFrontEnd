import {Link} from "react-router-dom";
import './styling/homepage.css'

function HomePage () {
    return (
        <div className="HomePageContainer">
        <div className= "home-page">
            <div className="button">
                <h1>Welcome To AD Escrow</h1>
                <button className="signup-button"><Link to="/Complain">Complain</Link></button>
                <button className="signup-button"><Link to="/payment">Escrow Payment</Link></button>
                <button className="signup-button"><Link to="/signup">Sign Up</Link></button>
                <button className="signup-button"><Link to="/sendSellerDetails">Enter Seller Details</Link></button>
            </div>
        </div>
        </div>
    )
}

export default HomePage