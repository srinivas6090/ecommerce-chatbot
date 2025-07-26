import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chatbox = ({ sessionId }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const userId = 'user123';

  const sendMessage = async () => {
    if (!input.trim()) return;
    const res = await axios.post('http://localhost:8000/chat/', {
      user_id: userId,
      session_id: sessionId,
      message: input
    });
    setMessages(res.data);
    setInput('');
  };

  useEffect(() => {
    setMessages([]);
  }, [sessionId]);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto space-y-2 p-2 bg-gray-50 rounded border">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded max-w-xl ${
              msg.sender === 'user'
                ? 'bg-blue-100 self-end text-right'
                : 'bg-green-100 self-start'
            }`}
          >
            <p className="text-sm text-gray-700">{msg.text}</p>
            <span className="text-xs text-gray-500">
              {new Date(msg.timestamp).toLocaleTimeString()}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-2 flex gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 border rounded px-3 py-2 text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
