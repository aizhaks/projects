import React, { useState } from "react";
import axios from "axios";

function Apply() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    reason: "",
  });

  const API_URL = "https://683ffb195b39a8039a5658ce.mockapi.io/application";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(API_URL, form);

      alert("Өтінішіңіз қабылданды! Біз сізбен жақын арада хабарласамыз.");

      setForm({
        name: "",
        email: "",
        phone: "",
        city: "",
        reason: "",
      });
    } catch (error) {
      console.error("Қате:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center text-yellow-500">Өтініш беру</h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded shadow">
        <input
          type="text"
          name="name"
          placeholder="Аты-жөніңіз"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Телефон нөмірі"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full border p-3 rounded"
        />
        <input
          type="text"
          name="city"
          placeholder="Қала"
          value={form.city}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />
        <textarea
          name="reason"
          placeholder="Қысқаша себебіңіз"
          value={form.reason}
          onChange={handleChange}
          className="w-full border p-3 rounded h-32 resize-none"
        ></textarea>

        <button
          type="submit"
          className="bg-yellow-400 text-black font-bold py-3 px-6 rounded hover:bg-yellow-500 transition"
        >
          Жіберу
        </button>
      </form>

      <div className="text-center mt-6">
        <a href="/applications" className="text-blue-600 underline hover:text-blue-800">
          Барлық өтініштерді көру
        </a>
      </div>
    </div>
  );
}

export default Apply;
