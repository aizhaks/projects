import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const dormData = [
  {
    id: 1,
    name: "Алматы студенттер үйі",
    city: "Алматы",
    price: 25000,
    address: "Абая 120, Алматы",
    phone: "+7 700 123 4567",
    coords: [43.238949, 76.889709],
    image: "https://avatars.mds.yandex.net/get-altay/993981/2a00000187ae5fac27b44e7a271bc44d6522/L_height",
  },
  {
    id: 2,
    name: "Астана жатақханасы",
    city: "Астана",
    price: 30000,
    address: "Тәуелсіздік 45, Астана",
    phone: "+7 701 456 7890",
    coords: [51.128207, 71.430411],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkslVWSKMlavB8tec1p4pgndFof9qPKff-jOJlI6zYl-lh6_2FFARHfmkwfgA6i2QvMHw&usqp=CAU",
  },
  {
    id: 3,
    name: "Шымкент жатақханасы",
    city: "Шымкент",
    price: 20000,
    address: "Рысқұлов 17, Шымкент",
    phone: "+7 702 987 6543",
    coords: [42.341744, 69.590100],
    image: "https://auezov.edu.kz/ap/images/IMG-20191205-WA0020.jpg",
  },
  {
    id: 4,
    name: "Караганда жатақханасы",
    city: "Караганда",
    price: 18000,
    address: "Бухар жырау 15, Караганда",
    phone: "+7 701 222 3344",
    coords: [49.8047, 73.1094],
    image: "https://i5.photo.2gis.com/main/branch/84/70000001091342984/common",
  },
  {
    id: 5,
    name: "Тараз студенттік үйі",
    city: "Тараз",
    price: 17000,
    address: "Жамбыл 50, Тараз",
    phone: "+7 702 555 6677",
    coords: [42.8996, 71.3775],
    image: "https://avatars.mds.yandex.net/get-altay/1003687/2a00000186fe5420403cde99c6086ea926d9/orig",
  },
  {
    id: 6,
    name: "Атырау жатақханасы",
    city: "Атырау",
    price: 22000,
    address: "Сатпаев 33, Атырау",
    phone: "+7 700 888 9990",
    coords: [47.1164, 51.9235],
    image: "https://img.inform.kz/kazinform-photobank/media/2023-09-15/519650d1-446f-4713-a8b9-bea8e999bb9d.webp",
  },
  {
    id: 7,
    name: "Көкшетау студенттер үйі",
    city: "Көкшетау",
    price: 16000,
    address: "Абылай хан 77, Көкшетау",
    phone: "+7 777 111 2233",
    coords: [53.2886, 69.4048],
    image: "https://shokan.edu.kz/media/images/WhatsApp_Image_2024-01-09_at_12.28.original.format-webp_plVfFnV.webp",
  },
  {
    id: 8,
    name: "Қостанай жатақханасы",
    city: "Қостанай",
    price: 15500,
    address: "Байтурсынов 12, Қостанай",
    phone: "+7 777 444 5566",
    coords: [53.2192, 63.6287],
    image: "https://kstc.edu.kz/wp-content/uploads/2022/05/fasad.jpg",
  },
  {
    id: 9,
    name: "Ақтөбе жатақханасы",
    city: "Ақтөбе",
    price: 19000,
    address: "Әлия Молдағұлова 90, Ақтөбе",
    phone: "+7 705 303 3030",
    coords: [50.2839, 57.167],
    image: "https://avatars.mds.yandex.net/get-altay/1899727/2a00000186e1dfa72a834e4005b8cc2aa9e5/L_height",
  },
];

function Dormitories() {
  const [selectedCity, setSelectedCity] = useState("Барлығы");
  const [searchTerm, setSearchTerm] = useState("");

  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  const filteredDorms = dormData.filter((dorm) => {
    const matchCity = selectedCity === "Барлығы" || dorm.city === selectedCity;
    const matchSearch = dorm.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCity && matchSearch;
  });

  
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.DG && mapRef.current && !mapInstance.current) {
        clearInterval(interval);

        mapInstance.current = window.DG.map(mapRef.current, {
          center: [47.0, 68.0],
          zoom: 5,
        });

      
        dormData.forEach((dorm) => {
          window.DG.marker(dorm.coords)
            .addTo(mapInstance.current)
            .bindPopup(`<b>${dorm.name}</b><br/>${dorm.address}`);
        });
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Жатақхана тізімі</h2>

      <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mb-6 gap-4">
        <div>
          <label className="text-lg mr-2">Қала:</label>
          <select
            className="border border-gray-300 rounded px-4 py-2"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option>Барлығы</option>
            <option>Алматы</option>
            <option>Астана</option>
            <option>Шымкент</option>
            <option>Караганда</option>
            <option>Тараз</option>
            <option>Атырау</option>
            <option>Көкшетау</option>
            <option>Қостанай</option>
            <option>Ақтөбе</option>

          </select>
        </div>

        <div>
          <input
            type="text"
            placeholder="Атау бойынша іздеу..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full md:w-64"
          />
        </div>
      </div>

    
      <div
        ref={mapRef}
        style={{ width: "100%", height: "400px", marginBottom: "40px", borderRadius: "8px" }}
      />

    
      <div className="grid md:grid-cols-3 gap-6">
        {filteredDorms.map((dorm) => (
          <Link to={`/dorm/${dorm.id}`} className="block">
          <img src={dorm.image} alt={dorm.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{dorm.name}</h3>  
          <p className="text-gray-600 mb-1">{dorm.address}</p>
            <p className="text-blue-600 font-bold mb-3">{dorm.price.toLocaleString()} ₸ / ай</p>
            <span className="text-white bg-blue-600 hover:bg-blue-700 text-sm py-2 px-4 rounded text-center">
              Толығырақ
            </span>
          </div>
        </Link>
        
        ))}
      </div>

      {filteredDorms.length === 0 && (
        <p className="mt-6 text-gray-500">Тапсырысқа сәйкес жатақхана табылмады.</p>
      )}
  
    </div>
    
    
  );
}


export default Dormitories;
