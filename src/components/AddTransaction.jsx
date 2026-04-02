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

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mt-4">
      <div className="flex gap-2 flex-wrap">
        <input type="date" className="border p-2" value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })} />

        <input placeholder="Amount" className="border p-2" value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })} />

        <input placeholder="Category" className="border p-2" value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })} />

        <select className="border p-2" value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <button className="bg-green-500 text-white px-4 py-2 rounded">
          {form.id ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
};

export default AddTransaction;