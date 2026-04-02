const Insights = ({ income, expense, balance }) => {
  return (
    <div className="animate-fade-in-up bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border dark:border-gray-700 mt-6">
      <h2 className="text-lg font-semibold mb-2 dark:text-white">Insights</h2>

      <div className="flex flex-col gap-1 text-gray-600 dark:text-gray-300">
        <p>Total Income: ₹{income}</p>
        <p>Total Expense: ₹{expense}</p>
        <p>Savings: ₹{balance}</p>
      </div>
    </div>
  );
};

export default Insights;
