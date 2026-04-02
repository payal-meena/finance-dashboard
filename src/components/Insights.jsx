const Insights = ({ income, expense, balance }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border mt-6">
      <h2 className="text-lg font-semibold mb-2">Insights</h2>

      <div className="flex flex-col gap-1 text-gray-600">
        <p> Total Income: ₹{income}</p>
        <p> Total Expense: ₹{expense}</p>
        <p> Savings: ₹{balance}</p>
      </div>
    </div>
  );
};

export default Insights;