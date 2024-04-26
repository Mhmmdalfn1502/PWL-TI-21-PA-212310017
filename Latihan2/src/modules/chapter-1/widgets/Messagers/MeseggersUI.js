import React, { useState, useRef, useEffect } from "react";
import { ButtonPrimary, ButtonSecondary } from "./components/ButtonUI";
import ChatBody from "./components/ChatBody";
import moment from "moment";

const StylesMessager = {
  chatBox: {
    minHeight: "60vh",
    maxHeight: "60vh",
    overflowY: "auto",
    backgroundColor: "#F5F4F8",
  },
};

const MeseggersUI = () => {
  const chatArr = [
    { id: 1, message: "Weyy Broow, Mau Badmin ga", from: "Alfan", date: "2024-03-12 10:43:00" },
    { id: 2, message: "Wahh malass fann gilaa, bulan puasa gini mending turu dirumah.. capekk hufttt", from: "Angga", date: "2024-03-12 13:43:00" },
    { id: 3, message: "Yahh lemahh gitu doang capekk.. cupuuu", from: "Alfan", date: "2024-03-12 13:43:00" },
    { id: 4, message: "Hehee", from: "Angga", date: "2024-03-12 13:43:00" },
  ];
  const [myChat, setMyChat] = useState(chatArr);

  const endOfMessagesRef = useRef(null);
  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [myChat]);

  const [writeChat, setWriteChat] = useState("");

  const HandlerSendChat = (e) => {
    e.preventDefault();
    const objChat = {
      id: 99,
      message: writeChat,
      from: "Alfan",
      date: moment().format("YYYY-MMM-DD HH:mm"),
    };
    setMyChat([...myChat, objChat]);
    setWriteChat("");
  };

  const [releaseDate, setReleaseDate] = useState(null);

  useEffect(() => {
    if (!releaseDate && myChat.length > 0) {
      const lastMessageDate = myChat[myChat.length - 1].date;
      setReleaseDate(new Date(lastMessageDate));
    }
  }, [myChat, releaseDate]);

  return (
    <div className="card">
      {/* NAV */}
      <div className="card-header d-flex justify-content-between align-items-center" style={{ backgroundColor: "#08679F" }}>
        <div className="card-title align-items-center flex-row d-flex gap-3">
          <img src="https://i.pinimg.com/564x/4a/e7/48/4ae748260da26824b117bb659cbe01d4.jpg" style={{ borderRadius: "100%", width: "50px", height: "50px" }} />
          <span className="fw-bold fs-5" style={{ color: "white" }}>
            No tidak dikenal
          </span>
        </div>
        <div className="card-toolbar">
          <ButtonSecondary
            items={{
              title: "Create new chat",
              btn_class: "btn-icon btn-clear",
            }}
          >
            <i className="bi bi-pencil-square" style={{ color: "white", fontSize: "20px" }}></i>
          </ButtonSecondary>
        </div>
      </div>

      {/* CHATBODY */}
      <div className="card-body p-0">
        {/* {releaseDate && (
          <div className="text-center py-3">
            <span>{moment(releaseDate).format("YYYY-MM-DD")}</span>
          </div>
        )} */}
        <div className="chat-message bg-light-primary" style={StylesMessager.chatBox}>
          <ChatBody data={myChat} releaseDate={releaseDate} />
          <div ref={endOfMessagesRef} />
        </div>
        <div className="chat-send p-3 border border-top-1" style={{ backgroundColor: "#F5F4F8" }}>
          <form method="post" autoComplete="off" onSubmit={(e) => HandlerSendChat(e)}>
            <div
              className="d-flex 
justify-content-between 
align-items-center"
            >
              <input type="text" className="form-control me-2" autoFocus={true} value={writeChat} onChange={(e) => setWriteChat(e.target.value)} placeholder="Input Message" />
              <ButtonPrimary
                items={{
                  title: "Send",
                  btn_class: "btn-icon",
                  type: "submit",
                }}
                className="bg-secondary"
              >
                <i className="bi bi-send"></i>
              </ButtonPrimary>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MeseggersUI;
