import '../styling/complain.css'
import {Link} from "react-router-dom";

const Complain =()=> {
    return (
        <>
            <div className="complain-page">
                <div className="button-links">
                   <li>
                    <button className="payment-link"><Link to="/payment">Back To Escrow Payment</Link></button>
                   </li>
                    <br/>
                    <li>
                       <button className="homepage-link"><Link to="/homepage">Back To HomePage</Link></button>
                    </li>
                </div>
                <div className="text-container"><h1 className="text">Welcome To The Complain Section</h1></div>
                <div className="complain-form">
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
        </>
    )
}

export default Complain