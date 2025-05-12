# 🚀 TestWork – Node.js + PostgreSQL Auth API

A simple and modular user authentication API built with **Node.js**, **Express**, **PostgreSQL**, and **Docker**.

Key features include:

- ✅ User registration and login
- 🔐 Password hashing with `bcrypt`
- 🔑 JWT-based authentication
- 🔒 Protected user list endpoint
- 📘 Swagger API documentation
- 🧪 Integration testing with Jest

---

## 📦 Tech Stack

- **Node.js** / **TypeScript**
- **Express.js**
- **PostgreSQL**
- **Docker / Docker Compose**
- **JWT** (`jsonwebtoken`)
- **bcrypt**
- **Swagger UI**
- **Jest** / **Supertest**

---

## 🛠️ Getting Started

### ✅ Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop)
- [Make](https://www.gnu.org/software/make/) (optional)

### 📄 Environment Variables

Create a `.env` file in the project root:

```env
DB_HOST=db
DB_PORT=5432
DB_USER=admin
DB_PASS=password
DB_NAME=testdb
JWT_SECRET=your_jwt_secret
PORT=3000
```

---

## 🐳 Running the App

Start the app and database using **Docker**:

```bash
docker-compose up --build
```

Or with **Make**:

```bash
make restart
```

Once started, access the API at:  
📍 `http://localhost:3000`  
📚 Swagger docs: `http://localhost:3000/api-docs`

---

## 📘 API Endpoints

| Method | Endpoint     | Description               | Auth Required |
|--------|--------------|---------------------------|---------------|
| POST   | `/register`  | Register a new user       | ❌ No         |
| POST   | `/login`     | Login and get JWT token   | ❌ No         |
| GET    | `/users`     | Get list of users         | ✅ Yes        |

---

## 📂 Project Structure

```bash
.
├── src/
│   ├── controllers/     # Route handlers
│   ├── middleware/      # JWT auth middleware
│   ├── routes/          # API routes
│   ├── models/          # Models
│   ├── services/        # DB connection
│   └── index.ts         # App entry point
├── swagger.json         # Swagger docs
├── Dockerfile
├── docker-compose.yml
├── .env
├── Makefile
├── package.json
├── tsconfig.json
├── README.md
```

---

## 📌 Notes

- 🧱 On first run, the `users` table is created automatically if it doesn't exist.
- ⏳ The app waits for the PostgreSQL container to be ready before launching.
- ⚠️ Ensure ports `5432` (DB) and `3000` (API) are available.

---

Made with ❤️ using Node.js & Docker.
