import React, { useState } from "react";
import MessageList from "./MessageList";
import UserInput from "./UserInput";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = (text) => {
    const newMessage = { sender: "user", text, timestamp: new Date().toISOString() };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="w-full max-w-xl mx-auto mt-10 p-4 border rounded-xl shadow-xl bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">AI Chat Assistant</h2>
      <MessageList messages={messages} />
      <UserInput onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;
