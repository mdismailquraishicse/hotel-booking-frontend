import { useNavigate } from "react-router-dom";

function Register(){
    const navigate = useNavigate()
    return (
        <div className="container">
            <header>
                <h1>Registration</h1>
            </header>
            <div>
                <form>
                    <input type="text" name="fullname" placeholder="John Deo" />
                    Gender:
                    <input type="radio" name="sex" id="" />Male
                    <input type="radio" name="sex" />Female
                    <input type="text" name="phone" placeholder="9876543210" />
                    <input type="email" name="email" placeholder="john@example.com" />
                    <input type="password" name="password" />
                    <button type="submit">Register</button>
                </form>
                <p>
                    Already have an account?
                    <span onClick={() => navigate("/login")}>Login</span>
                </p>
            </div>
        </div>
    )
};
export default Register;