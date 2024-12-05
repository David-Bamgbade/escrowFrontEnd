import '../styling/payment.css'
import {Link} from "react-router-dom";

const EscrowPayment =()=> {
    return (
        <div className="payment-page">
            <div className="button-links">
                <li>
                    <button className="complain-link"><Link to="/Complain">Back To ComplainPage</Link></button>
                </li>
                <br/>
                <li>
                    <button className="homepage-link"><Link to="/homepage">Back To HomePage</Link></button>
                </li>
            </div>
            <div className="payment-container"><h1 className="text">Welcome To The Escrow Payment Section</h1></div>
            <div className="payment-form">
                <form>
                    <label>Seller PhoneNumber </label>
                    <br/><br/>
                    <div>
                        <input
                            type="number"
                        /><br/><br/><br/>
                    </div>
                    <label>Complain Message</label>
                    <br/><br/>
                    <div>
                        <input
                            type="text"
                            required
                        /><br/><br/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EscrowPayment;