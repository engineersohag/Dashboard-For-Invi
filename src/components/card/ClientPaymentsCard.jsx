import React from "react";

const data = [
  {
    date: "28/11/2025",
    client: "API TEST CLIENT",
    total: "15,000.00",
    payment: "3,000.00",
  },
  {
    date: "27/11/2025",
    client: "CLIENT 4",
    total: "2,000.00",
    payment: "2,000.00",
  },
  {
    date: "26/11/2025",
    client: "API TEST CLIENT",
    total: "2,000.00",
    payment: "100.00",
  },
  {
    date: "25/11/2025",
    client: "CLIENT 5154",
    total: "195.00",
    payment: "12.00",
  },
  {
    date: "20/11/2025",
    client: "adfasds",
    total: "6,000.00",
    payment: "2,323.00",
  },
  {
    date: "20/11/2025",
    client: "adfasds",
    total: "8,400.00",
    payment: "332.00",
  },
  {
    date: "20/11/2025",
    client: "adfasds",
    total: "50,000.00",
    payment: "232.00",
  },
  {
    date: "20/11/2025",
    client: "adfasds",
    total: "5,000.00",
    payment: "100.00",
  },
  {
    date: "15/11/2025",
    client: "CLIENT 9287",
    total: "1,935.00",
    payment: "0.00",
  },
  {
    date: "15/11/2025",
    client: "CLIENT 9163",
    total: "2,950.00",
    payment: "3,030.00",
  },
];

export default function ClientPaymentsCard() {
  return (
    <div className="overflow-x-auto bg-white shadow rounded-xl p-5">
      <h5 className="text-lg font-semibold mb-4">Client Payments</h5>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-2 px-4 border-b border-gray-200">Date</th>
            <th className="py-2 px-4 border-b border-gray-200">Client</th>
            <th className="py-2 px-4 border-b border-gray-200">Total</th>
            <th className="py-2 px-4 border-b border-gray-200">Payment</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="py-2 px-4 border-b border-gray-200">{row.date}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                {row.client}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {row.total}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {row.payment}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
