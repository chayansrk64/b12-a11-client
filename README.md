# 💳 MicroLoan Management System

A full-stack web application that allows users to explore loan options, apply for loans, and track application status, while managers and admins can manage loan products, applications, and users efficiently.

---

## 🎯 Purpose

The purpose of this project is to build a **role-based microloan management platform** where:
- Borrowers can apply for loans
- Managers can create and manage loan products
- Admins can oversee users, loans, and applications

This system demonstrates real-world use of **authentication, authorization, CRUD operations, dashboards, and secure APIs**.

---

## 🌐 Live Website

🔗 **Live URL:**  
[live site](https://loanlink-7a1ec.web.app/)  
 

---

## 👥 User Roles

- **Borrower** – Apply for loans and track applications
- **Manager** – Create, update, delete loan products
- **Admin** – Manage users, loans, and loan applications

---

## ✨ Key Features

### 🔐 Authentication & Authorization
- Firebase authentication (Email/Password)
- Role-based access control (Borrower / Manager / Admin)
- Protected routes using JWT

### 💼 Loan Management
- View all available loan products
- Apply for loans with detailed forms
- Loan status tracking (Pending / Approved / Rejected)

### 🧑‍💼 Manager Dashboard
- Add new loan products
- Update and delete existing loans
- Search loans by title
- Toggle **Show on Home** feature

### 🛠️ Admin Dashboard
- Manage users and roles
- Approve / suspend users
- View all loan applications
- Filter loan applications by status

### ⚡ Performance & UX
- Data fetching with React Query
- Optimistic UI updates (no page reload)
- Confirmation modals for delete actions
- Toast notifications for actions

---

## 🧰 Technologies Used

### Frontend
- React
- React Router
- Tailwind CSS
- DaisyUI
- TanStack React Query
- React Icons
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Token)

### Authentication
- Firebase Authentication

---

## 📦 NPM Packages Used

```bash
react
react-router-dom
@tanstack/react-query
axios
firebase
react-icons
react-toastify
express
mongodb
jsonwebtoken
cors
dotenv
