import React, { useState } from "react";
import { useChat } from "../context/ChatContext";

const UserInput = () => {
  const [input, setInput] = useState("");
  const { sendMessage } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        className="flex-grow border rounded-l p-2"
        type="text"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600" type="submit">
        Send
      </button>
    </form>
  );
};

export default UserInput;
