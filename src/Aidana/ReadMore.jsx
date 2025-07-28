import React from "react";

function ReadMore() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center text-red-500">EduDorm туралы</h1>

      <p className="mb-4">
        <strong>EduDorm</strong> — Қазақстандағы студенттерге арналған ең ірі онлайн платформа. Біз студенттерге жатақхана, жұмыс, оқу курстары және университеттерді іздеуде көмектесеміз.
      </p>

      <p className="mb-4">
        Біздің мақсатымыз — әр студентке ыңғайлы, қауіпсіз және қолжетімді жағдай жасау. Біз білім алуға кедергі болатын тұрмыстық мәселелерді азайтуға тырысамыз.
      </p>

      <p className="mb-4">
        Жобамыз 2024 жылы басталды және қысқа уақыт ішінде мыңдаған студентке көмек көрсетті. Біз университеттермен, жатақханалармен және жұмыс берушілермен тікелей жұмыс жасаймыз.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4 text-red-500">Біз ұсынатын қызметтер:</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Жатақхана іздеу және брондау</li>
        <li>Оқу курстарына тіркелу</li>
        <li>Студенттерге арналған жұмыс ұсыныстары</li>
        <li>Жоғары оқу орындары туралы ақпарат</li>
        <li>Стипендия мен шетелге оқуға өтініш беру</li>
      </ul>

      <div className="mt-10 text-center">
        <a
          href="/apply"
          className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-500 transition"
        >
          Қазір өтініш беріңіз
        </a>
      </div>
    </div>
  );
}

export default ReadMore;
