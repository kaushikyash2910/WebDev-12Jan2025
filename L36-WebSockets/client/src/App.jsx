import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const sideBar = {
    position: "absolute",
    border: "1px solid black",
    height: "100%",
    right: 0,
    top: 0,
    display: "flex",
    flexDirection: "column",
  };
  const [socket, setSocket] = useState();
  const [currentRoom, setCurrentRoom] = useState("general");
  const inpRef = useRef();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onopen = function () {
      console.log("Socket connected");
    };

    ws.onmessage = function ({ data }) {
      data = JSON.parse(data);
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
          room: currentRoom,
        },
      })
    );
  }

  return (
    <div>
      <input ref={inpRef} type="text" placeholder="Enter message.." />
      <button onClick={chatHandler}>Click Me!</button>

      <ul>
        <span
          style={{
            fontSize: "40px",
            textTransform: "capitalize",
          }}
        >
          {messages[0]?.room}
        </span>
        {messages.map((d, indx) => (
          <li key={indx}>{d.message}</li>
        ))}
      </ul>

      <div style={sideBar}>
        <button
          onClick={() => {
            setCurrentRoom("general");
            socket.send(
              JSON.stringify({
                type: "joinroom",
                payload: {
                  room: currentRoom,
                },
              })
            );
          }}
        >
          GENERAL
        </button>
        <button
          onClick={() => {
            setCurrentRoom("cpp");
            socket.send(
              JSON.stringify({
                type: "joinroom",
                payload: {
                  room: currentRoom,
                },
              })
            );
          }}
        >
          CPP
        </button>
      </div>
    </div>
  );
};

export default App;
