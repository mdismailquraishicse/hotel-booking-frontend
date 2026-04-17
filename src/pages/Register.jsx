import "./Register.css"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(){
    const navigate = useNavigate()

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const response = axios.post(
            "http://127.0.0.1:8000/register",
            {
                name:formData.name,
                gender:formData.gender,
                email:formData.email,
                password:formData.password,
            },
            {
                headers:{"Content-Type": "application/json"}
            }
        );
        const token = localStorage.getItem("token")
        navigate("/login")
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
            </div>
        </div>
        </div>
    )
};
export default Register;