import React from "react";
import moment from "moment";

const ChatBody = ({ data }) => {
  const itsme = "Alfan";

  const styleReleaseDate = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "12px",
    backgroundColor: "#E6E6E6",
    borderRadius: "8px",
    padding: "5px 10px",
    margin: "5px 0px",
  };

  const styleChatItems = {
    chatBubleItems: {
      display: "flex",
      flexDirection: "column",
    },
    chatBubleSender: {
      textAlign: "right",
      backgroundColor: "#08679F",
      alignSelf: "flex-end",
      color: "white",
      margin: "0px 8px",
      maxWidth: "70%",
    },
    chatBubleReceiver: {
      backgroundColor: "#CCECFF",
      alignSelf: "flex-start",
      color: "black",
      margin: "0px 8px",
      maxWidth: "70%",
    },
  };

  const formatDate = (date) => {
    const today = moment().startOf("day");
    const messageDate = moment(date);
    if (messageDate.isSame(today, "day")) {
      return "Today";
    } else {
      return messageDate.format("DD MMM YYYY");
    }
  };

  let lastDate = null;

  return (
    <div className="chat-items">
      {data.map((message, index) => {
        const currentMessageDate = moment(message.date).startOf("day");
        const showReleaseDate = !lastDate || !lastDate.isSame(currentMessageDate, "day");

        lastDate = currentMessageDate;

        return (
          <div key={index} style={styleChatItems.chatBubleItems}>
            {showReleaseDate && (
              <div className="release-date d-flex justify-content-center mb-2">
                <p className="fst-italic text-body-secondary" style={styleReleaseDate}>
                  {formatDate(message.date)}
                </p>
              </div>
            )}
            <div style={message.from === itsme ? styleChatItems.chatBubleSender : styleChatItems.chatBubleReceiver} className="chat rounded-3 my-2 px-2 py-2">
              <span className="me-3">{message.message}</span>
              <span className="chat-date" style={{ fontSize: "11px" }}>
                {moment(message.date).format("HH:mm")}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChatBody;
