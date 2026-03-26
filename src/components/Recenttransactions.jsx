const RecentTransactions = () => {
  const transactions = [
    { date: "12 Mar", name: "Swiggy", category: "Food", amount: 350, status: "New" },
    { date: "11 Mar", name: "Salary", category: "Income", amount: 25000, status: "New" },
    { date: "10 Mar", name: "Uber", category: "Travel", amount: 220, status: "Done" },
    { date: "09 Mar", name: "Amazon", category: "Shopping", amount: 410, status: "Done" },
  ];

  return (
    <>
      <h2 className="text-3xl font-bold mb-5 text-gray-800 dark:text-white">
        Recent Transactions
      </h2>

      <table className="w-full text-m">
        <thead>
          <tr className="text-gray-700 border-b">
            <th className="py-2 text-left">Date</th>
            <th className="text-left">Name</th>
            <th className="text-left">Category</th>
            <th className="text-left">Amount</th>
            <th className="text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((t, i) => (
            <tr key={i} className="border-b  hover:bg-gray-200">
              <td className="py-2">{t.date}</td>
              <td >{t.name}</td>
              <td>{t.category}</td>
              <td>₹{t.amount}</td>
              <td>
                <span className={`px-3 py-1 rounded text-xs ${
                  t.status === "New"
                    ? "bg-blue-100 text-blue-600"
                    : "bg-green-100 text-green-600"
                }`}>
                  {t.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default RecentTransactions;