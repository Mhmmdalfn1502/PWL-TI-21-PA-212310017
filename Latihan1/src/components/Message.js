// src/components/Message.js
import React from "react";

const Message = ({ message, isFirstMessage }) => {
  const { text, releaseDate } = message;
  const currentDate = new Date();
  const isToday = currentDate.toDateString() === new Date(releaseDate).toDateString();

  return (
    <div className="message">
      {isFirstMessage && isToday && <p>Rilis: Today</p>}
      <p>{text}</p>
    </div>
  );
};

export default Message;
