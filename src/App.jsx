import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import BookingSummary from './pages/BookingSummary'
import Bookings from './pages/Bookings'
import Payment from './pages/Payment'

function App() {

  return (
    <div className="container">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/booking-summary" element={<BookingSummary />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </div>
  )
}

export default App
