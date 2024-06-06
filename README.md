# Social Media App

Welcome to the Social Media App! made by sourabh s pedanekar.This application is built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to create profiles, post updates, follow other users, like and comment on posts, and much more.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Authentication (Sign Up, Login, Logout)
- User Profiles (Edit Profile, Upload Profile Picture)
- Create, Read, Update, and Delete Posts
- Like and Comment on Posts
- Follow and Unfollow Users
- News Feed with posts from followed users
- Real-time notifications for likes, comments, and follows

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/social-media-app.git
   cd social-media-app
   ```

2. **Install backend dependencies:**

   ```sh
   cd backend
   npm install
   ```

3. **Install frontend dependencies:**

   ```sh
   cd ../frontend
   npm install
   ```

## Configuration

### Backend

1. Create a `.env` file in the `backend` directory and add the following environment variables:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

### Frontend

1. Create a `.env` file in the `frontend` directory and add the following environment variables:

   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

## Usage

### Running the Backend

1. Start the backend server:

   ```sh
   cd backend
   npm run dev
   ```

### Running the Frontend

1. Start the frontend development server:

   ```sh
   cd frontend
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

## API Endpoints

### Auth

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `POST /api/auth/logout` - Logout a user

### User

- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `GET /api/users/:id/followers` - Get followers of a user
- `GET /api/users/:id/following` - Get users followed by a user

### Post

- `POST /api/posts` - Create a new post
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get a single post
- `PUT /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post
- `POST /api/posts/:id/like` - Like a post
- `POST /api/posts/:id/comment` - Comment on a post

## Technologies Used

- **Frontend:** React.js, Redux, Axios, Material-UI
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JSON Web Token (JWT)
- **Other Tools:** Webpack, Babel, ESLint, Prettier

## Contributing

We welcome contributions to improve the project. Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

Please ensure your code follows the project's coding standards and includes tests where appropriate.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
