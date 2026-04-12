import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate()
    return (
        <div className="container">
            <header>
                <h1>Login</h1>
            </header>
            <form>
                <input type="email" placeholder="email@example.com" />
                <input type="password" />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account?
                <span onClick={() => navigate("/register")}>Register</span>
            </p>
        </div>
    )
}
export default Login;