import React, { useState, useEffect } from 'react';
import ChatWindow from './components/ChatWindow';
import Sidebar from './components/Sidebar';

const App = () => {
  const [sessionId, setSessionId] = useState(Date.now().toString());
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // Generate a unique user ID once (for demo purposes)
    const storedUserId = localStorage.getItem('user_id');
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      const newUserId = 'user_' + Math.random().toString(36).substr(2, 9);
      setUserId(newUserId);
      localStorage.setItem('user_id', newUserId);
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar sessionId={sessionId} setSessionId={setSessionId} userId={userId} />
      <div className="flex-grow p-4 overflow-hidden">
        <ChatWindow sessionId={sessionId} userId={userId} />
      </div>
    </div>
  );
};

export default App;
