import React, { useState } from "react";

const jobData = [
  {
    id: 1,
    title: "Кофе сатушы (бариста)",
    city: "Алматы",
    category: "Қоғамдық тамақтану",
    salary: "1500 ₸ / сағат",
    contact: "https://t.me/job_almaty_barista",
    tags: ["Кешкі жұмыс", "Жаңа"]
  },
  {
    id: 2,
    title: "Онлайн ағылшын мұғалімі",
    city: "Астана",
    category: "Білім",
    salary: "5000 ₸ / сабақ",
    contact: "https://t.me/english_teacher_astana",
    tags: ["Толық емес жұмыс күні"]
  },
  {
    id: 3,
    title: "Курьер (тамақ жеткізу)",
    city: "Шымкент",
    category: "Курьер",
    salary: "3000 ₸ / тапсырыс",
    contact: "https://t.me/shymkent_delivery",
    tags: ["Жаңа"]
  },
  {
    id: 4,
    title: "Кассир супермаркетке",
    city: "Алматы",
    category: "Сауда",
    salary: "1800 ₸ / сағат",
    contact: "https://t.me/supermarket_cashier",
    tags: ["Кешкі жұмыс"]
  },
  {
    id: 5,
    title: "Мектеп оқушыларына репетитор (математика)",
    city: "Астана",
    category: "Білім",
    salary: "6000 ₸ / сабақ",
    contact: "https://t.me/math_tutor_astana",
    tags: ["Толық емес жұмыс күні", "Жаңа"]
  },
  {
    id: 6,
    title: "Серіктестік арқылы өнім сату (фриланс)",
    city: "Онлайн",
    category: "Сату",
    salary: "пайыз арқылы",
    contact: "https://t.me/affiliate_sales",
    tags: ["Онлайн", "Еркін график"]
  }
];

function Jobs() {
  const [selectedCity, setSelectedCity] = useState("Барлығы");
  const [selectedCategory, setSelectedCategory] = useState("Барлығы");

  const filteredJobs = jobData.filter((job) => {
    const matchCity = selectedCity === "Барлығы" || job.city === selectedCity;
    const matchCat = selectedCategory === "Барлығы" || job.category === selectedCategory;
    return matchCity && matchCat;
  });

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-2">StudentJob.kz</h1>
      <p className="mb-6 text-lg text-gray-600">Сенің алғашқы жұмысың осында басталады 🔍</p>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div>
          <label className="text-lg mr-2">Қала:</label>
          <select
            className="border rounded px-4 py-2"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option>Барлығы</option>
            <option>Алматы</option>
            <option>Астана</option>
            <option>Шымкент</option>
            <option>Онлайн</option>
          </select>
        </div>

        <div>
          <label className="text-lg mr-2">Сала:</label>
          <select
            className="border rounded px-4 py-2"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option>Барлығы</option>
            <option>Қоғамдық тамақтану</option>
            <option>Білім</option>
            <option>Курьер</option>
            <option>Сауда</option>
            <option>Сату</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filteredJobs.map((job) => (
          <div key={job.id} className="bg-white shadow-md border rounded p-5">
            <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
            <p className="text-gray-600 mb-1">📍 {job.city}</p>
            <p className="text-gray-600 mb-1">🗂️ {job.category}</p>
            <p className="text-blue-600 font-bold mb-2">💸 {job.salary}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {job.tags &&
                job.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-sm px-2 py-1 rounded-full text-gray-800 border"
                  >
                    {tag}
                  </span>
                ))}
            </div>
            <a
              href={job.contact}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 inline-block"
            >
              Қазір жүгіну
            </a>
          </div>
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <p className="mt-6 text-gray-500">Тапсырысқа сәйкес жұмыс табылмады.</p>
      )}
  
    </div>
  );
}

export default Jobs;
