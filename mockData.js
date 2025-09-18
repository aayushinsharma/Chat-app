export const initialRooms = [
  { 
    id: 'general', 
    name: 'General', 
    members: 5, 
    description: 'General discussion',
    isPrivate: false 
  },
  { 
    id: 'tech', 
    name: 'Tech Talk', 
    members: 12, 
    description: 'Technology discussions',
    isPrivate: false 
  },
  { 
    id: 'random', 
    name: 'Random', 
    members: 8, 
    description: 'Random conversations',
    isPrivate: false 
  }
];

export const initialMessages = {
  general: [
    { 
      id: 1, 
      user: 'Alice', 
      message: 'Hey everyone! How\'s it going?', 
      timestamp: '10:30 AM', 
      isOwn: false,
      avatar: 'A'
    },
    { 
      id: 2, 
      user: 'Bob', 
      message: 'Good morning! Just started working on a new project', 
      timestamp: '10:32 AM', 
      isOwn: false,
      avatar: 'B'
    },
    { 
      id: 3, 
      user: 'You', 
      message: 'Sounds exciting! What kind of project?', 
      timestamp: '10:33 AM', 
      isOwn: true,
      avatar: 'Y'
    }
  ],
  tech: [
    { 
      id: 1, 
      user: 'DevMaster', 
      message: 'Anyone tried the new React 18 features?', 
      timestamp: '09:15 AM', 
      isOwn: false,
      avatar: 'D'
    },
    { 
      id: 2, 
      user: 'CodeNinja', 
      message: 'Yes! Concurrent features are amazing', 
      timestamp: '09:18 AM', 
      isOwn: false,
      avatar: 'C'
    }
  ],
  random: [
    { 
      id: 1, 
      user: 'ChattyUser', 
      message: 'Beautiful weather today!', 
      timestamp: '08:45 AM', 
      isOwn: false,
      avatar: 'C'
    }
  ]
};

export const onlineUsers = [
  { id: 1, name: 'Alice', status: 'online', avatar: 'A' },
  { id: 2, name: 'Bob', status: 'online', avatar: 'B' },
  { id: 3, name: 'DevMaster', status: 'online', avatar: 'D' },
  { id: 4, name: 'CodeNinja', status: 'online', avatar: 'C' },
  { id: 5, name: 'ChattyUser', status: 'online', avatar: 'C' },
  { id: 6, name: 'TechGuru', status: 'away', avatar: 'T' }
];

export const mockMessages = [
  'That\'s interesting!',
  'I agree with that',
  'Has anyone seen the latest updates?',
  'Great point!',
  'Let me check on that',
  'Thanks for sharing',
  'Looking forward to it!',
  'Anyone up for a quick discussion?',
  'Just finished reading about that',
  'Absolutely right!'
];