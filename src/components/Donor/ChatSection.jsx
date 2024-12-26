import React, { useState, useEffect } from "react";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const ChatSection = () => {
  const [stompClient, setStompClient] = useState(null);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [name, setName] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socket = new SockJS("http://localhost:8181/server1"); // URL for WebSocket connection
    const client = new Client({
      webSocketFactory: () => socket,
      onConnect: () => {
        setIsConnected(true);
        client.subscribe("/topic/return-to", (payload) => {
          const receivedMessage = JSON.parse(payload.body);
          setMessages((prev) => [...prev, receivedMessage]);
        });
      },
      onDisconnect: () => {
        setIsConnected(false);
        console.log("Disconnected");
      },
    });

    client.activate();
    setStompClient(client);

    return () => {
      client.deactivate();
    };
  }, []);

  const sendMessage = () => {
    if (stompClient && name && currentMessage) {
      const message = { name, content: currentMessage };
      stompClient.publish({ destination: "/app/message", body: JSON.stringify(message) });
      setMessages((prev) => [...prev, { ...message, timestamp: new Date() }]);
      setCurrentMessage(""); // Clear the message input after sending
    }
  };

  return (
    <div style={styles.container} >
      <h1 style={styles.heading}>Real-Time Chat</h1>
      {!isConnected && <p style={styles.info}>Connecting to chat server...</p>}
      <div style={styles.chatWindow}>
        {messages.map((msg, index) => (
          <div key={index} style={styles.messageBox}>
            <div style={styles.messageContent}>
              <strong style={styles.name}>{msg.name}:</strong> {msg.content}
            </div>
            <div style={styles.timestamp}>
              {new Date(msg.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
            </div>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="Enter your message"
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
        style={styles.input}
      />
      <button onClick={sendMessage} style={styles.button}>
        Send
      </button>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    backgroundColor: "#121212", // Dark theme
    color: "#ffffff",
    borderRadius: "10px",

  },
  heading: {
    textAlign: "center",
    color: "#ffffff",
  },
  info: {
    textAlign: "center",
    color: "#cccccc",
  },
  chatWindow: {
    border: "1px solid #444",
    height: "400px",
    overflowY: "scroll",
    padding: "10px",
    marginBottom: "20px",
    backgroundColor: "#1e1e1e", // Slightly lighter dark
    borderRadius: "10px",
  },
  messageBox: {
    marginBottom: "20px", // Space between messages
    padding: "15px", // Larger message box
    backgroundColor: "#2a2a2a", // Darker background for messages
    borderRadius: "15px",
    position: "relative",
    color: "#ffffff",
    display: "block", // Ensures each message is on a new line
    maxWidth: "80%",
  },
  messageContent: {
    fontSize: "14px",
    lineHeight: "1.5",
    marginBottom: "10px", // Space between content and timestamp
  },
  name: {
    color: "#4caf50", // Highlight for name
  },
  timestamp: {
    fontSize: "12px",
    color: "#aaaaaa",
    textAlign: "right", // Aligns time to the right
  },
  input: {
    display: "block",
    width: "calc(100% - 20px)",
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #444",
    borderRadius: "5px",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4caf50",
    color: "#ffffff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ChatSection;
