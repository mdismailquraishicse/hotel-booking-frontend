import "./RoomCard.css"
import { useNavigate } from "react-router-dom"


function RoomCard({room}){
    const navigate = useNavigate()

    const handleClick = ()=>{
        console.log("generating summary...")
        const summary_data = {
            room_type_id: room.room_type_id,
            // room_type: room.room_type,
            check_in: room.check_in,
            check_out: room.check_out,
            capacity: room.capacity,
            totalAmount: room.price
    };

    navigate("/booking-summary", {state: summary_data});
    };

    return (
        <div className="room-card">
            <div className="header">
                <h2>{room.room_type}</h2>
                <img src={room.image} alt="Room" />
            </div>
            <p>₹{room.price}</p>
            <p>{room.capacity} guests</p>
            <button onClick={handleClick}>Book now</button>
        </div>
    )
}

export default RoomCard;