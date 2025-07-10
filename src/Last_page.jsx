import React from 'react';

function LastPage() {
  return (
   <div className="LastPage">
          <h1>Welcome, name</h1>
          <p>Email: </p>
          <button>Remove</button>
          <button onClick={()=> setlogin(false)}>Log out</button>
        </div>
  );
}

export default LastPage;
