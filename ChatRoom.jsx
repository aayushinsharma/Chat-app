
import { Hash, Users, Settings } from 'lucide-react';

const ChatRoom = ({ room }) => {
  if (!room) return null;

  return (
    <div className="p-4 border-b border-gray-200 bg-white flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <Hash className="w-5 h-5 text-blue-600" />
        <div>
          <h2 className="font-semibold text-gray-900">{room.name}</h2>
          <p className="text-sm text-gray-500">{room.description}</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1 text-sm text-gray-500">
          <Users className="w-4 h-4" />
          <span>{room.members}</span>
        </div>
        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded transition-colors">
          <Settings className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;