import React, { useState } from 'react';
import Chatbox from './components/Chatbox';
import Sidebar from './components/Sidebar';

const App = () => {
  const [sessionId, setSessionId] = useState(Date.now().toString());

  return (
    <div className="h-screen flex">
      <Sidebar sessionId={sessionId} setSessionId={setSessionId} />
      <div className="flex-1 flex flex-col bg-white rounded-l-2xl shadow-xl p-4">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">E-Commerce Chatbot</h1>
        <Chatbox sessionId={sessionId} />
      </div>
    </div>
  );
};

export default App;
