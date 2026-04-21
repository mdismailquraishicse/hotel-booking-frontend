import { useState } from "react";
import { useLocation } from "react-router-dom";
import { handleBookNow } from "../services/api";
import { useNavigate } from "react-router-dom";
import "./BookingSummary.css"
import "../styles/global.css"

function BookingSummary(){
    const location = useLocation();
    const summary = location.state;
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()

    async function handleClick(){
        if (!checkIn || !checkOut) {
            alert("Please select check-in and check-out dates");
            return
        }
        const res =await handleBookNow(summary.room_type_id, checkIn, checkOut, summary.capacity, summary.totalAmount)
        if (res.status === "failed") {
            setErrorMessage(res.message)
            return;
        };
        if (res.status === "success") {
            if (res.result === false) {
                setErrorMessage(res.message)
                return;
            }
        };
        navigate("/bookings")
    };

    return (
        <div className="booking-summary">
            <h1>Booking Summary</h1>
            {/* <p>Room: {summary.room_type}</p> */}

            <span>Check-in: <input type="date" onChange={(e)=>{
                setCheckIn(e.target.value)
            }} /></span>

            <span>Check-out: <input type="date" onChange={(e)=>{
                setCheckOut(e.target.value)
            }} /></span>

            <p>Guests: {summary.capacity}</p>
            <p>Total: ${summary.totalAmount}</p>

            <button onClick={handleClick}>Confirm Booking</button>
            <p className="error">{errorMessage}</p>
        </div>
    );
};

export default BookingSummary;