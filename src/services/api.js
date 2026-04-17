import axios from "axios";

const base_url = "http://127.0.0.1:8000"

export default async function hangleSearch(checkIn, checkOut, guests){
    const token = localStorage.getItem("token")
    const response =await axios.get(`${base_url}/search-available-rooms`, {
        params: {
            check_in:checkIn,
            check_out:checkOut,
            capacity:guests
        },

        headers: {Authorization: token}

        });
    if (response.data.status === 'success'){
        return response.data.result
    }
    else {
        console.log("status not success")
        return []
    }
};

export async function handleBookNow(id, type, checkIn, checkOut, guests, price) {
    const token = localStorage.getItem("token")
    const response= await axios.post(`${base_url}/bookings`,
        {email:"mdismailquraishicse@gmail.com",room_id:id, room_type: type, check_in:checkIn, check_out:checkOut, guests:guests, price:price},
        {
            headers: {Authorization: token}
        }
    );
    console.log("response: ", response)
};