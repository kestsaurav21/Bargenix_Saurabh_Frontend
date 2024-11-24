import React, { useState, useRef, useEffect } from 'react';
import logo from "../assets/logo.avif";

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control chatbox visibility
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');

  const messagesEndRef = useRef(null); // Ref to scroll to the latest message

  const handleSend = () => {
    if (input.trim() !== '') {
      setMessages([
        ...messages,
        { sender: 'user', text: input },
        { sender: 'bot', text: 'Thank you for your message!' }, // Static bot response
      ]);
      setInput('');
    }
  };

  const handleOpenChat = () => {
    setIsOpen(true); // Open chatbox when the logo is clicked
  };

  const handleCloseChat = () => {
    setIsOpen(false); // Close chatbox when the close button is clicked
  };

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div>
      {/* Chatbox Logo Button */}
      {!isOpen && (
        <button
          className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
          onClick={handleOpenChat}
          aria-label="Open Chatbox"
        >
          <img src={logo} width={45}  />
        </button>
      )}

      {/* Chatbox Container */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 max-w-full">
          <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden">
            {/* Chatbox Header */}
            <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold">Chat with Us</h3>
              <button
                className="text-white font-bold text-xl"
                onClick={handleCloseChat}
                aria-label="Close Chatbox"
              >
                ✖
              </button>
            </div>

            {/* Chatbox Messages */}
            <div className="p-4 max-h-64 overflow-y-auto space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {/* Scroll to the bottom of the chat */}
              <div ref={messagesEndRef} />
            </div>

            {/* Chatbox Input */}
            <div className="bg-gray-100 p-4 flex">
              <input
                type="text"
                className="flex-1 p-2 border-2 border-gray-300 rounded-l-lg focus:outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
              />
              <button
                onClick={handleSend}
                className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
