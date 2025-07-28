
import React from "react";
import { useParams, Link } from "react-router-dom";
import dormData from "./DormData";

function DormDetail() {
  const { id } = useParams();
  const dorm = dormData.find(d => d.id === +id);

  if (!dorm) {
    return <div className="p-6">Жатақхана табылмады 😕</div>;
  }

  const { name, city, address, phone, price, image, description, gallery, reviews } = dorm;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <Link to="/" className="text-blue-600 hover:underline mb-4 block">&larr; Артқа</Link>
      
      <img src={image} alt={name} className="w-full h-96 object-cover rounded-lg shadow" />

      <div className="mt-6 space-y-4">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p><strong>Қала:</strong> {city}</p>
        <p><strong>Мекенжай:</strong> {address}</p>
        <p><strong>Телефон:</strong> <a href={`tel:${phone}`} className="text-blue-600">{phone}</a></p>
        <p className="text-xl font-semibold text-blue-600">Бағасы: {price.toLocaleString()} ₸ / ай</p>

        {description && (
          <div>
            <h2 className="text-xl font-semibold">Сипаттама:</h2>
            <p>{description}</p>
          </div>
        )}

        {gallery?.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold">Галерея:</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
              {gallery.map((src, idx) => (
                <img key={idx} src={src} alt={`${name} сурет ${idx+1}`} className="h-40 w-full object-cover rounded" />
              ))}
            </div>
          </div>
        )}

        {reviews?.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold">Пікірлер:</h2>
            <div className="space-y-4 mt-2">
              {reviews.map((r, i) => (
                <div key={i} className="bg-gray-100 p-4 rounded">
                  <p className="italic">"{r.text}"</p>
                  <p className="text-sm text-gray-600">— {r.author}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DormDetail;
