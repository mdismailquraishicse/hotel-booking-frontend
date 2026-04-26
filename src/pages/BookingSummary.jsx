import { useState } from "react";
import { useLocation } from "react-router-dom";
import { handleBookNow, makePayment } from "../services/api";
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
        const bookNowRes =await handleBookNow(summary.room_type_id, checkIn, checkOut, summary.capacity, summary.totalAmount)
        if (bookNowRes.status === "failed") {
            setErrorMessage(bookNowRes.message)
            return;
        };
        if (bookNowRes.status === "success") {
            if (bookNowRes.result === -1) {
                setErrorMessage(bookNowRes.message)
                return;
            }
            const response_payment = await makePayment(bookNowRes.result, summary.totalAmount, "Hotel booking")
        };
        navigate("/bookings")
    };

    return (
        <div className="booking-summary">
            <h1>Booking Summary</h1>

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