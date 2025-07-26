import React from "react";

const Message = ({ sender, text, timestamp }) => {
  const isUser = sender === "user";
  return (
    <div className={`mb-2 flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className={`p-2 rounded-lg max-w-xs ${isUser ? "bg-blue-500 text-white" : "bg-gray-300"}`}>
        <p className="text-sm">{text}</p>
        <span className="text-xs text-gray-700 block mt-1 text-right">{new Date(timestamp).toLocaleTimeString()}</span>
      </div>
    </div>
  );
};

export default Message;
