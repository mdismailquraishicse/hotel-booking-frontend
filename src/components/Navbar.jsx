import "../styles/global.css"
import { useState } from "react";
import { useEffect } from "react";

function Navbar(){

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("token")
        setIsLoggedIn(!!token)
    }, [])

    const handleLogout = () => {
        localStorage.removeItem("token")
        setIsLoggedIn(false)
        window.location.href = "/"
    }

    return (
        <div className="container">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#rooms">Rooms</a></li>
                <li><a href="/bookings">Bookings</a></li>
                <li><a href="#contact">Contact</a></li>

                {isLoggedIn ? (
                    <li>
                        <a className="logout-button" onClick={handleLogout}>Logout</a>
                    </li>
                ) : (
                    <li>
                        <a href="/login">Login</a>
                    </li>
                )}

                {/* <a href="/login">Login</a> */}
            </ul>
        </div>
    )
}

export default Navbar;