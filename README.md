# Convox – Real-Time Chat, Video Calling & Language Exchange Application

<div align="center">
  <img alt="Convox" src="https://img.shields.io/badge/Node.js-Express-green" />
  <img alt="React" src="https://img.shields.io/badge/React-19.0-blue" />
  <img alt="MongoDB" src="https://img.shields.io/badge/Database-MongoDB-green" />
  <img alt="License" src="https://img.shields.io/badge/License-ISC-blue" />
</div>

## 📱 Overview

Convox is a modern full-stack web application designed to help users connect and communicate through real-time chat and high-quality video calling. Built using cutting-edge technologies, Convox delivers a seamless and intuitive communication experience.

Beyond messaging, Convox also serves as a language exchange platform where users can share their native language and specify the language they want to learn. The platform enables users to teach and learn from each other through real-time chat and video conversations, making language learning interactive and practical.

Key features include real-time messaging, secure video calling, and a complete friend system that allows users to send, receive, and accept friend requests — helping build a global community of learners.

### ✨ Key Features

- 🔐 **Secure Authentication** - JWT-based authentication with bcrypt password hashing
- 💬 **Real-Time Chat** - Instant messaging powered by Stream Chat SDK
- 📞 **Video Calls** - High-quality video calling using Stream Video SDK
- 👥 **Friend Management** - Add friends, send/receive friend requests, and manage contacts
- 🌓 **Theme Support** - Light and dark mode with persistent theme preferences
- 📱 **Responsive Design** - Mobile-friendly UI with Tailwind CSS and DaisyUI
- ⚡ **Real-Time Updates** - Instant notifications for messages and friend requests
- 🎯 **State Management** - Efficient state handling with Zustand

## 🛠️ Tech Stack

### Backend

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (jsonwebtoken) and bcryptjs
- **Real-Time:** Stream Chat SDK
- **Middleware:** CORS, Cookie Parser

### Frontend

- **Library:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + DaisyUI
- **HTTP Client:** Axios
- **State Management:** Zustand
- **Real-Time Chat:** Stream Chat React SDK
- **Video Calls:** Stream Video React SDK
- **Data Fetching:** TanStack React Query
- **UI Components:** Lucide React Icons
- **Notifications:** React Hot Toast
- **Routing:** React Router v7

## 📦 Project Structure

```
Convox/
├── backend/
│   ├── src/
│   │   ├── server.js                 # Express server setup
│   │   ├── controllers/              # Request handlers
│   │   │   ├── auth.controller.js    # Authentication logic
│   │   │   ├── chat.controller.js    # Chat operations
│   │   │   └── user.controller.js    # User management
│   │   ├── models/                   # MongoDB schemas
│   │   │   ├── User.js
│   │   │   └── FriendRequest.js
│   │   ├── routes/                   # API endpoints
│   │   ├── middleware/               # Custom middleware
│   │   └── lib/                      # Utilities
│   │       ├── db.js                 # Database connection
│   │       └── stream.js             # Stream SDK setup
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── pages/                    # Page components
│   │   ├── components/               # Reusable components
│   │   ├── hooks/                    # Custom React hooks
│   │   ├── lib/                      # Utilities & API client
│   │   ├── store/                    # Zustand stores
│   │   └── constants/                # App constants
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── .env
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Stream.io Account (for chat and video features)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/convox.git
   cd Convox
   ```

2. **Backend Setup**

   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:

   ```env
   PORT=5001
   MONGODB_URI=mongodb://localhost:27017/convox
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   STREAM_API_KEY=your_stream_api_key
   STREAM_API_SECRET=your_stream_api_secret
   ```

3. **Frontend Setup**

   ```bash
   cd ../frontend
   npm install
   ```

   Create a `.env` file in the frontend directory:

   ```env
   VITE_STREAM_API_KEY=your_stream_api_key
   VITE_BACKEND_URL=http://localhost:5001
   ```

### Running the Application

**Terminal 1 - Backend:**

```bash
cd backend
npm run dev
```

The server will start on `http://localhost:5001`

**Terminal 2 - Frontend:**

```bash
cd frontend
npm run dev
```

The application will open at `http://localhost:5173`

## 📚 Available Scripts

### Backend

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

### Frontend

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔌 API Endpoints

### Authentication

- `POST /api/auth/sign-up` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Users

- `GET /api/users` - Get all users
- `GET /api/users/:userId` - Get user profile
- `PUT /api/users/:userId` - Update user profile
- `POST /api/users/send-friend-request` - Send friend request
- `POST /api/users/accept-friend-request` - Accept friend request

### Chat

- `GET /api/chat/token` - Get Stream chat token
- `GET /api/chat/conversations` - Get user conversations

## 🎨 Features in Detail

### Authentication

- Secure user registration and login
- JWT token-based session management
- Password encryption using bcryptjs
- HTTP-only cookies for enhanced security

### Real-Time Chat

- Instant messaging interface
- Message history
- Online status indicators
- Read receipts

### Video Calling

- One-to-one video calls
- Screen sharing capability
- High-quality audio/video streaming

### Friend Management

- Send/receive friend requests
- Accept or decline requests
- Maintain friends list
- View online status

## 🔒 Security Features

- JWT authentication for API protection
- Password hashing with bcryptjs
- CORS configuration for cross-origin requests
- HTTP-only cookies for session management
- Environment variables for sensitive data

## 🐛 Troubleshooting

**Issue: CORS error**

- Ensure backend CORS origin matches your frontend URL
- Check that credentials are properly configured

**Issue: MongoDB connection failed**

- Verify MongoDB service is running
- Check connection string in .env

**Issue: Stream SDK not connecting**

- Verify Stream API key and secret
- Ensure Stream credentials are valid in .env files

## 📧 Contact & Support

For questions, issues, or suggestions, please create an issue in the repository.

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

<div align="center">
  Made with ❤️ by the Satvik Jambagi
</div>
