import React from 'react';
import {Link} from 'react-router-dom'
function Dashboard() {
  return (
    <div>
      <Link to="profile">profile</Link>
      <Link to="settings">settings</Link>
    </div>
  );
}

export default Dashboard;
