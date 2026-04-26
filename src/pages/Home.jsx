import Amenities from "../components/Amenities"
import RoomCard from "../components/RoomCard"
import Contact from "../components/Contact"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import { useEffect, useState } from "react";
import axios from "axios"
import "./Home.css"


function Home(){
    const [rooms, setRooms] = useState([]);
    const [searchActive, setSearchActive] = useState(false);

    useEffect(()=>{
        async function fetchRooms(){
            try {
                const res = await axios.get("http://127.0.0.1:8000/api/v1/rooms/search-available-rooms");
                setRooms(res.data.result)
            } catch (err) {
                console.error("Failed to fetch rooms:", err)
            }
        }
        fetchRooms();
    }, []);

    return (
        <div className="container">
            <Navbar />
            <Hero setRooms={setRooms} setSearchActive={setSearchActive} />
            <div>
                <h2 id="rooms">
                    {searchActive ? "Searched Rooms" : "Our Rooms"}
                </h2>

                <div className="room-listing">
                    {rooms.map(room => (
                        <RoomCard key={room.room_type_id} room={room} />
                    ))}
                </div>

            </div>
            <Amenities />
            <div id="contact">
                <Contact />
            </div>
        </div>
    )
}

export default Home