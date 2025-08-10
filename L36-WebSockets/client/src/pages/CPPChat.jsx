import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const CPPChat = () => {
  const [socket, setSocket] = useState();
  const inpRef = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onopen = function () {
      console.log("Socket connected");
    };

    ws.onmessage = function ({ data }) {
      console.log(data);
      setMessages((m) => [data, ...m]);
    };
  }, []);

  function chatHandler() {
    // console.log(inpRef.current.value);
    socket.send(
      JSON.stringify({
        type: "chat",
        payload: {
          message: inpRef.current.value,
          room: "general",
        },
      })
    );
  }

  return (
    <div>
      <input ref={inpRef} type="text" placeholder="Enter message.." />
      <button onClick={chatHandler}>Click Me!</button>

      <ul>
        {messages.map((d, indx) => (
          <li key={indx}>{d}</li>
        ))}
      </ul>
    </div>
  );
};

export default CPPChat;
