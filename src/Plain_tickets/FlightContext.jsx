import React, { createContext, useState } from 'react';

export const FlightContext = createContext();

export const FlightProvider = ({ children }) => {
  const [flights, setFlights] = useState([]);
  const [bookings, setBookings] = useState([]);

  const updateFlightSeats = (flightId) => {
    setFlights(prev =>
      prev.map(f =>
        f.id === flightId ? { ...f, seats: f.seats - 1 } : f
      )
    );
  };

  return (
    <FlightContext.Provider value={{
      flights, setFlights,
      bookings, setBookings,
      updateFlightSeats
    }}>
      {children}
    </FlightContext.Provider>
  );
};

