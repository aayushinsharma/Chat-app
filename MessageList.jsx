import React, { useEffect, useRef } from 'react';

const MessageList = ({ messages }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map(msg => (
        <div
          key={msg.id}
          className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}
        >
          <div className={`max-w-xs lg:max-w-md ${msg.isOwn ? 'order-1' : 'order-2'}`}>
            {!msg.isOwn && (
              <div className="flex items-center space-x-2 mb-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-semibold">
                  {msg.avatar || msg.user.charAt(0)}
                </div>
                <span className="text-sm font-medium text-gray-700">{msg.user}</span>
                <span className="text-xs text-gray-500">{msg.timestamp}</span>
              </div>
            )}
            
            <div
              className={`px-4 py-2 rounded-lg shadow-sm ${
                msg.isOwn
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-gray-200'
              }`}
            >
              <p className="text-sm">{msg.message}</p>
              {msg.isOwn && (
                <p className="text-xs text-blue-100 mt-1">{msg.timestamp}</p>
              )}
            </div>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;