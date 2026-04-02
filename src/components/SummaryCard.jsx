const SummaryCard = ({ title, value }) => {
  return (
    <div className="animate-fade-in-up bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border dark:border-gray-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mt-1">
        ₹ {value}
      </h2>
    </div>
  );
};

export default SummaryCard;
