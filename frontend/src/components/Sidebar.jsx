import React from 'react';

const Sidebar = ({ sessionId, setSessionId }) => {
  const handleNewChat = () => {
    setSessionId(Date.now().toString());
  };

  return (
    <div className="w-64 bg-gradient-to-b from-purple-600 to-indigo-700 text-white p-4 rounded-r-2xl shadow-md flex flex-col">
      <h2 className="text-xl font-bold mb-4">Chats</h2>
      <button
        onClick={handleNewChat}
        className="bg-white text-indigo-700 font-medium py-2 px-4 rounded hover:bg-gray-100 transition"
      >
        + New Chat
      </button>
      <div className="mt-6 text-sm text-gray-200">
        Current Session ID:  
        <div className="break-all text-xs mt-2">{sessionId}</div>
      </div>
    </div>
  );
};

export default Sidebar;
