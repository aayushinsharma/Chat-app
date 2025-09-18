import React, { useState } from 'react';
import { Plus, Hash, Search, Settings } from 'lucide-react';
import UserList from './UserList';

const Sidebar = ({ rooms, activeRoom, onRoomSelect, onCreateRoom, users }) => {
  const [showNewRoomModal, setShowNewRoomModal] = useState(false);
  const [newRoomName, setNewRoomName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCreateRoom = () => {
    if (newRoomName.trim()) {
      const roomId = onCreateRoom(newRoomName);
      if (roomId) {
        onRoomSelect(roomId);
        setNewRoomName('');
        setShowNewRoomModal(false);
      }
    }
  };

  const filteredRooms = rooms.filter(room =>
    room.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 bg-blue-600 text-white">
          <h1 className="text-xl font-bold">ChatApp</h1>
          <p className="text-blue-100 text-sm">Real-time messaging</p>
        </div>
        
        {/* Search */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search rooms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        
        {/* Rooms */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold text-gray-700">Rooms</h2>
              <button
                onClick={() => setShowNewRoomModal(true)}
                className="p-1 text-blue-600 hover:bg-blue-50 rounded transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            
            <div className="space-y-2">
              {filteredRooms.map(room => (
                <div
                  key={room.id}
                  onClick={() => onRoomSelect(room.id)}
                  className={`p-3 rounded-lg cursor-pointer transition-colors room-transition ${
                    activeRoom === room.id
                      ? 'bg-blue-100 border-l-4 border-blue-500'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Hash className={`w-4 h-4 ${activeRoom === room.id ? 'text-blue-600' : 'text-gray-400'}`} />
                    <div className="flex-1">
                      <h3 className={`font-medium ${activeRoom === room.id ? 'text-blue-900' : 'text-gray-900'}`}>
                        {room.name}
                      </h3>
                      <p className="text-xs text-gray-500">{room.members} members</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Online Users */}
          <UserList users={users} />
        </div>
      </div>
      
      {/* New Room Modal */}
      {showNewRoomModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 max-w-md mx-4">
            <h3 className="text-lg font-semibold mb-4">Create New Room</h3>
            <input
              type="text"
              value={newRoomName}
              onChange={(e) => setNewRoomName(e.target.value)}
              placeholder="Enter room name..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
              onKeyPress={(e) => e.key === 'Enter' && handleCreateRoom()}
            />
            <div className="flex space-x-3">
              <button
                onClick={() => {
                  setShowNewRoomModal(false);
                  setNewRoomName('');
                }}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateRoom}
                disabled={!newRoomName.trim()}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;