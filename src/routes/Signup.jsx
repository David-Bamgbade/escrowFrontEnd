import '../styling/signUp.css'
import {Link} from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

const Signup =()=> {

        const [formData, setFormData] = useState({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
        });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };



    return (
        <div className="signup-page">
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
            <div className="signup-container"><h1 className="text">Welcome To The Signup Section</h1></div>
            <div className="signup-form">
                <form>
                    <label>First Name</label>
                    <br/><br/>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    /><br/><br/><br/>

                    <label>Last Name</label>
                    <br/><br/>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    /><br/><br/>

                    <label>Email</label>
                    <br/><br/>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    /><br/><br/><br/>

                    <label>PhoneNumber</label>
                    <br/><br/>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    /><br/><br/>

                    <label>Password</label>
                    <br/><br/>
                    <input
                        type="text"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    /><br/><br/>
                    <button
                        type="button" // Use "button" to prevent the default form submission behavior
                        onClick={async (e) => {
                            e.preventDefault();
                            try {
                                const response = await axios.post('http://localhost:8080/client/signUp', formData); // Update backend URL
                                alert('Signup successful!');
                                console.log(response.data);
                            } catch (error) {
                                console.error('Error during signup:', error);
                                alert('Signup failed.');
                            }
                        }}
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Signup
