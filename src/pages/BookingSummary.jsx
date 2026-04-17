import { useState } from "react";
import { useLocation } from "react-router-dom";
import { handleBookNow } from "../services/api";
import { useNavigate } from "react-router-dom";
import "./BookingSummary.css"

function BookingSummary(){
    const location = useLocation();
    const summary = location.state;
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")
    const navigate = useNavigate()

    function handleClick(){
        console.log(checkIn)
        handleBookNow(summary.room_id, summary.room_type, checkIn, checkOut, summary.capacity, summary.totalAmount)
        navigate("/bookings")
    };

    return (
        <div className="booking-summary">
            <h1>Booking Summary</h1>
            <p>Room: {summary.room_type}</p>

            <span>Check-in: <input type="date" onChange={(e)=>{
                setCheckIn(e.target.value)
            }} /></span>

            <span>Check-out: <input type="date" onChange={(e)=>{
                setCheckOut(e.target.value)
            }} /></span>

            <p>Guests: {summary.capacity}</p>
            <p>Total: ${summary.totalAmount}</p>

            <button onClick={handleClick}>Confirm Booking</button>
        </div>
    );
};

export default BookingSummary;