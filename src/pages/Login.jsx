import "./Login.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(){
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]:value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post(
            "http://127.0.0.1:8000/login",
            {email:formData.email, password:formData.password},
            {
                headers:{"Content-Type": "application/json"}
            }
        );
        const token = response.data.token
        if (token){
            localStorage.setItem("token", token);
            navigate("/")
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Login</h1>

            <form onSubmit={handleSubmit} className="login-form" >
                <input type="email" name="email" placeholder="email@example.com" onChange={handleChange} />
                <input type="password" name="password" onChange={handleChange} />
                <button type="submit">Login</button>
            </form>
            <p className="login-footer" >Don't have an account?
                <span onClick={() => navigate("/register")}>Register</span>
            </p>
            </div>
        </div>
    )
}
export default Login;