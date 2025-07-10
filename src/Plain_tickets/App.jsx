import React from 'react';
import { BrowserRouter,Routes,  Route } from 'react-router-dom';
import FlightLIst from './FlightLIst';
import FlightBookingdetails from './FlightBookingdetails';
import { FlightProvider } from './FlightContext';
function App() {
  return (
 <FlightProvider>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<FlightLIst/>}/>
    <Route path="/booking/:flightId" element={<FlightBookingdetails/>}/>
    
    </Routes></BrowserRouter>
 </FlightProvider>
  );
}

export default App;
