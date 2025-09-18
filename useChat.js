import { useState, useEffect, useCallback } from 'react';
import { initialRooms, initialMessages, onlineUsers, mockMessages } from '../utils/mockData';

export const useChat = () => {
  const [currentUser] = useState('You');
  const [activeRoom, setActiveRoom] = useState('general');
  const [rooms, setRooms] = useState(initialRooms);
  const [messages, setMessages] = useState(initialMessages);
  const [users] = useState(onlineUsers);

  // Simulate receiving messages
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance every 5 seconds
        const randomUsers = users.filter(user => user.name !== 'You');
        const randomUser = randomUsers[Math.floor(Math.random() * randomUsers.length)];
        const randomMessage = mockMessages[Math.floor(Math.random() * mockMessages.length)];
        const roomIds = Object.keys(messages);
        const randomRoom = roomIds[Math.floor(Math.random() * roomIds.length)];
        
        const newMsg = {
          id: Date.now(),
          user: randomUser.name,
          message: randomMessage,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isOwn: false,
          avatar: randomUser.avatar
        };
        
        setMessages(prev => ({
          ...prev,
          [randomRoom]: [...(prev[randomRoom] || []), newMsg]
        }));
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [messages, users]);

  const sendMessage = useCallback((messageText) => {
    if (messageText.trim()) {
      const message = {
        id: Date.now(),
        user: currentUser,
        message: messageText.trim(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOwn: true,
        avatar: 'Y'
      };
      
      setMessages(prev => ({
        ...prev,
        [activeRoom]: [...(prev[activeRoom] || []), message]
      }));
    }
  }, [activeRoom, currentUser]);

  const createRoom = useCallback((roomName) => {
    if (roomName.trim()) {
      const roomId = roomName.toLowerCase().replace(/\s+/g, '-');
      const newRoom = {
        id: roomId,
        name: roomName.trim(),
        members: 1,
        description: `${roomName.trim()} discussion`,
        isPrivate: false
      };
      
      setRooms(prev => [...prev, newRoom]);
      setMessages(prev => ({
        ...prev,
        [roomId]: []
      }));
      
      return roomId;
    }
    return null;
  }, []);

  const switchRoom = useCallback((roomId) => {
    setActiveRoom(roomId);
  }, []);

  const getCurrentRoom = useCallback(() => {
    return rooms.find(room => room.id === activeRoom);
  }, [rooms, activeRoom]);

  const getCurrentMessages = useCallback(() => {
    return messages[activeRoom] || [];
  }, [messages, activeRoom]);

  return {
    currentUser,
    activeRoom,
    rooms,
    users,
    sendMessage,
    createRoom,
    switchRoom,
    getCurrentRoom,
    getCurrentMessages
  };
};