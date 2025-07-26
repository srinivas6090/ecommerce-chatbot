import axios from 'axios';

const API_URL = 'http://localhost:8000/chat/';

export const sendMessage = async (sessionId, userId, message) => {
  const response = await axios.post(API_URL, {
    session_id: sessionId,
    user_id: userId,
    message: message,
  });
  return response.data;
};
