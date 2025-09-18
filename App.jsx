
import { useChat } from './Hooks/useChat';
import Sidebar from './components/Sidebar';
import ChatRoom from './components/ChatRoom';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';
import './App.css';

const App = () => {
  const {
    activeRoom,
    rooms,
    users,
    sendMessage,
    createRoom,
    switchRoom,
    getCurrentRoom,
    getCurrentMessages
  } = useChat();

  const currentRoom = getCurrentRoom();
  const currentMessages = getCurrentMessages();

  return (
    <div className="flex h-screen bg-gray-50 chat-container">
      <Sidebar
        rooms={rooms}
        activeRoom={activeRoom}
        onRoomSelect={switchRoom}
        onCreateRoom={createRoom}
        users={users}
      />
      
      <div className="flex-1 flex flex-col">
        <ChatRoom room={currentRoom} />
        <MessageList messages={currentMessages} />
        <MessageInput
          onSendMessage={sendMessage}
          roomName={currentRoom?.name}
        />
      </div>
    </div>
  );
};

export default App;