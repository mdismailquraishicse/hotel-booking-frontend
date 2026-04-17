import "./Hero.css"
import { useState } from "react";
import handleSearch from "../services/api"
import RoomCard from "./RoomCard"


function Hero({ setRooms, setSearchActive }){
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")
    const [capacity, setGuest] = useState("")
    // const [searchResult, setSearchResult] = useState([])
    return (
        <div className="hero-container">
            <img id="hero-img" src="https://images.pexels.com/photos/7201513/pexels-photo-7201513.jpeg" alt="Hotel" />

            <div className="search">
                <h1>Welcome to Essotto</h1>
                <div>
                    <label htmlFor=""> Check-in : </label>
                    <input type="date" placeholder="Check-in" onChange={(e)=>{
                        setCheckIn(e.target.value)
                    }} />

                    <label htmlFor=""> Check-out : </label>
                    <input type="date" placeholder="Check-out" onChange={(e)=>{
                        setCheckOut(e.target.value)
                    }} />

                    <input placeholder="guests" onChange={(e)=>{
                        setGuest(e.target.value)
                    }} />
                    <button onClick={async ()=>{
                        const availableRooms = await handleSearch(checkIn, checkOut,capacity)
                        // setSearchResult(availableRooms)
                        setRooms(availableRooms);
                        setSearchActive(true);
                    }} >Search</button>

                    {/* <div className="room-listing">
                        {searchResult.map((room, index) => (
                            <RoomCard key={room.room_id} room={room} />
                        ))}
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Hero;