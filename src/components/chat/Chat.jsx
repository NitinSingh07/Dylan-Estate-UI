import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img src="" alt="" />
          <span>John Doe</span>
          <p>Hi, how are you?</p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>John Doe</span>
          <p>Hi, how are you?</p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>John Doe</span>
          <p>Hi, how are you?</p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>John Doe</span>
          <p>Hi, how are you?</p>
        </div>
        <div className="message">
          <img src="" alt="" />
          <span>John Doe</span>
          <p>Hi, how are you?</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src="" alt="" />
              John Doe
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>hefbfhjwvbjvbfhjvbjhvbewjbjhbvhjb</p>
              <span>1 Hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>hefbfhjwvbjvbfhjvbjhvbewjbjhbvhjb</p>
              <span>1 Hour ago</span>
            </div>
            <div className="chatMessage">
              <p>hefbfhjwvbjvbfhjvbjhvbewjbjhbvhjb</p>
              <span>1 Hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>hefbfhjwvbjvbfhjvbjhvbewjbjhbvhjb</p>
              <span>1 Hour ago</span>
            </div>
            <div className="chatMessage">
              <p>hefbfhjwvbjvbfhjvbjhvbewjbjhbvhjb</p>
              <span>1 Hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>hefbfhjwvbjvbfhjvbjhvbewjbjhbvhjb</p>
              <span>1 Hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
export default Chat;
