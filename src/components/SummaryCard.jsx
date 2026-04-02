const SummaryCard = ({ title, value }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border hover:shadow-md transition">
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-2xl font-semibold text-gray-800 mt-1">
        ₹ {value}
      </h2>
    </div>
  );
};

export default SummaryCard;