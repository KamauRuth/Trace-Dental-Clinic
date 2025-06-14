# Trace-Dental-Clinic
Dental clinic website

# Link to Website: https://trace-dental-clinic.onrender.com


# 🗓️ Appointment Booking Web App

This is a simple appointment booking web application built using **HTML, CSS, JavaScript**, and **Node.js (Express)** with **MongoDB** as the backend database. Users can:

* Book an appointment via a form.
* See a green tick confirmation once submitted.
* Get a callback via a simpler contact form.
* Get redirected back to the homepage after submission.

---

## 🌐 Features

* 📆 **Appointment Booking** form with validation.
* ☎️ **Callback Request** form.
* ✅ Confirmation message with green tick upon success.
* 📄 Data stored securely in **MongoDB**.
* 🌍 Client–Server communication using **Fetch API**.
* 🔐 CORS enabled for local development.

---

## 📁 Folder Structure

```
.
├── public/
│   ├── index.html
│   ├── appointment.html
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css
│   │   └── ...
│   └── script.js
├── server.js
├── models/
│   └── Appointment.js
├── routes/
│   ├── appointment.js
│   └── callback.js
├── package.json
└── README.md
```

---

## 🛠️ Technologies Used

* **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
* **Backend**: Node.js, Express.js
* **Database**: MongoDB, Mongoose
* **Other**: CORS, Body-Parser

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/appointment-booking-app.git
cd appointment-booking-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up MongoDB

* Create a MongoDB Atlas cluster or use your local MongoDB instance.
* In your `.env` file (or replace in `server.js`), define:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### 4. Run the Server

```bash
node server.js
```

Your server will start at: `http://localhost:5000`

### 5. Open the Frontend

Open `public/index.html` in your browser.

---

## 🔁 API Endpoints

| Method | Endpoint           | Description               |
| ------ | ------------------ | ------------------------- |
| POST   | `/api/appointment` | Book an appointment       |
| POST   | `/api/callback`    | Submit a callback request |

---

## 📷 Screenshots

| Booking Form                                                                       |               Confirmation Message                |
| -----------------------------                                                      |              ----------------------------------- |
| ![image](https://github.com/user-attachments/assets/b8cce1c0-34b1-4417-be49-a6fe9a6f3c56)
 |![image](https://github.com/user-attachments/assets/e1e3ddf6-7ff4-46db-b889-e54a8f350c62)
 |

---

## ✅ Future Improvements

* Add email/SMS notification.
* Add admin dashboard to view appointments.
* Use React or Vue for frontend.
* Add user authentication.

---

## 📄 License

Free to use

---

