import React from 'react';

function FirstPage() {
  return (
   <div className="firstPage">
          <button onClick={()=> setlogin(true)}>Login</button>
        <button onClick={()=> setloggedasGuest(true)}>Login as Guest</button>
        </div>
        
  );
}

export default FirstPage;
