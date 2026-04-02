import { useState, useEffect } from "react";

const AddTransaction = ({ addTransaction, updateTransaction, editData }) => {
  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.date || !form.amount || !form.category) {
      alert("Please fill all fields");
      return;
    }

    addTransaction({
      ...form,
      id: Date.now(),
      amount: Number(form.amount),
    });

    setForm({ date: "", amount: "", category: "", type: "expense" });
  };

  const inputCls = "border dark:border-gray-600 p-2 rounded dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow duration-200";

  return (
    <form onSubmit={handleSubmit} className="animate-fade-in-up bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm border dark:border-gray-700 mt-4">
      <div className="flex gap-2 flex-wrap">
        <input type="date" className={inputCls} value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })} />

        <input placeholder="Amount" className={inputCls} value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })} />

        <input placeholder="Category" className={inputCls} value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })} />

        <select className={inputCls} value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <button className="bg-green-500 hover:bg-green-600 active:scale-95 text-white px-4 py-2 rounded transition-all duration-150">
          {form.id ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default AddTransaction;
