import React from "react";

const data = [
  {
    date: "28/11/2025",
    client: "API TEST CLIENT",
    payment: "3,000.00",
    paymentMethod: "ISSB",
  },
  {
    date: "27/11/2025",
    client: "CLIENT 4",
    payment: "2,000.00",
    paymentMethod: "Cash",
  },
  {
    date: "26/11/2025",
    client: "API TEST CLIENT",
    payment: "100.00",
    paymentMethod: "Steadfast",
  },
  {
    date: "25/11/2025",
    client: "CLIENT 5154",
    payment: "12.00",
    paymentMethod: "Cash",
  },
  {
    date: "20/11/2025",
    client: "adfasds",
    payment: "2,323.00",
    paymentMethod: "Bank",
  },
  {
    date: "20/11/2025",
    client: "adfasds",
    payment: "332.00",
    paymentMethod: "Cash",
  },
  {
    date: "20/11/2025",
    client: "adfasds",
    payment: "232.00",
    paymentMethod: "Cash",
  },
  {
    date: "20/11/2025",
    client: "adfasds",
    payment: "100.00",
    paymentMethod: "Cash",
  },
  {
    date: "15/11/2025",
    client: "CLIENT 9287",
    payment: "0.00",
    paymentMethod: "Cash",
  },
  {
    date: "15/11/2025",
    client: "CLIENT 9163",
    payment: "3,030.00",
    paymentMethod: "Cash",
  },
];

export default function ClientPaymentsCard() {
  return (
    <div className="overflow-x-auto bg-white shadow rounded-xl p-5">
      <h5 className="text-lg font-semibold mb-4">Recent Payment Received</h5>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-2 px-4 border-b border-gray-200">Date</th>
            <th className="py-2 px-4 border-b border-gray-200">Client</th>
            <th className="py-2 px-4 border-b border-gray-200">Payment</th>
            <th className="py-2 px-4 border-b border-gray-200">Payment Method</th>
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
                {row.payment}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {row.paymentMethod}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
