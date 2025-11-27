export default function StatisticsCard() {
  return (
    <div className="bg-white rounded-xl shadow p-6 w-full max-w-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Statistics</h2>
        <span className="text-sm text-gray-400">Updated 1 month ago</span>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Sales */}
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-purple-100 rounded-xl text-purple-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2"
              />
            </svg>
          </div>
          <div>
            <p className="text-xl font-semibold">0.00 (৳)</p>
            <p className="text-sm text-gray-500">Opening Balance</p>
          </div>
        </div>

        {/* Customers */}
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-blue-100 rounded-xl text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m-7.5-7.5h15"
              />
            </svg>
          </div>
          <div>
            <p className="text-xl font-semibold">5,342.00 (৳)</p>
            <p className="text-sm text-gray-500">Receive</p>
          </div>
        </div>

        {/* Products */}
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-red-100 rounded-xl text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h18M9 8h6m-8 5h10m-7 5h4"
              />
            </svg>
          </div>
          <div>
            <p className="text-xl font-semibold">0.00 (৳)</p>
            <p className="text-sm text-gray-500">Expense</p>
          </div>
        </div>

        {/* Revenue */}
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-green-100 rounded-xl text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-4 0-4 6 0 6m0-6c4 0 4 6 0 6m0-6V3m0 11v7"
              />
            </svg>
          </div>
          <div>
            <p className="text-xl font-semibold">5,342.00 (৳)</p>
            <p className="text-sm text-gray-500">Balance</p>
          </div>
        </div>
      </div>
    </div>
  );
}
