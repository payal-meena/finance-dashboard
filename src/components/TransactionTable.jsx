const TransactionTable = ({ transactions, deleteTransaction, setEditData, role }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
      <table className="w-full text-sm">

        <thead className="bg-gray-100 text-gray-600">
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
              <td colSpan="5" className="text-center p-4 text-gray-400">
                No transactions found
              </td>
            </tr>
          ) : (
            transactions.map((t) => (
              <tr
                key={t.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-3">{t.date}</td>

                <td className={`p-3 font-medium ${
                  t.type === "income"
                    ? "text-green-600"
                    : "text-red-500"
                }`}>
                  ₹{t.amount}
                </td>

                <td className="p-3">{t.category}</td>

                <td className="p-3 capitalize">{t.type}</td>

                {role === "admin" && (
                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => setEditData(t)}
                      className="text-blue-500 hover:underline"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteTransaction(t.id)}
                      className="text-red-500 hover:underline"
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