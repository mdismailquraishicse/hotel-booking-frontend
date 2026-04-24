import Navbar from "../components/Navbar"
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./Bookings.css"
import { cancelBooking } from "../services/api";


function Bookings(){

    const [booking, setBooking] = useState([]);
    useEffect(()=>{
        async function fetchRooms(){
            try {
                const token = localStorage.getItem("token")
                const res = await axios.get("http://127.0.0.1:8000/api/v1/bookings/fetch-bookings", {headers: {Authorization: `Bearer ${token}`}});
                console.log(res)
                setBooking(res.data.result)
            } catch (err) {
                console.error("Failed to fetch rooms:", err)
            }
        }
        fetchRooms();
    }, []);

    const handleCancelBooking = (id) => {
        // alert("this is cancel booking", id)
        const confirmDelete = window.confirm("Are you sure you want to cancel this booking?");

        if (!confirmDelete) return;

        cancelBooking(id)
        setBooking((prev) => prev.filter((item) => item.id !== id));
    }

    return (
        <div className="bookings-container">
            <Navbar />
            <h2 className="bookings-title">Your Bookings</h2>
            <div className="table-wrapper">
                <table className="bookings-table" >
                    <thead>
                        <tr>
                            <th>Room Number</th>
                            <th>Type</th>
                            <th>Check-in</th>
                            <th>Check-out</th>
                            <th>Guests</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {booking.map((item) => (
                            <tr key={item.room_id}>

                                <td>{item.room_no}</td>
                                <td>{item.room_type}</td>
                                <td>{item.check_in}</td>
                                <td>{item.check_out}</td>
                                <td>{item.guests}</td>
                                <td>{item.price}</td>
                                <td>{item.status}</td>
                                <button className="btn-cancel" onClick={
                                    () => handleCancelBooking(item.id)
                                }
                                >Cancel Booking</button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;