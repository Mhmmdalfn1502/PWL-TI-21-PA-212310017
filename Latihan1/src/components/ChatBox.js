// src/components/ChatBox.js
import React, { useState, useEffect } from 'react';
import Message from './Message';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [lastReleaseDate, setLastReleaseDate] = useState(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    // Kode pengambilan pesan dari server
    // ...
  };

  const sendMessage = () => {
    if (newMessage.trim() === '') return; // Pastikan pesan tidak kosong

    const currentDate = new Date();
    const message = {
      id: messages.length + 1,
      text: newMessage,
      releaseDate: currentDate
    };

    if (!lastReleaseDate || !isSameDay(currentDate, lastReleaseDate)) {
      setLastReleaseDate(currentDate);
    }

    setMessages([...messages, message]);
    setNewMessage('');
  };

  const isSameDay = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  return (
    <div className="chat-box">
      {messages.map((message, index) => (
        <Message key={message.id} message={message} isFirstMessage={index === 0 || (index > 0 && !isSameDay(message.releaseDate, messages[index - 1].releaseDate))} />
      ))}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Tulis pesan..."
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={sendMessage}>
            Kirim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
