import React, { useEffect, useState } from 'react';

const Sidebar = ({ sessionId, setSessionId, userId }) => {
  const [sessions, setSessions] = useState([]);

  const handleNewChat = () => {
    const newId = Date.now().toString();
    setSessionId(newId);
    setSessions((prev) => [...prev, newId]);
  };

  const fetchSessions = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/sessions/${userId}`);
      const data = await res.json();
      const ids = data.map((s) => s.session_id);
      setSessions(ids);
    } catch (error) {
      console.error("Error fetching sessions:", error);
    }
  };

  useEffect(() => {
    if (userId) fetchSessions();
  }, [userId]);

  return (
    <div className="w-64 bg-gradient-to-b from-purple-600 to-indigo-700 text-white p-4 rounded-r-2xl shadow-md flex flex-col h-screen overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Chats</h2>
      <button
        onClick={handleNewChat}
        className="bg-white text-indigo-700 font-medium py-2 px-4 rounded hover:bg-gray-100 transition"
      >
        + New Chat
      </button>

      <div className="mt-6 text-sm">
        <h3 className="text-gray-200 mb-2">Session History:</h3>
        {sessions.map((id) => (
          <button
            key={id}
            className={`block w-full text-left py-1 px-2 mb-1 rounded ${
              id === sessionId ? "bg-indigo-900" : "bg-indigo-800"
            } hover:bg-indigo-600 text-xs break-all`}
            onClick={() => setSessionId(id)}
          >
            {id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
