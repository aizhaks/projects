import React, { useEffect, useState } from "react";
import axios from "axios";

function ApplicationsList() {
  const [applications, setApplications] = useState([]);
  const API_URL = "https://683ffb195b39a8039a5658ce.mockapi.io/application";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API_URL);
        setApplications(res.data);
      } catch (error) {
        console.error("Қате:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Барлық өтініштер</h1>

      {applications.length === 0 ? (
        <p className="text-center text-gray-500">Өтініштер табылмады.</p>
      ) : (
        <ul className="space-y-4">
          {applications.map((app) => (
            <li key={app.id} className="bg-white p-4 rounded shadow">
              <p><strong>Аты-жөні:</strong> {app.name}</p>
              <p><strong>Email:</strong> {app.email}</p>
              <p><strong>Телефон:</strong> {app.phone}</p>
              <p><strong>Қала:</strong> {app.city}</p>
              <p><strong>Себеп:</strong> {app.reason}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ApplicationsList;
