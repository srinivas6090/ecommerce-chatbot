import React, { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (text) => {
    const newMessage = {
      sender: "user",
      text,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, newMessage]);

    // Dummy AI Response
    const aiMessage = {
      sender: "ai",
      text: `Echo: ${text}`,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, aiMessage]);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
