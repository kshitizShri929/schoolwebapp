# 🏢 School Web App (MERN Stack + Auth + MongoDB)

A full-stack web application for managing student and teacher registrations, logins, and CRUD operations using Node.js, Express, MongoDB, and JWT-based authentication.



## 📌 Features

- 🔐 User authentication with JWT (Login/Register)
- 🧑‍🏫 Separate models for **Students** and **Teachers**
- 🧾 CRUD operations for students & teachers
- ✅ Role-based access (Student/Teacher)
- 📂 MongoDB database integration
- 📁 Clean folder structure & modular code
- 🔐 Passwords hashed using `bcryptjs`



## 🛠 Tech Stack

| Technology     | Description                  |
|----------------|------------------------------|
| Node.js        | JavaScript runtime           |
| Express.js     | Web framework for Node       |
| MongoDB        | NoSQL database               |
| Mongoose       | ODM for MongoDB              |
| bcryptjs       | Password hashing             |
| jsonwebtoken   | JWT authentication           |
| nodemon        | Auto-restart dev server      |


## 📂 Folder Structure


School-web-app/
│
├── models/
│   ├── student.js
│   └── teacher.js
│
├── routes/
│   └── authRoutes.js
│
├── controllers/
│   └── authController.js
│
├── middleware/
│   └── authMiddleware.js
│
├── .env
├── server.js
└── package.json




## 🚀 Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/school-web-app.git
cd school-web-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/schooldb
JWT_SECRET=your_secret_key_here
```

### 4. Start the server

```bash
npm run dev
```



## 🔄 API Endpoints

### Auth Routes (`/api/auth`)

| Method | Endpoint      | Description              |
|--------|----------------|--------------------------|
| POST   | `/register`    | Register student/teacher |
| POST   | `/login`       | Login and get token      |



## 📮 Sample cURL Requests

### ✅ Register

```bash
curl -X POST http://localhost:3000/api/auth/register \
-H "Content-Type: application/json" \
-d '{
  "name": "Shrikant",
  "email": "shrikant@example.com",
  "password": "123456",
  "role": "student",
  "grade": "10th"
}'
```

### 🔐 Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email": "shrikant@example.com",
  "password": "123456",
  "role": "student"
}'
```

![image](https://github.com/user-attachments/assets/0c2bd063-fb50-41ca-afe3-f089a1461939)



## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.



## 📜 License

This project is open-source and available under the [MIT License](LICENSE).



