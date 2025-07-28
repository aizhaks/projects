import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 text-sm">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <h4 className="text-white text-lg mb-4 border-b border-gray-700 pb-2">EduDorm</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Басты бет</a></li>
            <li><a href="/https://enic-kazakhstan.edu.kz/ru/reference_information/universities" className="hover:underline">Университеттер</a></li>
            <li><a href="/Dormitories" className="hover:underline">Жатақханалар</a></li>
            <li><a href="/Education" className="hover:underline">Оқу курстары</a></li>
            <li><a href="/Jobs" className="hover:underline">Жұмыс</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-lg mb-4 border-b border-gray-700 pb-2">Соңғы пәтерлер</h4>
          <div className="space-y-3">
            <div>
              <p className="text-white">1 бөлме — Алматы орталығы</p>
              <span className="text-gray-400">25 000 ₸ / ай</span>
            </div>
            <div>
              <p className="text-white">2 бөлме — Астана, Сарыарқа</p>
              <span className="text-gray-400">30 000 ₸ / ай</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white text-lg mb-4 border-b border-gray-700 pb-2">Ұсынылатын университеттер</h4>
        <ul className="space-y-2">
  <li><a href="https://farabi.university/?lang=ru" target="_blank" rel="noopener noreferrer" className="hover:underline">ҚазНУ</a></li>
  <li><a href="https://sdu.edu.kz/language/ru/" target="_blank" rel="noopener noreferrer" className="hover:underline">SDU</a></li>
  <li><a href="https://kaznmu.edu.kz/ru/главная-страница/" target="_blank" rel="noopener noreferrer" className="hover:underline">КазНМУ</a></li>
  <li><a href="https://kbtu.edu.kz/ru/" target="_blank" rel="noopener noreferrer" className="hover:underline">КБТУ</a></li>
  <li><a href="https://almau.edu.kz/" target="_blank" rel="noopener noreferrer" className="hover:underline">ALMAU</a></li>
</ul>

        </div>
      </div>

      <div className="text-center mt-10 border-t border-gray-800 pt-4">
        <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} EduDorm.kz — Барлық құқықтар қорғалған.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#"><i className="fab fa-facebook-f text-white hover:text-blue-400"></i></a>
          <a href="#"><i className="fab fa-instagram text-white hover:text-pink-400"></i></a>
          <a href="#"><i className="fab fa-youtube text-white hover:text-red-500"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
