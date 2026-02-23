# Student Management System

A full-stack application for managing student records using Node.js, Express, and Redis.

## Project Structure
- `backend/`: Node.js server with Express and Redis integration.
- `frontend/`: Static frontend assets (HTML, CSS, JavaScript).

## Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16.x or later)
- [Redis](https://redis.io/docs/getting-started/) (Running locally on port 6379)

## Getting Started

### 1. Clone the repository
```bash
git clone <your-repository-url>
cd student-management-system
```

### 2. Backend Setup
Navigate to the `backend` directory and install the necessary dependencies:
```bash
cd backend
npm install
```

### 3. Environment Configuration
The backend requires a `.env` file to manage environment variables. A `.env` file has already been created for you in the `backend/` directory.

Ensure it contains the following:
```env
PORT=3000
REDIS_URL=redis://localhost:6379
```

### 4. Running the Application

#### Start the Backend Server
In the `backend` directory, run:
```bash
# To run in production mode
npm start

# To run in development mode (with nodemon)
npm run dev
```

The server will be running at `http://localhost:3000`.

#### Access the Frontend
Since the frontend consists of static files, you can open `frontend/index.html` directly in your browser or serve it using a simple static server.

If you have `serve` installed globally:
```bash
cd frontend
npx serve .
```

## API Endpoints
- `GET /api/students`: Fetch all students.
- `POST /api/students`: Add a new student.
- `GET /api/students/:id`: Get student by ID.
- `PUT /api/students/:id`: Update student information.
- `DELETE /api/students/:id`: Remove a student record.

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: Redis
- **Frontend**: Vanilla JavaScript, CSS, HTML
