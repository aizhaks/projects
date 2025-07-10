import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const availableSeats = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

function FlightBookingdetails() {
  const { flightId } = useParams();
  const [flight, setFlight] = useState(null);
  const [form, setForm] = useState({ name: '', date: '', seat: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://683ffb195b39a8039a5658ce.mockapi.io/flights/${flightId}`)
      .then(res => res.json())
      .then(data => setFlight(data))
      .catch(err => console.error('Failed to fetch flight:', err));
  }, [flightId]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleBooking = () => {
    if (!form.name || !form.date || !form.seat) {
      setMessage('Барлық өрістерді толтырыңыз.');
      return;
    }

    if (flight.seats <= 0) {
      setMessage('Бұл рейсте бос орын жоқ.');
      return;
    }

    const updatedFlight = { ...flight, seats: flight.seats - 1 };

    fetch(`https://683ffb195b39a8039a5658ce.mockapi.io/flights/${flightId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedFlight)
    })
      .then(res => res.json())
      .then(data => {
        setFlight(data);
        setMessage('Сәтті брондалды!');
      })
      .catch(err => {
        console.error('Update error:', err);
        setMessage('Қате орын алды.');
      });
  };

  if (!flight) return <p>Жүктелуде...</p>;

  return (
    <div className="container">
      <div className="booking-grid">
        <div className="flight-details">
          <h2>Рейс</h2>
          <p><strong>{flight.from}</strong> → <strong>{flight.to}</strong></p>
          <p>Уақыты: {flight.date}</p>
          <p>Авиакомпания: {flight.avialine}</p>
          <p>Бағасы: {flight.price} ₸</p>
          <p>Қалған орындар: {flight.seats}</p>
        </div>
        <div className="booking-form">
          <h2>Брондау</h2>
          <input name="name" placeholder="Аты-жөні" value={form.name} onChange={handleChange} />
          <input name="date" type="date" value={form.date} onChange={handleChange} />
          <select name="seat" value={form.seat} onChange={handleChange}>
            <option value="">Орын таңдаңыз</option>
            {availableSeats.map(seat => (
              <option key={seat} value={seat}>{seat}</option>
            ))}
          </select>
          <button onClick={handleBooking}>Растау</button>
          <button className="back-btn" onClick={() => navigate(-1)}>← Артқа</button>
          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default FlightBookingdetails;
