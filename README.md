# Authentication Demo Project

A simple authentication demo project using React (Frontend) and NestJS (Backend) to demonstrate basic authentication concepts.

## Description

This project is designed for teaching basic authentication concepts to high school students. It includes:

- A React frontend with login/register forms
- A NestJS backend with JWT authentication
- TypeORM with MySQL database

## Features

- User Registration
- User Login
- Protected Routes
- JWT Authentication
- Simple and clean UI

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Basic understanding of TypeScript
- Docker and Docker Compose installed

## Database Setup

This project uses MySQL 8.0 running in a Docker container.

### Database Configuration

The database is configured with the following default settings:

- Database Name: my_database
- User: myuser
- Password: mypassword
- Root Password: rootpassword
- Port: 3306

### Starting the Database

1. Make sure Docker is running on your system
2. Navigate to the api directory
3. Start the MySQL container:

```bash
docker-compose up -d
```

To verify the database is running:

```bash
docker ps
```

You should see a container named "my_mysql_db" in the list.

To stop the database:

```bash
docker-compose down
```

### Database Persistence

The database data is persisted using a Docker volume named `mysql_data`. This means your data will survive container restarts.

## Installation

### Backend (NestJS)

```bash
cd api
npm install
npm run start:dev
```

The backend will run on http://localhost:3000

### Frontend (React)

```bash
cd web
npm install
npm run dev
```

The frontend will run on http://localhost:5173

## Testing the Application

1. Register a new user:

   - Go to http://localhost:5173/register
   - Enter an email and password
   - Click "Register"

2. Login:

   - Go to http://localhost:5173/login
   - Enter your credentials
   - Click "Login"

3. Access Dashboard:
   - After login, you'll be redirected to the dashboard
   - Try accessing /dashboard directly when logged out (you'll be redirected to login)

## Learning Points

1. **Authentication Flow**

   - How user credentials are validated
   - How JWT tokens work
   - Protected route implementation

2. **Frontend Concepts**

   - React Hooks (useState, useEffect)
   - Context API for state management
   - Form handling
   - Protected routing

3. **Backend Concepts**
   - API endpoints
   - JWT implementation
   - Password hashing
   - Route protection

## Security Notes

This is a demo project for learning purposes. In a production environment, you should:

- Use environment variables for sensitive data
- Implement proper password validation
- Use a real database
- Add rate limiting
- Implement refresh tokens
- Use HTTPS
- Never commit database credentials to version control
- Use strong passwords for database access

## Need Help?

This project is designed to be beginner-friendly. If you're stuck:

1. Check the console logs
2. Review the authentication flow
3. Make sure both frontend and backend are running
4. Verify your API endpoints
