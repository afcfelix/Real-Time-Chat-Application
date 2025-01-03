# Real-Time Chat Application

A dynamic and responsive real-time chat application built using the MERN stack. This application supports both one-to-one and group chat functionalities, providing a seamless communication experience for users.

## Features

### User Features
- **One-to-One Chat**: Private messaging with other users in real time
- **Group Chat**: Engage in group conversations with multiple participants
- **Message History**: View previously sent and received messages
- **Real-Time Notifications**: Get instant alerts for incoming messages

### Admin Features
- **User Management**: Monitor connected users and their activities
- **Group Moderation**: Create and manage group chats effectively

## Tech Stack
- **Frontend**: React, Chakra-UI
- **Backend**: Node.js, Express.js
- **Real-Time Communication**: Socket.IO
- **Database**: MongoDB

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/afcfelix/Real-Time-Chat-Application.git
cd Real-Time-Chat-Application
```

### 2. Backend Setup
```bash
cd Backend
npm install
npm start
```

### 3. Frontend Setup
```bash
cd ../Frontend
npm install
npm start
```

### 4. Environment Variables
Create a `.env` file in the `Backend` directory with the following variables:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

## Folder Structure

### Backend
- **Routes**: Handles user and chat-related APIs
- **Models**: Defines schemas for users, chats, and messages in MongoDB
- **Controllers**: Implements the core logic for real-time messaging and user management

### Frontend
- **Components**: Reusable UI elements built with Chakra-UI
- **Pages**: Dedicated views for chat and user functionalities
- **State Management**: Efficient state handling using React hooks

## Key Highlights
- **Real-Time Communication**: Enabled by Socket.IO for instant messaging
- **Scalability**: Modular codebase to support future enhancements like media sharing and advanced notifications
- **User-Friendly Interface**: Designed with Chakra-UI for a clean and responsive user experience
- **Security**: JWT-based authentication to secure user data and sessions

## Demo
### One-to-One Chat
[[One-to-One Demo Link]()]

### Group Chat
[[Group Chat Demo Link](https://www.youtube.com/watch?v=63I5kfVFjH0)]

```
