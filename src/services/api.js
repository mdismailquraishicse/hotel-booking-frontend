import axios from "axios";

const base_url = "http://127.0.0.1:8000"

export async function registerUser(name, gender, email, password){

    const response = await axios.post(
        `${base_url}/api/v1/auth/register`,
        {
            name: name,
            gender: gender,
            email: email,
            password: password
        },
        {
            headers:{"Content-Type": "application/json"}
        }
    );
    return response.data
};

export async function login(email, password){
    const response = await axios.post(
        `${base_url}/api/v1/auth/login`,
        {
            email: email, password: password
        },
        {
            headers: {"Content-Type": "application/json"}
        }
    );
    return response.data
};

export default async function handleSearch(checkIn, checkOut, guests){
    const token = localStorage.getItem("token")
    const response =await axios.get(`${base_url}/api/v1/rooms/search-available-rooms`, {
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

export async function handleBookNow(id, checkIn, checkOut, guests, price) {

    const token = localStorage.getItem("token")
    const response= await axios.post(`${base_url}/api/v1/bookings/book-now`,
        {room_type_id: id, check_in:checkIn, check_out:checkOut, guests:guests, price:price},
        {
            headers: {Authorization: `Bearer ${token}`}
        }
    );
    console.log("response: ", response)
    return response.data
};