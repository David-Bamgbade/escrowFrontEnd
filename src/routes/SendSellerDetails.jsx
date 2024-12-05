import '../styling/sendSellerDetails.css'
import {Link} from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

const SendSellerDetails =()=> {

    const [formData, setFormData] = useState({
        sellerName: '',
        productPrice: '',
        sellerPhoneNumber: '',
        sellerEmail: '',
        sellerAccountNumber: '',
        sellerBankName: '',
        productName: '',
        clientPhoneNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };



    return (
        <div className="sellerDetails-page">
            <div className="button-links">
                <li>
                    <button className="payment-link"><Link to="/payment">Back To ComplainPage</Link></button>
                </li>
                <br/>
                <li>
                    <button className="homepage-link"><Link to="/homepage">Back To HomePage</Link></button>
                </li>
                <br/>
                <li>
                    <button className="complain-link"><Link to="/Complain">Back To ComplainPage</Link></button>
                </li>
            </div>
            <div className="sellerDetails-container"><h1 className="text">Welcome! Enter Seller Details </h1></div>
            <div className="sellerDetails-form">
                <form>
                    <label>Seller Name</label>
                    <br/><br/>
                    <input
                        type="text"
                        name="sellerName"
                        value={formData.sellerName}
                        onChange={handleChange}
                        required
                    /><br/><br/>

                    <label>Product Price</label>
                    <br/><br/>
                    <input
                        type="text"
                        name="productPrice"
                        value={formData.productPrice}
                        onChange={handleChange}
                        required
                    /><br/><br/>

                    <label>Seller PhoneNumber</label>
                    <br/><br/>
                    <input
                        type="text"
                        name="sellerPhoneNumber"
                        value={formData.sellerPhoneNumber}
                        onChange={handleChange}
                        required
                    /><br/><br/>

                    <label>sellerEmail</label>
                    <br/><br/>
                    <input
                        type="text"
                        name="sellerEmail"
                        value={formData.sellerEmail}
                        onChange={handleChange}
                    /><br/><br/>

                    <label>Seller Account Number</label>
                    <br/><br/>
                    <input
                        type="text"
                        name="sellerAccountNumber"
                        value={formData.sellerAccountNumber}
                        onChange={handleChange}
                        required
                    /><br/><br/>

                    <label>Seller Bank Name</label>
                    <br/><br/>
                    <input
                        type="text"
                        name="sellerBankName"
                        value={formData.sellerBankName}
                        onChange={handleChange}
                        required
                    /><br/><br/>

                    <label>Product Name</label>
                    <br/><br/>
                    <input
                        type="text"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                        required
                    /><br/><br/>

                    <label>Client PhoneNumber</label>
                    <br/><br/>
                    <input
                        type="text"
                        name="clientPhoneNumber"
                        value={formData.clientPhoneNumber}
                        onChange={handleChange}
                        required
                    /><br/><br/>

                    <button
                        type="button" // Use "button" to prevent the default form submission behavior
                        onClick={async (e) => {
                            e.preventDefault();
                            try {
                                const response = await axios.post('http://localhost:8080/client/sendSellerDetails', formData); // Update backend URL
                                alert('Seller Details Sent successful! Proceed To Send Money To Escrow');
                                console.log(response.data);
                            } catch (error) {
                                console.error('Error during signup:', error);
                                alert('Could Not Send Seller Details.');
                            }
                        }}
                    >
                        Submit Seller Details
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SendSellerDetails
