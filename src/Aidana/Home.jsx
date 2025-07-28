import React from 'react';
import CountUp from 'react-countup';
import ChatBox from './ChatBox';

function Home() {
  return (
    <div className="font-sans">

      <section
        className="h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(https://i.pinimg.com/1200x/ae/e9/85/aee985215c8b98ae54cb840856d5c24c.jpg)`
        }}
      >
        <div className="bg-black bg-opacity-60 text-white p-8 rounded-md text-center max-w-2xl animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">
            Тәжірибелік және тәжірибелі <span className="text-orange-400">ОҚЫТУ</span>
          </h1>
          <p className="text-lg mb-6">
            Жатақхана, жұмыс және оқу орнын оңай табуға көмектесеміз.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/readmore"
              className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition"
            >
              Толығырақ
            </a>
            <a
              href="/apply"
              className="bg-yellow-400 text-black px-6 py-3 rounded-md hover:bg-yellow-500 transition font-semibold"
            >
              Қазір өтініш беру!
            </a>
          </div>
        </div>
      </section>

  
      <section className="py-16 px-4 text-center bg-white">
        <h2 className="text-red-500 text-2xl font-semibold mb-6 animate-slide-up">Біз туралы көбірек</h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-4">
          EduDorm — студенттерге арнап жасалған жоба. Біз 2024 жылдан бастап жатақхана, жұмыс және оқу мүмкіндіктерін ұсынудамыз. 
          Біздің мақсатымыз — білім алуды жеңіл әрі қолжетімді ету.
        </p>
        <p className="max-w-3xl mx-auto text-gray-600">
          Біз шетелде оқуға байланысты барлық қиындықтарды жеңуге көмектесеміз: тұрғын үй, құжаттар, университет таңдау және басқа да қолдау.
          Командамыз тәжірибелі мамандардан құралған.
        </p>
      </section>

  
      <section className="grid grid-cols-2 md:grid-cols-4 text-center py-12 bg-gray-50">
        {[
          { end: 300, label: 'Университет' },
          { end: 10000, label: 'Қуанышты студент' },
          { end: 300, label: 'Жалға берілетін пәтер' },
          { end: 10, label: 'Қызмет түрлері' }
        ].map((item, index) => (
          <div key={index} className="p-4 animate-fade-in">
            <h3 className="text-3xl text-red-500 font-bold">
              <CountUp end={item.end} duration={2} separator=" " />+
            </h3>
            <p className="text-gray-800 mt-2 font-medium">{item.label}</p>
          </div>
        ))}
      </section>

  
      <section className="bg-red-500 text-white py-10 px-4 text-center animate-slide-up">
        <h3 className="text-2xl font-semibold mb-4">EduDorm туралы көбірек білгіңіз келе ме?</h3>
        <p className="mb-6">Сұрақтарыңыз болса, бізге кез келген уақытта жазыңыз!</p>
        <a
          href="/contact"
          className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-red-500 transition"
        >
          Қазір байланысу
        </a>
      </section>
      <ChatBox />
    </div>
  );
}

export default Home;
