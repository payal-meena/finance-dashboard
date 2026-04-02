import { useState, useEffect } from "react";
import { transactionsData } from "./data/mockData";
import SummaryCard from "./components/SummaryCard";
import TransactionTable from "./components/TransactionTable";
import AddTransaction from "./components/AddTransaction";
import Charts from "./components/Charts";
import RoleSwitcher from "./components/RoleSwitcher";
import Insights from "./components/Insights";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : transactionsData;
  });

  const [role, setRole] = useState("viewer");
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("none");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (t) => setTransactions([...transactions, t]);

  const deleteTransaction = (id) =>
    setTransactions(transactions.filter(t => t.id !== id));

  const updateTransaction = (updated) => {
    setTransactions(transactions.map(t => t.id === updated.id ? updated : t));
    setEditData(null);
  };

  const income = transactions.filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions.filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  let filtered = transactions
    .filter(t => t.amount > 0)
    .filter(t => t.category.toLowerCase().includes(search.toLowerCase()))
    .filter(t => typeFilter === "all" || t.type === typeFilter)
    .filter(t => {
  if (startDate && t.date < startDate) return false;
  if (endDate && t.date > endDate) return false;
  return true;
});

  if (sortOrder === "low") filtered.sort((a, b) => a.amount - b.amount);
  if (sortOrder === "high") filtered.sort((a, b) => b.amount - a.amount);

  const exportData = () => {
    const blob = new Blob([JSON.stringify(transactions)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "transactions.json";
    a.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold text-gray-800">Finance Dashboard</h1>
        <RoleSwitcher role={role} setRole={setRole} />
      </div>

      <div className="grid md:grid-cols-3 gap-5 mb-6">
        <SummaryCard title="Balance" value={balance} />
        <SummaryCard title="Income" value={income} />
        <SummaryCard title="Expense" value={expense} />
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-sm border mb-6 flex justify-center">
        <Charts transactions={transactions} />
      </div>

      {role === "admin" && (
        <AddTransaction
          addTransaction={addTransaction}
          updateTransaction={updateTransaction}
          editData={editData}
        />
      )}

      <div className="bg-white p-4 rounded-2xl shadow-sm border mb-4 flex flex-wrap gap-3 items-center">
        <input
          placeholder="Search category..."
          className="border px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border px-3 py-2 rounded-lg"
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <select
          className="border px-3 py-2 rounded-lg"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="none">Sort</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>

        <label>From:</label>
        <input type="date" className="border px-2 py-2 rounded-lg"
          onChange={(e) => setStartDate(e.target.value)} />

        <label>To:</label>
        <input type="date" className="border px-2 py-2 rounded-lg"
          onChange={(e) => setEndDate(e.target.value)} />

        <button
          onClick={exportData}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Export
        </button>

      </div>

      <TransactionTable
        transactions={filtered}
        deleteTransaction={deleteTransaction}
        setEditData={setEditData}
        role={role}
      />

      <Insights income={income} expense={expense} balance={balance} />
    </div>
  );
}

export default App;