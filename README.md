# Full Stack Application - Node.js, React & MongoDB

## 📋 Overview
A modern full-stack web application built with industry-standard technologies, featuring a React frontend, Node.js backend, and MongoDB database.

## 🚀 Tech Stack

### Frontend
- **React.js** - Dynamic user interface
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS/Tailwind** - Styling and responsive design

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication & authorization
- **Bcrypt** - Password hashing

### Development Tools
- **Nodemon** - Auto-restart server
- **Concurrently** - Run multiple scripts
- **dotenv** - Environment variables
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure
```
project/
│
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API services
│   │   ├── utils/        # Helper functions
│   │   └── App.js        # Main application
│   └── package.json
│
├── server/                # Node.js backend
│   ├── config/           # Database configuration
│   ├── controllers/      # Route controllers
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── utils/           # Utility functions
│   └── server.js        # Server entry point
│
├── .env                  # Environment variables
├── .gitignore
└── package.json
```

## 🛠️ Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Setup Instructions

1. **Clone the repository**
```bash
git clone <repository-url>
cd project-name
```

2. **Install backend dependencies**
```bash
cd server
npm install
```

3. **Install frontend dependencies**
```bash
cd ../client
npm install
```

4. **Configure environment variables**
Create `.env` file in server directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/your-database
JWT_SECRET=your-secret-key
NODE_ENV=development
```

5. **Start MongoDB**
```bash
mongod
```

6. **Run the application**

Development mode (both frontend & backend):
```bash
# From root directory
npm run dev
```

Or run separately:
```bash
# Backend (from server directory)
npm run server

# Frontend (from client directory)
npm start
```

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/logout` - User logout

### User Routes
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update profile
- `DELETE /api/users/:id` - Delete user

### Data Routes
- `GET /api/data` - Get all data
- `GET /api/data/:id` - Get specific data
- `POST /api/data` - Create new data
- `PUT /api/data/:id` - Update data
- `DELETE /api/data/:id` - Delete data

## 💻 Features

- ✅ User authentication (JWT)
- ✅ Password encryption
- ✅ RESTful API design
- ✅ MongoDB database integration
- ✅ Responsive UI design
- ✅ Error handling
- ✅ Input validation
- ✅ Protected routes
- ✅ CRUD operations
- ✅ Real-time updates

## 🚀 Deployment

### Deploy to Heroku
1. Create Heroku app
2. Set environment variables
3. Connect GitHub repository
4. Deploy branch

### Deploy to Vercel (Frontend)
1. Import project
2. Configure build settings
3. Deploy

### MongoDB Atlas Setup
1. Create cluster
2. Configure network access
3. Get connection string
4. Update environment variables

## 📝 Scripts

```json
{
  "scripts": {
    "start": "node server/server.js",
    "server": "nodemon server/server.js",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\"",
    "build": "npm run build --prefix client"
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License
This project is licensed under the MIT License.

## 👥 Contact
- Email: your-email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments
- React documentation
- Node.js community
- MongoDB documentation
- Express.js team
