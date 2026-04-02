const TransactionTable = ({ transactions, deleteTransaction, setEditData, role }) => {
  return (
    <div className="animate-fade-in-up bg-white dark:bg-gray-800 rounded-2xl shadow-sm border dark:border-gray-700 overflow-x-auto">
      <table className="w-full text-sm">

        <thead className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
          <tr>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Amount</th>
            <th className="p-3 text-left">Category</th>
            <th className="p-3 text-left">Type</th>
            {role === "admin" && <th className="p-3 text-left">Action</th>}
          </tr>
        </thead>

        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center p-4 text-gray-400 dark:text-gray-500">
                No transactions found
              </td>
            </tr>
          ) : (
            transactions.map((t, i) => (
              <tr
                key={t.id}
                className="animate-slide-in border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                <td className="p-3 dark:text-gray-300">{t.date}</td>

                <td className={`p-3 font-medium ${
                  t.type === "income" ? "text-green-600" : "text-red-500"
                }`}>
                  ₹{t.amount}
                </td>

                <td className="p-3 dark:text-gray-300">{t.category}</td>

                <td className="p-3 capitalize dark:text-gray-300">{t.type}</td>

                {role === "admin" && (
                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => setEditData(t)}
                      className="text-blue-500 hover:text-blue-700 transition-colors duration-150"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteTransaction(t.id)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-150"
                    >
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>

      </table>
    </div>
  );
};

export default TransactionTable;
