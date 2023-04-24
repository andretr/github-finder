import React, { useState } from 'react';

const ChatInput = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center py-3 px-4 border-t border-gray-200">
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={handleChange}
          className="flex-grow px-4 py-2 mr-4 rounded-full bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>
    </form>
  );
};

export default ChatInput;