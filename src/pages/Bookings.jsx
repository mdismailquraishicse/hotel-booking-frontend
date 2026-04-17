import Navbar from "../components/Navbar"
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./Bookings.css"


function Bookings(){

    const [booking, setBooking] = useState([]);
    useEffect(()=>{
        async function fetchRooms(){
            try {
                const res = await axios.get("http://127.0.0.1:8000/bookings");
                setBooking(res.data)
            } catch (err) {
                console.error("Failed to fetch rooms:", err)
            }
        }
        fetchRooms();
    }, []);

    return (
        <div className="bookings-container">
            <Navbar />
            <h2 className="bookings-title">Your Bookings</h2>
            <div className="table-wrapper">
                <table className="bookings-table" >
                    <thead>
                        <tr>
                            <th>Room id</th>
                            <th>Type</th>
                            <th>Check-in</th>
                            <th>Check-out</th>
                            <th>Guests</th>
                            <th>Price</th>
                        </tr>
                    </thead>

                    <tbody>
                        {booking.map((item) => (
                            <tr key={item.room_id}>

                                <td>{item.room_id}</td>
                                <td>{item.room_type}</td>
                                <td>{item.check_in}</td>
                                <td>{item.check_out}</td>
                                <td>{item.capacity}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;