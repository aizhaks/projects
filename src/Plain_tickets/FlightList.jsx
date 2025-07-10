import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FlightContext } from './FlightContext';

function FlightList() {
  const { flights, setFlights } = useContext(FlightContext);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://683ffb195b39a8039a5658ce.mockapi.io/flights')
      .then(res => res.json())
      .then(data => setFlights(data))
      .catch(err => console.error('Failed to fetch flights:', err));
  }, []);

  const filteredFlights = flights.filter(flight =>
    flight.from.toLowerCase().includes(search.toLowerCase()) ||
    flight.to.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Рейстер тізімі</h1>
      <input
        type="text"
        placeholder="Қаланы іздеңіз..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {filteredFlights.map(flight => (
        <div className="card" key={flight.id}>
          <p><strong>{flight.from}</strong> → <strong>{flight.to}</strong></p>
          <p>Уақыты: {flight.date}</p>
          <p>Авиакомпания: {flight.avialine}</p>
          <p>Бағасы: {flight.price} tenge</p>
          <p>Қалған орындар: {flight.seats}</p>
          <button onClick={() => navigate(`/booking/${flight.id}`)}>Брондау</button>
        </div>
      ))}
    </div>
  );
}

export default FlightList;
