import React from "react";
import Message from "./Message";

const MessageList = ({ messages }) => {
  return (
    <div className="h-96 overflow-y-auto mb-4 p-2 border rounded bg-gray-100">
      {messages.map((msg, idx) => (
        <Message key={idx} sender={msg.sender} text={msg.text} timestamp={msg.timestamp} />
      ))}
    </div>
  );
};

export default MessageList;
