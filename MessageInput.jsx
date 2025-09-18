import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';

const MessageInput = ({ onSendMessage, roomName }) => {
  const [message, setMessage] = useState('');
  const inputRef = useRef(null);

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 border-t border-gray-200 bg-white">
      <div className="flex items-center space-x-3">
        <input
          ref={inputRef}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          oneKeyPress={handleKeyPress}
          placeholder={`Message #${roomName}`}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          onClick={handleSend}
          disabled={!message.trim()}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
        >
          <Send className="w-4 h-4" />
          <span>Send</span>
        </button>
      </div>
    </div>
  );
};

export default MessageInput;