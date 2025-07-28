import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">

        <div>
          <h1 className="text-3xl font-bold mb-4 text-red-500">Бізбен байланысыңыз</h1>
          <p className="text-gray-600 mb-6">
            Сұрақтарыңыз болса немесе көмек қажет болса, бізге жазыңыз. Біз көмектесуге әрдайым дайынбыз!
          </p>

          {submitted ? (
            <div className="bg-green-100 text-green-800 p-4 rounded text-center">
              ✅ Хабарламаңыз сәтті жіберілді!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 bg-white p-6 rounded shadow">
              <input
                type="text"
                name="name"
                placeholder="Аты-жөніңіз"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-red-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded focus:ring-2 focus:ring-red-400"
              />
              <textarea
                name="message"
                placeholder="Хабарлама"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-3 rounded h-32 resize-none focus:ring-2 focus:ring-red-400"
              ></textarea>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-red-500 text-white font-semibold py-2 px-6 rounded hover:bg-red-600 transition"
                >
                  Жіберу
                </button>
                <button
                  type="button"
                  onClick={() => setForm({ name: "", email: "", message: "" })}
                  className="bg-gray-200 text-gray-700 font-semibold py-2 px-6 rounded hover:bg-gray-300 transition"
                >
                  Болдырмау
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="bg-gray-50 p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Байланыс ақпараты</h2>
          <p className="mb-2 text-gray-700">📍 Aлматы қаласы, Бостандық ауданы, Казахфильм 2</p>
          <p className="mb-2 text-gray-700">📞 +7 707 232 34 34 | +7 747 473 43 43</p>
          <p className="mb-2 text-gray-700">📧 contact@studenthelp.ro</p>
          <p className="mb-4 text-blue-600">
            🌐 <a href="https://sdu.edu.kz/language/kz/%D1%81%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%82%D1%82%D0%B5%D1%80-%D2%AF%D0%B9%D1%96/" target="_blank" rel="noopener noreferrer">studenthelp.ro</a>
          </p>

          <h3 className="text-md font-medium text-gray-800 mb-2">Карта арқылы табу:</h3>
          <iframe
  title="Kazakhfilm 2 Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.5245737712283!2d76.87057947625853!3d43.20862218753961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836ed1990f674f%3A0x7119e6ea943bc517!2sKazakhfilm%202!5e0!3m2!1sen!2skz!4v1721423702950!5m2!1sen!2skz"
  width="100%"
  height="300"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>


        </div>
      </div>
    </>
  );
}

export default Contact;
