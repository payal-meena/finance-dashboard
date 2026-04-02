# 💰 Finance Dashboard UI

A clean and interactive finance dashboard built as part of a Frontend Developer Internship assignment.

This project demonstrates UI design, state management, and user interaction handling using modern frontend technologies.

---

## 🚀 Features

### 📊 Dashboard Overview
- Summary cards for:
  - Total Balance
  - Income
  - Expenses
- Visual representation using charts (spending breakdown)

### 📋 Transactions Management
- View all transactions with:
  - Date
  - Amount
  - Category
  - Type (Income / Expense)
- Features:
  - Search by category
  - Filter (Income / Expense)
  - Sort (Low → High / High → Low)
  - Date range filter

### ✏️ CRUD Functionality
- Add new transactions
- Edit existing transactions
- Delete transactions

### 👤 Role-Based UI
- Viewer:
  - Can only view data
- Admin:
  - Can add, edit, and delete transactions

### 💡 Insights
- Total Income
- Total Expense
- Net Savings

### 💾 Data Persistence
- Data stored using Local Storage
- Retains transactions after page refresh

### 📤 Export Feature
- Export transactions as JSON file

---

## 🛠️ Tech Stack

- React (Vite)
- Tailwind CSS
- Recharts (for charts)
- JavaScript (ES6)

---

## 📁 Project Structure
src/
├── components/
├── data/
├── App.jsx
├── main.jsx
└── index.css

---

## ⚙️ Setup Instructions

1. Clone the repository
git clone https://github.com/payal-meena/finance-dashboard.git

2. Navigate to project folder
cd finance-dashboard

3. Install dependencies
npm install

4. Run the project
npm run dev


---

## 🧠 Approach

- Designed a clean and intuitive UI using Tailwind CSS
- Used React hooks (`useState`, `useEffect`) for state management
- Implemented filtering, sorting, and search for better user experience
- Simulated role-based access control on frontend
- Used Local Storage to persist data without backend
- Focused on modular component structure for scalability

---

## 🎯 Key Highlights

- Fully functional CRUD operations
- Responsive and user-friendly design
- Real-world dashboard behavior simulation
- Clean and maintainable code structure

---

## 📌 Future Improvements

- Backend integration (API)
- Authentication system
- Advanced analytics
- CSV export option

---

## 👩‍💻 Author

**Payal Meena**