// ChatRoom.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Replace with your server URL

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Listen for incoming messages from the server
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });

    return () => {
      socket.disconnect(); // Clean up when the component unmounts
    };
  }, [messages]);

  const sendMessage = () => {
    // Send a message to the server
    socket.emit('message', newMessage);
    setNewMessage('');
  };

  return (
    <div>
      <div>
        <h2>Chat</h2>
        <div>
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default ChatRoom;

