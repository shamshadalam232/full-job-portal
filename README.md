# 💼 Job Portal — MERN Stack

A full-stack **Job Portal Web Application** built using the **MERN Stack**.
The application allows users to explore jobs, search and filter opportunities, view detailed job information, save jobs, and apply for jobs.

The project is designed with a responsive UI and follows a modern frontend/backend architecture.

---

## 🚀 Live Project

**Frontend:**
https://client-project-1d2g.vercel.app/

**GitHub Repository:**
https://github.com/shamshadalam232/full-job-portal

---

## 📌 Features

### 👤 User Features

* User registration and login
* User authentication
* Protected routes
* Browse available jobs
* Search jobs
* Filter jobs
* View detailed job information
* Apply for jobs
* Save jobs
* View saved jobs
* Manage application-related data
* Responsive design for desktop and mobile devices

### 💼 Job Features

* Display available jobs
* Job search functionality
* Job filtering
* Job details page/modal
* Company information
* Job description
* Job requirements
* Application functionality

### 🔐 Authentication

The application uses authentication to protect user-specific functionality.

Basic authentication flow:

```text
User
  ↓
Login / Register
  ↓
Backend API
  ↓
Validate User
  ↓
Generate Authentication Token
  ↓
Authenticated User
  ↓
Access Protected Features
```

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Axios
* Context API
* Zustand
* React Hot Toast
* Lucide React
* DaisyUI

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt
* CORS

### Tools

* Git
* GitHub
* Postman
* VS Code
* Vercel
* Render

---

## 📂 Project Structure

```text
full-job-portal/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── store/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚛️ Frontend

The frontend is developed using **React.js** with a component-based architecture.

### Main Frontend Concepts Used

* Functional Components
* React Hooks
* `useState`
* `useEffect`
* `useContext`
* React Router
* Context API
* Zustand
* Axios
* Conditional Rendering
* Form Handling
* Local Storage
* Responsive UI
* Tailwind CSS

---

## 🔎 Job Search & Filtering

Users can search for jobs according to their requirements.

The application provides filtering functionality to make it easier for users to find relevant opportunities.

Example:

```text
Search
  ↓
Job Title / Keyword
  ↓
Filter Jobs
  ↓
Display Matching Jobs
```

---

## ❤️ Saved Jobs

Users can save jobs that they are interested in.

Saved job functionality uses application state and local storage so users can easily access their saved opportunities.

```text
User clicks Save
       ↓
Job added to Saved Jobs
       ↓
State Updated
       ↓
Local Storage Updated
       ↓
Saved Jobs Page
```

---

## 📄 Job Details

Users can open a job and view complete information such as:

* Job title
* Company
* Location
* Job description
* Requirements
* Skills
* Job type
* Application information

---

## 📝 Job Application Flow

The application process follows a protected API flow.

```text
User
 ↓
Select Job
 ↓
Click Apply
 ↓
Authentication Check
 ↓
Application API
 ↓
Create Application
 ↓
Store Application in Database
```

Example API routes used in the project:

```text
/api/user/apply
/api/user/checkapplication
```

---

## 🔐 Protected Route Flow

Protected functionality checks whether the user is authenticated before allowing access.

```text
Frontend Request
      ↓
Authentication Middleware
      ↓
Token Verification
      ↓
User Valid?
   ↙       ↘
 Yes        No
 ↓          ↓
Continue   Reject
```

---

## 🗄️ Database

The application uses **MongoDB** as the database and **Mongoose** for database interaction.

Main data can include:

```text
Users
Jobs
Companies
Applications
Saved Jobs
```

MongoDB provides a flexible document-based structure for storing application data.

---

## 🌐 API Architecture

The frontend communicates with the backend using REST APIs.

Example:

```text
React Frontend
      ↓
Axios
      ↓
Express API
      ↓
Controller
      ↓
Mongoose
      ↓
MongoDB
```

Example API endpoints:

```text
GET     /api/jobs
POST    /api/user/apply
GET     /api/user/checkapplication
GET     /api/admin/applications
POST    /api/admin/jobs
```

---

## 📡 Axios

Axios is used to communicate between the React frontend and Node/Express backend.

Example:

```javascript
axios.get("/api/jobs");
```

For production and development environments, the API URL can be configured using environment variables.

---

## 📱 Responsive Design

The application is designed to work across different screen sizes:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📟 Tablet

Tailwind CSS is used to create responsive layouts.

---

## ⚙️ Environment Variables

Create a `.env` file for the backend:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Frontend environment variables can be configured according to the deployment environment.

Example:

```env
VITE_API_URL=http://localhost:5000
```

> Never commit `.env` files or secret credentials to GitHub.

---

## ▶️ Run Project Locally

### 1. Clone Repository

```bash
git clone https://github.com/shamshadalam232/full-job-portal.git
```

### 2. Go to Project

```bash
cd full-job-portal
```

### 3. Install Frontend Dependencies

```bash
cd client
npm install
```

### 4. Start Frontend

```bash
npm run dev
```

### 5. Install Backend Dependencies

Open another terminal:

```bash
cd server
npm install
```

### 6. Start Backend

```bash
npm run dev
```

Backend will run on:

```text
http://localhost:5000
```

Frontend will run on the Vite development server.

---

## 🚀 Deployment

The project has been worked with modern deployment platforms.

### Frontend

* Vercel

### Backend

* Render / cloud deployment

### Database

* MongoDB Atlas

Deployment architecture:

```text
                  ┌──────────────┐
                  │    User      │
                  └──────┬───────┘
                         ↓
                  ┌──────────────┐
                  │   Vercel     │
                  │   React App  │
                  └──────┬───────┘
                         ↓
                  ┌──────────────┐
                  │ Express API  │
                  │ Node.js      │
                  └──────┬───────┘
                         ↓
                  ┌──────────────┐
                  │ MongoDB Atlas│
                  └──────────────┘
```

---

## 🧪 API Testing

APIs can be tested using **Postman**.

Typical testing process:

```text
Create Request
      ↓
Add API URL
      ↓
Add Headers / Body
      ↓
Send Request
      ↓
Check Response
```

---

## 📚 What I Learned From This Project

While building this project, I worked with:

* React component architecture
* React Hooks
* State management
* Context API
* Zustand
* REST APIs
* Express.js
* MongoDB
* Mongoose
* Authentication
* JWT
* Password hashing with bcrypt
* Protected routes
* Axios
* API integration
* Search and filtering
* Local Storage
* Responsive UI
* Git & GitHub
* Postman
* Deployment
* Environment variables
* CORS configuration
* Debugging frontend/backend issues

---

## 🎯 Future Improvements

The project can be extended with:

* Recruiter dashboard
* Admin dashboard
* Resume upload
* Resume parsing
* Email notifications
* Job recommendation system
* Advanced filtering
* Pagination
* Real-time notifications
* Real-time chat using Socket.IO
* Application status tracking
* Company profiles
* Recruiter job management
* Forgot password
* Email verification

---

## 👨‍💻 Developer

**Shamshad Alam**

**Role:** Full Stack Web Developer / MERN Stack Developer

### Skills

```text
MongoDB
Express.js
React.js
Node.js
JavaScript
HTML
CSS
Tailwind CSS
REST API
Git
GitHub
Postman
Deployment
```

---

## ⭐ Project Highlights

This project demonstrates practical experience in building a **full-stack job portal from frontend to backend and database integration**.

The application follows a complete flow:

```text
React UI
   ↓
User Authentication
   ↓
REST API
   ↓
Express.js
   ↓
MongoDB
   ↓
Job Management
   ↓
Job Application
   ↓
Saved Jobs
   ↓
Deployment
```

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.
