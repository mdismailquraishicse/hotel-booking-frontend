import "./Register.css"
import "../styles/global.css"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

function Register(){
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState("")

    const [formData, setFormData] = useState({
        name: "",
        gender:"",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]:value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isRegirstered = await registerUser(formData.name,
            formData.gender,
            formData.email,
            formData.password)

        console.log("registration response: ", isRegirstered)
        if (isRegirstered.status === "failed") {
            setErrorMessage(isRegirstered["message"])
            return;
        } else {
            navigate("/login")
        }
        
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <h1>Register</h1>

            <div>
                <form onSubmit={handleSubmit} className="register-form" >

                    <input type="text" name="name" placeholder="John Deo" onChange={handleChange} />
                    <input type="text" name="phone" placeholder="9876543210" onChange={handleChange} />
                    <input type="email" name="email" placeholder="john@example.com" onChange={handleChange} />
                    <input type="password" name="password" onChange={handleChange} />

                    <div className="gender-box">
                        <label >
                            <input type="radio" name="gender" value="male" onChange={handleChange} />Male
                        </label>

                        <label>
                            <input type="radio" name="gender" value="female" onChange={handleChange} />Female
                        </label>
                    </div>


                    <button type="submit">Register</button>
                </form>
                <p className="register-footer" >
                    Already have an account?
                    <span onClick={() => navigate("/login")}>Login</span>
                </p>
                <p className="error">{errorMessage}</p>
            </div>
        </div>
        </div>
    )
};
export default Register;