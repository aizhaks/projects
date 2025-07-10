import React from 'react';

function GuestPage() {
  return (
    <div className="guest_page">
             <h1>Welcome, Guest</h1>
             <button onClick={()=> setloggedasGuest(false)}>Log out</button>
        </div> 
  );
}

export default GuestPage;
