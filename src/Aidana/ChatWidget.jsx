
import React from "react";
import ChatBox from "./ChatBox";

function ChatWidget() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-center mt-6">Байланыс</h1>
      <p className="text-center text-gray-600 mb-6">Бізбен хабарласыңыз немесе көмекшімен сөйлесіңіз</p>

      <div className="text-center mb-6">
        <a href="mailto:studenthelp@example.com" className="text-blue-600 underline mr-4">Email</a>
        <a href="https://t.me/student_support_bot" className="text-blue-600 underline mr-4" target="_blank" rel="noreferrer">Telegram</a>
        <a href="https://wa.me/77001234567" className="text-blue-600 underline" target="_blank" rel="noreferrer">WhatsApp</a>
      </div>

      <ChatBox />
    </div>
  );
}

export default ChatWidget;
