---
layout: project
title: 'Real-time Chat Application'
description: 'Scalable real-time chat application with rooms, file sharing, and message history built with Socket.io and Redis.'
image: '/project2.jpg'
technologies: ['Socket.io', 'Express', 'React', 'Redis', 'MongoDB', 'JWT', 'Cloudinary']
githubUrl: 'https://github.com/binsarjr/chat-app'
liveUrl: 'https://chat.binsarjr.com'
category: 'web'
featured: false
completedAt: '2024-08-30'
---

# Real-time Chat Application

A modern chat application that enables instant messaging with support for multiple chat rooms, file sharing, and persistent message history.

## Core Features

### 💬 Real-time Messaging

- Instant message delivery using WebSockets
- Typing indicators and read receipts
- Message reactions and replies
- Rich text formatting support

### 🏠 Chat Rooms

- Public and private chat rooms
- Room creation and management
- User permissions and moderation
- Room search and discovery

### 📁 File Sharing

- Image and document sharing
- Drag-and-drop file uploads
- File preview and download
- Cloud storage integration

## Architecture

The application uses a microservices architecture with Redis for message queuing and MongoDB for persistent storage.

```javascript
// Socket.io event handling
io.on('connection', (socket) => {
	socket.on('join-room', (roomId) => {
		socket.join(roomId);
		socket.to(roomId).emit('user-joined', socket.userId);
	});

	socket.on('send-message', async (data) => {
		const message = await saveMessage(data);
		io.to(data.roomId).emit('new-message', message);
	});
});
```

Features horizontal scaling with load balancing and Redis adapter for multi-server deployments.
