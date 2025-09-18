import React from 'react';
import { Users } from 'lucide-react';

const UserList = ({ users }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'away':
        return 'bg-yellow-500';
      case 'offline':
        return 'bg-gray-400';
      default:
        return 'bg-green-500';
    }
  };

  const onlineCount = users.filter(user => user.status === 'online').length;

  return (
    <div className="p-4 border-t border-gray-200">
      <div className="flex items-center space-x-2 mb-3">
        <Users className="w-4 h-4 text-green-500" />
        <h3 className="font-semibold text-gray-700">Online ({onlineCount})</h3>
      </div>
      
      <div className="space-y-2">
        {users.map(user => (
          <div key={user.id} className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${getStatusColor(user.status)}`}></div>
            <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-semibold text-gray-600">
              {user.avatar}
            </div>
            <span className="text-sm text-gray-600">{user.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;