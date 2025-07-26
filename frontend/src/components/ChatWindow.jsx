import React from "react";
import MessageList from "./MessageList";
import UserInput from "./UserInput";
import { useChat } from "../context/ChatContext";

const ChatWindow = () => {
  const { messages } = useChat();

  return (
    <div className="w-full max-w-xl mx-auto mt-10 p-4 border rounded-xl shadow-xl bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">AI Chat Assistant</h2>
      <MessageList messages={messages} />
      <UserInput />
    </div>
  );
};

export default ChatWindow;
