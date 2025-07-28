import React, { useState } from "react";

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const GEMINI_API_KEY = "AIzaSyAtOX-Yvymqz8ogViLD1EyzdqLPK85W3wQ";
  const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch(GEMINI_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: input }] }],
        }),
      });

      const data = await res.json();
      const botText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || "AI жауап бермеді.";

      const botMessage = { role: "bot", text: botText };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { role: "bot", text: "Қате орын алды." }]);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Сұрақтарыңыз бар ма? Жазыңыз!</h2>
      <div className="space-y-2 mb-4 max-h-64 overflow-y-auto">
        {messages.map((msg, idx) => (
          <div key={idx} className={`text-${msg.role === "user" ? "right" : "left"}`}>
            <p className={`p-2 rounded ${msg.role === "user" ? "bg-blue-100" : "bg-gray-200"}`}>
              <strong>{msg.role === "user" ? "Сіз" : "AI"}:</strong> {msg.text}
            </p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 border px-3 py-2 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Хабарлама жазыңыз..."
        />
        <button onClick={handleSend} className="bg-red-500 text-white px-4 py-2 rounded">
          Жіберу
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
